
import '../style/addtask.css'
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";



function AddTask(){
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const navigate = useNavigate();

    const addTask = async (event) => {
        event.preventDefault();

        const res = await fetch("http://localhost:4000/add-task",{
            method : "POST", 
            headers : {
                "content-Type":"application/json"
            },
            body : JSON.stringify({
                title,
                description
            }),
        });

        const data = await res.json();

        console.log(data);

        if (res.ok) {
            alert("Task added successfully");
            setTitle("");
            setDescription("");
            navigate("/");
        } else {
            alert(data.message || "Failed to add task");
            navigate("/add");
        }

    }

    return(
        <div className="container">
            <h1>Add Task</h1>

            <form className="task-form" onSubmit={addTask}>
                <input className="title-task" type="text" name="title" placeholder="Enter Task Title" onChange={(event)=>setTitle(event.target.value)} />
                <br></br><br></br>
                <textarea className="description-task" name="description" placeholder="Enter Task Description" onChange={(event)=>setDescription(event.target.value)}></textarea>

                <br></br><br></br>
                <button type="submit">Add Task</button>
            </form>
        </div>
    )
}


export default AddTask;