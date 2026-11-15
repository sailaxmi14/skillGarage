import { useSelector } from "react-redux";
import './ViewCourses.css';

function ViewCourses() {

    var allcourses = useSelector(state => state.subs.allSubscriptions);

    console.log(allcourses);

    return (
        <>
            <div className="purchased-page">

                {/* Heading */}
                <div className="purchased-heading">
                    <h4>Purchased Courses</h4>
                    <p>View all courses purchased by registered learners.</p>
                </div>

                {/* Purchased Course Cards */}
                <div className="row g-4">

                    {
                        allcourses && allcourses.map((a, i) => (

                            <div className="col-12 col-md-6 col-xl-4" key={i}>

                                <div className="purchase-card">

                                    {/* Card Header */}
                                    <div className="purchase-card-header">
                                        <h5>{a.name}</h5>
                                    </div>

                                    {/* Card Body */}
                                    <div className="purchase-card-body">

                                        <div className="purchase-info">
                                            <div className="purchase-icon">
                                                <i className="fa-solid fa-user"></i>
                                            </div>

                                            <div>
                                                <span>Username</span>
                                                <h6>{a.username}</h6>
                                            </div>
                                        </div>

                                        <div className="purchase-info">
                                            <div className="purchase-icon">
                                                <i className="fa-solid fa-envelope"></i>
                                            </div>

                                            <div>
                                                <span>Email Address</span>
                                                <h6>{a.userMail}</h6>
                                            </div>
                                        </div>

                                        <div className="purchase-info">
                                            <div className="purchase-icon">
                                                <i className="fa-solid fa-phone"></i>
                                            </div>

                                            <div>
                                                <span>Phone Number</span>
                                                <h6>{a.userPhone}</h6>
                                            </div>
                                        </div>

                                    </div>

                                    {/* Footer */}
                                    <div className="purchase-card-footer">
                                        <i className="fa-solid fa-circle-check"></i>
                                        Course Purchased
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

export default ViewCourses;
