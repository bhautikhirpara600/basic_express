import { MongoClient } from "mongodb";

const client = new MongoClient("mongodb://localhost");
await client.connect();

const db = client.db("my_mongodb");
const userCollection = db.collection("users");

userCollection.insertOne({ name: "Vijay Prajapati", age: 25 });
userCollection.insertOne({ name: "Vijay Gediya", age: 30, profession: 'Teacher' });