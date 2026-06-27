import express from "express";
import cors from "cors";
import { collectionName, connection } from "./dbconfig.js";

const app = express();
app.use(cors())
app.use(express.json());

app.get("/api/task", async (req, res) => {
    
        const db = await connection();
        const collection = db.collection(collectionName);

        const result = await collection.find({}).toArray();

        res.status(200).json({
            success: true,
            data: result
        });

    
});


app.post("/add-task", async (req, res) => {
        const db = await connection();
        const collection = db.collection(collectionName);

        const result = await collection.insertOne(req.body);

        res.status(201).send({
            success: true,
            message: "Task added successfully",
            data: result
        });
    
});

app.listen(4000, () => {
    console.log("Server is running on port 5000");
});