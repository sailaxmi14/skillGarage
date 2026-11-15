import { Link } from "react-router-dom";
import './Home.css';
import { useSelector } from "react-redux";

function AdminHome() {
    var courses=useSelector(state=>state.courses.coursesList)
    var users=useSelector(state=>state.subs.allSubscriptions)
    return (
        <>
            <div className="admin-home">

               
                <div className="home-welcome">
                    <h4>Quick Actions</h4>
                    <p>Manage your learning platform from one place.</p>
                </div>

                
                <div className="container-fluid px-0">
                    <div className="row g-4">

                        <div className="col-12 col-sm-6 col-xl-4">
                            <div className="action-card">
                                <div className="action-icon">
                                    <i className="fa-solid fa-book-open"></i>
                                </div>

                                <h5>Add Courses</h5>

                                <p>
                                    Create and publish new learning courses
                                    for students to explore.
                                </p>

                                <Link to="/admin/add" className="action-btn">
                                    Add New Courses
                                    <i className="fa-solid fa-arrow-right ms-2"></i>
                                </Link>
                            </div>
                        </div>

                        <div className="col-12 col-sm-6 col-xl-4">
                            <div className="action-card">
                                <div className="action-icon">
                                    <i className="fa-solid fa-pen-to-square"></i>
                                </div>

                                <h5>Manage Courses</h5>

                                <p>
                                    Update course information, edit details
                                    and remove outdated courses.
                                </p>

                                <Link to="/admin/manage" className="action-btn">
                                    Update / Delete
                                    <i className="fa-solid fa-arrow-right ms-2"></i>
                                </Link>
                            </div>
                        </div>

                        <div className="col-12 col-sm-6 col-xl-4">
                            <div className="action-card">
                                <div className="action-icon">
                                    <i className="fa-solid fa-users"></i>
                                </div>

                                <h5>View Users</h5>

                                <p>
                                    Explore registered learners and
                                    view their profiles.
                                </p>

                                <Link to="/admin/viewall" className="action-btn">
                                    Know People
                                    <i className="fa-solid fa-arrow-right ms-2"></i>
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="stats-heading">
                    <h4>Platform Overview</h4>
                    <p>Quick summary of your learning platform.</p>
                </div>

                <div className="row g-4">

                    <div className="col-12 col-sm-6">
                        <div className="stats-card">
                            <div className="stats-icon">
                                <i className="fa-solid fa-graduation-cap"></i>
                            </div>

                            <div>
                                <p>Total Courses</p>
                                <h3>{courses.length}</h3>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-sm-6">
                        <div className="stats-card">
                            <div className="stats-icon">
                                <i className="fa-solid fa-users"></i>
                            </div>

                            <div>
                                <p>Total Courses Subscribed</p>
                                <h3>{users.length}</h3>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </>
    );
}

export default AdminHome;
