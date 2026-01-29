import { Redis } from "ioredis";
let redis: Redis = new Redis({
    host: "localhost",
    port: 6379,
  });

export default redis;