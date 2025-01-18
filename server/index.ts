import express from "express";
import dotenv from "dotenv"
import db_connect from "./db-connect";

dotenv.config()
const app = express();

app.use(express.json())

app.listen(3000, async () => {
  console.log("SERVER:: success")
  await db_connect(process.env.DATABASE_URL as string)
});

