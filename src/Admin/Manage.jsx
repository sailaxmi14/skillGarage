import { useDispatch, useSelector } from "react-redux";
import { deleteCourses } from "../Store/CoursesSlice";
import { useNavigate } from "react-router-dom";
import './Manage.css';

function Manage() {

    var courses = useSelector(state => state.courses.coursesList);
    var navigate = useNavigate();
    var dispatch = useDispatch();

    return (
        <>
            <div className="manage-page">

                <div className="manage-title">
                    <h4>Manage Courses</h4>
                    <p>View, update and manage all available courses.</p>
                </div>

                <div className="row g-4">

                    {
                        courses.map((c, i) => (
                            <div className="col-12 col-md-6 col-xl-4" key={i}>

                                <div className="explore-course-card">

                                   
                                    <div className="explore-card-header">
                                        <h4>{c.name}</h4>
                                    </div>

                                   
                                    <div className="explore-card-image">
                                        <img
                                            src={c.image}
                                            alt={c.name}
                                        />
                                    </div>

                                    
                                    <div className="explore-card-body">

                                        <p className="explore-description">
                                            {c.description}
                                        </p>

                                        <div className="explore-info">

                                            <p>
                                                <i className="fa-regular fa-clock"></i>
                                                Duration: {c.duration}
                                            </p>

                                            <p>
                                                <i className="fa-solid fa-users"></i>
                                                Batch No: {c.batch}
                                            </p>

                                        </div>

                                    </div>

                                 
                                    <div className="explore-card-footer">

                                        <h5>Price: ₹{c.Price}</h5>

                                        <div className="manage-actions">

                                            <button
                                                type="button"
                                                onClick={() => navigate('/admin/update/' + c.id)}
                                                className="manage-update"
                                            >
                                                <i className="fa-solid fa-pen me-1"></i>
                                                Update
                                            </button>

                                            <button
                                                type="button"
                                                onClick={() => dispatch(deleteCourses(c))}
                                                className="manage-delete"
                                            >
                                                <i className="fa-solid fa-trash me-1"></i>
                                                Delete
                                            </button>

                                        </div>

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

export default Manage;
