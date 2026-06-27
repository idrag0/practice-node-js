import { Link } from "react-router-dom";
import '../style/header.css'

function Header() {


    return (
        <>
            <nav className="navbar">
                <div >
                    <Link className="logo" to="/">To Do App</Link>
                </div>
                <ul className="nav-links">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/add">Add Task</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Header;