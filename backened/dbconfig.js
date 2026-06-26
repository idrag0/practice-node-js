import { MongoClient } from "mongodb";



const url = "mongodb+srv://iamaby:abrar1234567@cluster0.fjm4glv.mongodb.net/?appName=Cluster0"
const dbName = "todo";

export const collectionName ="task"
const client = new MongoClient(url);

export const connection =  async ()=>{
    const connect = await client.connect();
    return await connect.db(dbName);
}