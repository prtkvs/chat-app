import "dotenv/config";
import express, {Application, Request, Response} from 'express';
import Routes from "./routes/index.js";
import cors from "cors";

const app: Application = express(); // instance of express app
const port = process.env.PORT || 9001;

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

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
})