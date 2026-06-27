import express from "express";
import { ObjectId } from "mongodb";
import { collectionName, connection } from "./dbconfig.js";
import cors from "cors"


const app = express();
app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173"
  })
);

app.get("/api/task", async (req, res) => {
    
        const db = await connection();
        const collection = db.collection(collectionName);

        const result = await collection.find({}).toArray();

        res.status(200).json({
            success: true,
            data: result
        });

    
});

app.get("/api/task/:id", async (req, res) => {
    const db = await connection();
    const collection = db.collection(collectionName);

    const result = await collection.findOne({
        _id: new ObjectId(req.params.id)
    });

    if (result) {
        res.status(200).json({
            success: true,
            data: result
        });
    } else {
        res.status(404).json({
            success: false,
            message: "Task not found"
        });
    }
});

app.post("/add-task", async (req, res) => {
        const db = await connection();
        const collection = db.collection(collectionName);

        const result = await collection.insertOne(req.body);
        console.log(req.body);

        res.status(201).send({
            success: true,
            message: "Task added successfully",
            data: result
        });
    
});

app.put('/update-task/:id', async(req, res)=>{
    const db = await connection();
    const collection = db.collection(collectionName);

    const result = await collection.updateOne(
        { _id: new ObjectId(req.params.id) },
        { $set: { title: req.body.title, description: req.body.description } }
    );

    if (result.modifiedCount > 0) {
        res.status(200).json({
            success: true,
            message: "Task updated successfully"
        });
    } else {
        res.status(404).json({
            success: false,
            message: "Task not found"
        });
    }
})

app.delete('/delete-task/:id', async(req, res)=>{

    const db = await connection()
    const collection = db.collection(collectionName)

    const result = await collection.deleteOne({
        _id: new ObjectId(req.params.id)
    })

    res.status(200).json({
            success: true,
            message: "Task deleted successfully",
            result
        });
})

app.listen(4000, () => {
    console.log("Server is running on port 4000");
});