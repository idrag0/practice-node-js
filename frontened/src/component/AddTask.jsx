
import '../style/addtask.css'

function AddTask(){


    return(
        <div className="container">
            <h1>Add Task</h1>

            <form className="task-form" action="" method="post">
                <input className="title-task" type="text" name="title" placeholder="Enter Task Title" />
                <br></br><br></br>
                <textarea className="description-task" name="description" placeholder="Enter Task Description"></textarea>

                <br></br><br></br>
                <button type="submit">Add Task</button>
            </form>
        </div>
    )
}


export default AddTask;