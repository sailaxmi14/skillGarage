import { Link, Outlet, useNavigate } from "react-router-dom";
import './Dashboard.css';
import { useEffect, useState } from "react";

function UserDashboard() {

    const [username, setUsername] = useState("");
    const navigateTo = useNavigate();

    useEffect(() => {
        if (!localStorage.getItem('isUser')) {
            navigateTo('/login');
        }
        else {
            setUsername(localStorage.getItem("isUser"));
        }
    }, [navigateTo]);

    function logoutFun() {
        localStorage.removeItem('isUser');
        navigateTo('/login');
    }

    return (
        <div className="user-dashboard">

          
            <aside className="sidebar">

                <div className="sidebar-brand">
                    <i className="fa-solid fa-graduation-cap fs-3 text-info me-2"></i>

                    <h4 className="mb-0 fw-bold text-white">
                        Skill <span className="text-info">Garage</span>
                    </h4>
                </div>

                <ul className="nav flex-column p-3 flex-grow-1">

                    <li className="nav-item mb-2">
                        <Link to="/user/home" className="nav-link sidebar-link">
                            <i className="fa-solid fa-house me-3 text-info"></i>
                            Home
                        </Link>
                    </li>

                    <li className="nav-item mb-2">
                        <Link to="/user/explore" className="nav-link sidebar-link">
                            <i className="fa-solid fa-magnifying-glass me-3 text-info"></i>
                            Explore
                        </Link>
                    </li>

                    <li className="nav-item mb-2">
                        <Link to="/user/saved" className="nav-link sidebar-link">
                            <i className="fa-solid fa-bookmark me-3 text-info"></i>
                            Saved List
                        </Link>
                    </li>

                    <li className="nav-item mb-2">
                        <Link to="/user/subscription" className="nav-link sidebar-link">
                            <i className="fa-solid fa-fire me-3 text-info"></i>
                            Subscribe
                        </Link>
                    </li>

                </ul>

               
                <div className="sidebar-logout">
                    <button onClick={logoutFun} className="nav-link sidebar-link">
                        <i className="fa-solid fa-right-from-bracket me-3 text-danger"></i>
                        Logout
                    </button>
                </div>

            </aside>

            
            <main className="dashboard-content">

                <h3 className="dashboard-welcome">
                    Hey {username} !
                </h3>

                <div className="dashboard-page">
                    <Outlet />
                </div>

            </main>

        </div>
    );
}

export default UserDashboard;
