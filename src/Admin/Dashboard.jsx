import { Link, Outlet, useNavigate } from "react-router-dom";
import './Dashboard.css';
import { useEffect, useState } from "react";

function AdminDashboard() {

    var navigateTo = useNavigate();
    var [sidebarOpen, setSidebarOpen] = useState(false);

    useEffect(() => {
        if (!localStorage.getItem('isAdmin')) {
            navigateTo('/');
        }
    }, [navigateTo]);

    function logoutFun() {
        localStorage.clear();
        navigateTo('/');
    }

    function closeSidebar() {
        setSidebarOpen(false);
    }

    return (
        <>
           
            <div className="mobile-header">
                <h4 className="mb-0 fw-bold text-white">
                    Skill <span className="text-info">Garage</span>
                </h4>

                <button
                    className="menu-toggle"
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                    aria-label="Toggle navigation"
                    aria-expanded={sidebarOpen}
                >
                    <i className={`fa-solid ${sidebarOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
                </button>
            </div>

            <div className='row admin-row'>

                <div className='col-md-2'>

                    <div className={`sidebar d-flex flex-column vh-100 ${sidebarOpen ? 'show-sidebar' : ''}`}>

                        <div className="sidebar-brand d-flex align-items-center p-4 border-bottom">
                            <i className="fa-solid fa-graduation-cap fs-3 text-info me-2"></i>

                            <h4 className="mb-0 fw-bold text-white">
                                Skill <span className="text-info">Garage</span>
                            </h4>
                        </div>

                        <ul className="nav flex-column p-3 flex-grow-1">

                            <li className="nav-item mb-2">
                                <Link to="/admin/home" onClick={closeSidebar} className="nav-link sidebar-link">
                                    <i className="fa-solid fa-house me-3 text-info"></i>
                                    Home
                                </Link>
                            </li>

                            <li className="nav-item mb-2">
                                <Link to="/admin/add" onClick={closeSidebar} className="nav-link sidebar-link">
                                    <i className="fa-solid fa-book me-3 text-info"></i>
                                    Add Courses
                                </Link>
                            </li>

                            <li className="nav-item mb-2">
                                <Link to="/admin/manage" onClick={closeSidebar} className="nav-link sidebar-link">
                                    <i className="fa-brands fa-leanpub me-3 text-info"></i>
                                    Manage Courses
                                </Link>
                            </li>

                            <li className="nav-item mb-2">
                                <Link to="/admin/viewall" onClick={closeSidebar} className="nav-link sidebar-link">
                                    <i className="fa-solid fa-file-alt me-3 text-info"></i>
                                    View all Courses
                                </Link>
                            </li>
{/* 
                            <li className="nav-item mb-2">
                                <Link to="/admin/viewusers" onClick={closeSidebar} className="nav-link sidebar-link">
                                    <i className="fa-solid fa-user-group me-3 text-info"></i>
                                    View Users
                                </Link>
                            </li> */}

                        </ul>

                        <div className="p-3 border-top">
                            <button onClick={logoutFun} className="nav-link sidebar-link w-100">
                                <i className="fa-solid fa-right-from-bracket me-3 text-danger"></i>
                                Logout
                            </button>
                        </div>

                    </div>

                </div>

                <div className='col-md-10 main-content'>

                    <h3 className='fs-3 fw-bold m-4'>
                        Welcome to Admin Portal
                    </h3>

                    <Outlet />

                </div>

            </div>
        </>
    );
}

export default AdminDashboard;
