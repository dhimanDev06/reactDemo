import { Link } from "react-router-dom";
import logo from "./../../assets/logo192.png"
export const Header = () => {
    return (
        <header>
            {/* <Link to="/" className="logo">
                <img src={logo} alt="" />
            </Link> */}
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                <Link to="/" className="navbar-brand">
                    <img src={logo} alt="" width="30" height="24" className="d-inline-block align-text-top"/>
                
                </Link>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="/" className="nav-link">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                            <Link to="/login" className="nav-link">
                                Login
                            </Link>
                            </li>
                            <li className="nav-item">
                            <Link to="/registration" className="nav-link">
                                Registration
                            </Link>
                            </li>
                            <li className="nav-item">
                            <Link to="/count" className="nav-link">
                                Count
                            </Link>
                            </li>
                            <li className="nav-item">
                            <Link to="/task" className="nav-link">
                                TaskList
                            </Link>
                            </li>
                            <li className="nav-item">
                            <Link to="/form" className="nav-link">
                                Form
                            </Link>
                            </li>
                            <li className="nav-item">
                            <Link to="/apicall" className="nav-link">
                                API Call
                            </Link>
                            </li>
                        </ul>
                    </div>
                    
                {/* <Link to="/" className="logo">
                    Home
                </Link>
                <Link to="/login" className="logo">
                    Login
                </Link>
                <Link to="/registration" className="logo">
                    Registration
                </Link>
                <Link to="/count" className="logo">
                    Count
                </Link>
                <Link to="/task" className="logo">
                    TaskList
                </Link> */}
                </div>
            </nav>
        </header>
    )
}