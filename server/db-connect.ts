import * as mongoose from "mongoose";

export default async function db_connect (port: string) {
  try {
    await mongoose.connect(port)
    console.log("DATABASE:: success")
  } catch (e) {
    console.error(e)
  }
}