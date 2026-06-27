import React, { useState, useEffect } from 'react';
import '../style/home.css'
import { useNavigate } from 'react-router-dom';

function Home() {
    const [tasks, setTasks] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('http://localhost:4000/api/task')
            .then(res => res.json() )
            .then(data => {
                if (data.success) {
                    setTasks(data.data);
                } else {
                    console.error('Failed to fetch tasks:', data.message);
                }
            })
            .catch(error => console.error('Error fetching tasks:', error));
    }, []);

    async function deleteTask(id){
        const res = await fetch(`http://localhost:4000/delete-task/${id}`,{
            method : "DELETE",  
        })

        const data = await res.json();

        if(res.ok){
            alert("Task deleted successfully");

            setTasks(prevTasks => prevTasks.filter(task => task._id !== id));
            navigate('/')
        } else {
            alert(data.message || 'Failed to delete task');
        }
    }


    return (
        <div className="container">
            <h1>Tasks</h1>
            <ul>
                {
                    Array.isArray(tasks) &&
                    tasks.map(task => (
                        <div key={task._id} className="task-item">
                            <div className="task-title">{task.title}</div>
                            <div className="task-description">{task.description}</div>
                            <div className='bnt-container'>
                                <button className='update-bnt' onClick={()=>navigate(`/update/${task._id}`)} >Update</button>
                                <button className='delete-bnt' onClick={()=>{deleteTask(task._id)}}>Delete</button>
                            </div>

                        </div>
                    ))
                }
            </ul>
        </div>
    )
}


export default Home;