import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import './Explore.css';

function Explore() {

    var courses = useSelector(state => state.courses.coursesList);

    return (
        <section className="explore-section">

            <div className="explore-heading">
                <h3>Explore Our Courses</h3>
                <p>Discover courses and choose the skills you want to master.</p>
            </div>

            <div className="row g-4">

                {
                    courses.map((c, i) => (
                        <div className="col-12 col-md-6 col-xl-4" key={c.id}>

                            <Link
                                to={`/user/details/${c.id}`}
                                className="explore-link"
                            >

                                <div className="card explore-card h-100">

                                    <div className="card-header">
                                        <h4 className="card-title mb-0">
                                            {c.name}
                                        </h4>
                                    </div>

                                    <div className="card-body">

                                        <img
                                            src={c.image}
                                            className="explore-img"
                                            alt={c.name}
                                        />

                                        <p className="course-description">
                                            {c.description}
                                        </p>

                                        <div className="course-info">
                                            <p>
                                                <i className="fa-regular fa-clock me-2"></i>
                                                Duration: {c.duration}
                                            </p>

                                            <p>
                                                <i className="fa-solid fa-users me-2"></i>
                                                Batch No: {c.batch}
                                            </p>
                                        </div>

                                    </div>

                                    <div className="card-footer">
                                        <h5 className="mb-0">
                                            Price: ₹{c.Price}
                                        </h5>
                                        <span className="view-course">
                                            View Details →
                                        </span>
                                    </div>

                                </div>

                            </Link>

                        </div>
                    ))
                }

            </div>

        </section>
    );
}

export default Explore;
