import "dotenv/config";
import express, {Application, Request, Response} from 'express';
import Routes from "./routes/index.js";
import cors from "cors";
import { Server } from "socket.io";
import { createServer } from "http";
import { setupSocket } from "./socket.js";
import { createAdapter } from "@socket.io/redis-streams-adapter";
import redis from "./config/redis.config.js";
import { instrument } from "@socket.io/admin-ui";

const app: Application = express(); // instance of express app
const port = process.env.PORT || 9001;

const server = createServer(app);

const io = new Server(server, {
  cors: {
    origin: ["http://localhost:3000", "https://admin.socket.io"],
    credentials: true
  },
  adapter: createAdapter(redis),
});

instrument(io, {
  auth: false,
  mode: "development",
});

setupSocket(io);
export { io };

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(express.json()); 

app.get("/", (req:Request, res:Response)=>{
    res.send("Hello Chat App Backend");
    console.log("Api is working");
})

app.use("/api", Routes);

server.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
})


// app.listen(port, ()=>{
//     console.log(`Server is running on port ${port}`);
// })
