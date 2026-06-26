import express from "express";
import { collectionName, connection } from "./dbconfig.js";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send({
        message: "hello",
        success: true
    });
});

app.post("/add-task", async (req, res) => {
    try {
        const db = await connection();
        const collection = db.collection(collectionName);

        const result = await collection.insertOne(req.body);

        res.status(201).send({
            success: true,
            message: "Task added successfully",
            data: result
        });
    } catch (error) {
        res.status(500).send({
            success: false,
            message: error.message
        });
    }
});

app.listen(3200, () => {
    console.log("Server is running on port 3200");
});