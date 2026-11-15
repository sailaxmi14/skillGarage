import { useSelector } from "react-redux";
import './ViewUsers.css';

function ViewUsers() {

    var allcourses = useSelector(state => state.subs.allSubscriptions);

    // Group courses based on username
    var allUsers = Object.values(
        allcourses.reduce((acc, obj) => {

            if (!acc[obj.username]) {
                acc[obj.username] = {
                    username: obj.username,
                    userMail: obj.userMail,
                    userPhone: obj.userPhone,
                    courses: []
                };
            }

            acc[obj.username].courses.push(obj.name);

            return acc;

        }, {})
    );

    console.log(allUsers);

    return (
        <>
            <div className="purchased-page">

                <div className="purchased-heading">
                    <h4>Registered Users & Purchased Courses</h4>
                    <p>View all users and the courses they have enrolled in.</p>
                </div>

                <div className="row g-4">

                    {
                        allUsers.map((u, i) => (

                            <div className="col-12 col-md-6 col-xl-4" key={i}>

                                <div className="user-purchase-card">

                                    <div className="user-card-header">

                                        <div className="user-avatar">
                                            <i className="fa-solid fa-user"></i>
                                        </div>

                                        <div>
                                            <h5>{u.username}</h5>
                                            <span>Registered Learner</span>
                                        </div>

                                    </div>

                                  
                                    <div className="user-card-body">

                                        <div className="user-detail">
                                            <i className="fa-solid fa-envelope"></i>
                                            <div>
                                                <span>Email Address</span>
                                                <p>{u.userMail}</p>
                                            </div>
                                        </div>

                                        <div className="user-detail">
                                            <i className="fa-solid fa-phone"></i>
                                            <div>
                                                <span>Phone Number</span>
                                                <p>{u.userPhone}</p>
                                            </div>
                                        </div>

                                       
                                        <div className="user-courses">

                                            <h6>
                                                <i className="fa-solid fa-book-open me-2"></i>
                                                Purchased Courses
                                            </h6>

                                            <div className="course-list">

                                                {
                                                    u.courses.map((course, index) => (
                                                        <span className="course-badge" key={index}>
                                                            <i className="fa-solid fa-check-circle me-2"></i>
                                                            {course}
                                                        </span>
                                                    ))
                                                }

                                            </div>

                                        </div>

                                    </div>

                                    
                                    <div className="user-card-footer">
                                        <span>
                                            Total Courses Purchased
                                        </span>

                                        <strong>{u.courses.length}</strong>
                                    </div>

                                </div>

                            </div>

                        ))
                    }

                </div>

            </div>
        </>
    );
}

export default ViewUsers;
