
import '../style/addtask.css'
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from "react-router-dom";

function Update(){
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        const fetchTask = async () => {
            const res = await fetch(`http://localhost:4000/api/task/${id}`);
            const data = await res.json();

            if (res.ok && data.success) {
                setTitle(data.data.title);
                setDescription(data.data.description);
            }
        };

        if (id) {
            fetchTask();
        }
    }, [id]);

    const addTask = async (event) => {
        event.preventDefault();

        const res = await fetch(`http://localhost:4000/update-task/${id}`,{
            method : "PUT", 
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
            alert("Task updated successfully");
            setTitle("");
            setDescription("");
            navigate("/");
        } else {
            alert(data.message || "Failed to update task");
        }

    }

    return(
        <div className="container">
            <h1>Update Task</h1>

            <form className="task-form" onSubmit={addTask}>
                <input className="title-task" type="text" name="title" placeholder="Enter Task Title" value={title} onChange={(event)=>setTitle(event.target.value)} />
                <br></br><br></br>
                <textarea className="description-task" name="description" placeholder="Enter Task Description"  value={description} onChange={(event)=>setDescription(event.target.value)}></textarea>

                <br></br><br></br>
                <button type="submit">Update Task</button>
            </form>
        </div>
    )
}


export default Update;