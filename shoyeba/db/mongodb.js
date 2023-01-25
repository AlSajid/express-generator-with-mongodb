import { MongoClient } from "mongodb";
import dotenv from 'dotenv';
dotenv.config()

const uri = `mongodb://localhost:27017`;
const client = new MongoClient(uri);
const database = client.db("insertDB")


export default database;
