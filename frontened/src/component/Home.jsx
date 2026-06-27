import React, { useState, useEffect } from 'react';

function Home() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/api/task')
            .then(response => response.json())
            .then(data => setTasks(data))
            .catch(error => console.error('Error fetching tasks:', error));
    }, []);

    console.log(tasks);

    return (
        <div>
            <h1>Home Page</h1>
            <ul>
                {
                    Array.isArray(tasks) &&
                    tasks.map(task => (
                        <div key={task._id}>
                            <h2>{task.title}</h2>
                            <h3>{task.description}</h3>
                        </div>
                    ))
                }
            </ul>
        </div>
    )
}


export default Home;