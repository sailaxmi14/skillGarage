import { Link } from "react-router-dom";
import './Home.css'
function UserHome() {
    return (
        <>
            <section className="user-about container py-5" id="about">
                <h3 className="fw-bold ">Do you know what we serve?</h3>
                <p className="text-center mb-5">
                    Your learning journey starts with Skill Garage. </p>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="card shadow text-center p-4 h-100">
                                <h3>Explore Courses</h3>
                                <p>
                                    Discover a wide range of courses
                                    including Generative AI, MERN Stack,
                                    Data Science and more.
                                </p>
                                <Link to='/user/explore' className="btn btn-info">
                                    Explore Now
                                </Link>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="card shadow text-center p-4 h-100">
                                <h3>Learn for Free</h3>
                                <p>
                                    Sign up and access learning resources
                                    freely. Learn anytime and at your
                                    own pace without limitations.
                                </p>
                                <Link to='/user/explore' className="btn btn-info">
                                    Start Learning
                                </Link>

                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="card shadow text-center p-4 h-100">
                                <h3>Grow Your Skills</h3>
                                <p>
                                    Gain practical knowledge, improve
                                    your technical skills and prepare
                                    for your future career.
                                </p>
                                <Link to='/user/explore' className="btn btn-info">
                                    Get Started
                                </Link>

                            </div>
                        </div>
                    </div>
                </div>

            </section>

            <section className="trending container-fluid py-5" id="explore">

                <h3 className="fw-bold text-center mb-4">
                    Trending Courses
                </h3>

                <div className="row g-4">

                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="card course-card text-center h-100">
                            <div className="card-header">
                                <h4>Gen AI</h4>
                            </div>
                            <div className="card-body">
                                <img
                                    className="course-img"
                                    src="https://nationalskillsnetwork.in/wp-content/uploads/2024/03/Free-Generative-AI-Courses-for-Beginners.jpg"
                                    alt="Generative AI"
                                />
                                <p>
                                    Explore the world of Generative AI and learn
                                    to build intelligent applications using AI
                                    tools, Large Language Models (LLMs), prompt
                                    engineering, and modern AI technologies.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="card course-card text-center h-100">
                            <div className="card-header">
                                <h4>MERN Stack</h4>
                            </div>
                            <div className="card-body">
                                <img
                                    className="course-img"
                                    src="https://five.co/wp-content/uploads/2023/08/blog-mern-stack-1024x451.png"
                                    alt="MERN Stack"
                                />
                                <p>
                                    Master full-stack web development using
                                    MongoDB, Express.js, React.js, and Node.js.
                                    Learn to build dynamic, responsive, and
                                    interactive web applications from scratch.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="card course-card text-center h-100">
                            <div className="card-header">
                                <h4>Data Science</h4>
                            </div>
                            <div className="card-body">
                                <img
                                    className="course-img"
                                    src="https://www.naukri.com/campus/career-guidance/wp-content/uploads/2023/11/what-is-data-science.jpg"
                                    alt="Data Science"
                                />
                                <p>
                                    Discover the power of data through Python,
                                    statistics, data visualization, and machine
                                    learning. Develop practical skills to analyze
                                    data and make smarter decisions.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>


        </>
    )
}
export default UserHome;