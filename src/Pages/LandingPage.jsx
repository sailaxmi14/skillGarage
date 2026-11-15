import { useRef } from 'react';
import './LandingPage.css';
import { useNavigate } from 'react-router-dom';
function LandingPage() {
    var username = useRef("");
    var password = useRef("");
    var navigateTo = useNavigate("");
    function checkLogin(e) {
        e.preventDefault();
        var reqpwd = username.current.value.slice(0, 3) + "123"
        if (username.current.value == 'admin' && password.current.value == 'admin123') {
            localStorage.setItem("isAdmin", username.current.value)
            navigateTo('/admin/home')
        }
        else if (password.current.value == reqpwd) {
            localStorage.setItem("isUser", username.current.value)
            navigateTo('/user/home')
        }
        else {
            alert('You entered wrong credentials.')
        }
    }
    return (
        <>

            <div className="nav-land">
                <nav className="navbar navbar-expand-md navbar-dark bg-dark px-3 px-md-5">

                    <div className="container-fluid">


                        <div className="navbar-brand d-flex align-items-center">
                            <i className="fa-solid fa-graduation-cap fs-3 text-info me-2"></i>
                            <h4 className="mb-0 fw-bold text-white">
                                Skill <span className="text-info">Garage</span>
                            </h4>
                        </div>

                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarContent"
                            aria-controls="navbarContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarContent">

                            <ul className="navbar-nav mx-auto gap-md-3 text-center">
                                <li className="nav-item">
                                    <a className="nav-link" href="#learn">Explore</a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link" href="#learn">What We Serve</a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link" href="#learn">Learn with Us</a>
                                </li>
                            </ul>

                            <div className="text-center">
                                <button
                                    data-bs-target="#loginModal"
                                    data-bs-toggle="modal"
                                    className="btn btn-light px-4"
                                >
                                    Login
                                </button>
                            </div>

                        </div>
                    </div>
                </nav>
            </div>





            <div className="landing-img d-flex align-items-center justify-content-center text-white">
                <div className="text-center">
                    <h1>Welcome to Skill Garage</h1>
                    <p>Discover skills. Learn more. Grow your future.</p>
                </div>
            </div>
            <section className="container py-5 my-5" id="learn">

                <div className="mb-5">
                    <h3 className="fw-bold">Learn With Us</h3>
                    <p className="text-center">
                        Four simple steps to begin your learning journey.
                    </p>
                </div>

                <div className="row g-4 text-center">

                    <div className="col-12 col-sm-6 col-lg-3">
                        <div className="p-4 shadow rounded h-100">
                            <i className="bi bi-person-plus fs-1 text-success"></i>
                            <h5 className="fw-bold mt-3">Create Account</h5>
                            <p>Register and join our learning community.</p>
                        </div>
                    </div>

                    <div className="col-12 col-sm-6 col-lg-3">
                        <div className="p-4 shadow rounded h-100">
                            <i className="bi bi-book fs-1 text-success"></i>
                            <h5 className="fw-bold mt-3">Choose Courses</h5>
                            <p>Explore courses and select your interests.</p>
                        </div>
                    </div>

                    <div className="col-12 col-sm-6 col-lg-3">
                        <div className="p-4 shadow rounded h-100">
                            <i className="bi bi-mortarboard fs-1 text-success"></i>
                            <h5 className="fw-bold mt-3">Start Learning</h5>
                            <p>Learn new concepts at your own pace.</p>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="p-4 shadow rounded h-100">
                            <i className="bi bi-trophy fs-1 text-success"></i>
                            <h5 className="fw-bold mt-3">Achieve Goals</h5>
                            <p>Build skills and move towards your career goals.</p>
                        </div>
                    </div>

                </div>

                <div className="text-center mt-5">
                    <h3>Ready to Start Learning?</h3>
                    <p>Join Skill Garage and turn your curiosity into skills.</p>
                    <button data-bs-target="#loginModal" data-bs-toggle="modal" className="btn btn-success btn-lg px-5">Join Now</button>
                </div>

            </section>


            <footer className="bg-dark text-white pt-5 mt-3 text-center">
                <div className="container-fluid">
                    <div className="row">

                        <div className="col-md-4">
                            <h5>About Us</h5>
                            <ul className="list-unstyled">

                                <li>Watch Courses</li>
                                <li>Learn Here</li>
                            </ul>
                        </div>

                        <div className="col-md-4">
                            <h5>Contact Us</h5>
                            <ul className="list-unstyled">
                                <li>skillgarage@gmail.com</li>
                                <li>Miyapur, Hyderabad</li>
                            </ul>
                        </div>

                        <div className="col-md-4">
                            <h5>More</h5>
                            <ul className="list-unstyled">
                                <li>Suggest to Your Friends</li>
                                <li>Explore Courses</li>
                            </ul>
                        </div>

                    </div>
                </div>
            </footer>
            <div className="modal fade" id="loginModal" tabIndex="-1">
                <div className="modal-dialog modal-dialog-centered login-modal-dialog">

                    <div className="modal-content login-modal-content">

                        
                        <button
                            type="button"
                            className="btn-close btn-close-white login-close"
                            data-bs-dismiss="modal"
                            aria-label="Close">
                        </button>

                        <div className="modal-body login-body">

                            <form onSubmit={checkLogin}>

                                <h2 className="login-title mb-4">
                                    Log in
                                </h2>

                                {/* username */}
                                <div className="mb-4">
                                    <input
                                        type="text"
                                        className="form-control login-input"
                                        placeholder="Username"
                                        required
                                        ref={username}
                                    />
                                </div>

                                <div className="mb-4">
                                    <input
                                        type="password"
                                        className="form-control login-input"
                                        placeholder="Password"
                                        required
                                        ref={password}
                                    />
                                </div>

                               
                                <div className="mb-4">
                                    <button
                                        type="submit"
                                        className="btn login-btn w-100"
                                        data-bs-dismiss="modal">
                                        LOGIN
                                    </button>
                                </div>

                              
                                <div className="mb-5">
                                    <a href="#loginModal" className="forgot-link">
                                        Forgot password?
                                    </a>
                                </div>

                            
                                <p className="register-text">
                                    Don't have an account?
                                    <a href="#loginModal" className="register-link ms-1">
                                        Register here
                                    </a>
                                </p>

                            </form>

                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default LandingPage;