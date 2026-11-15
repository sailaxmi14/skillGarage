import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getOneCourse } from "../Store/CoursesSlice";
import { addToCart } from "../Store/CartSlice";
import { addToSubscription } from "../Store/SubscriptionSlice";
import Swal from "sweetalert2";
import './CourseDetails.css';

export default function CourseDetails() {
    var mylist = useSelector(state => state.cart.myCourse)
    const dispatch = useDispatch();
    const { pid } = useParams();

    const [phone, setPhone] = useState("");
    const [mail, setMail] = useState("");

    useEffect(() => {
        dispatch(getOneCourse(pid));
    }, [dispatch, pid]);

    var reqcourse = useSelector(
        (state) => state.courses.selectedCourse
    );

    function handleCart() {
        var username = localStorage.getItem('isUser');
        var already = mylist.some((obj) => obj.username == username && obj.id == reqcourse.id)
        if (already) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "You already Added!",
            });
        }
        else {
            var obj = {
                ...reqcourse,
                status: "null",
                username: localStorage.getItem("isUser")
            };

            dispatch(addToCart(obj));

            Swal.fire({
                title: "Added to Saved List!",
                text: "Your course has been saved successfully.",
                icon: "success"
            });
        }

    }

    function purchaseOne(e) {

        e.preventDefault();

        var orderObj = {
            ...reqcourse,
            username: localStorage.getItem("isUser"),
            userPhone: phone,
            userMail: mail,
            status: "null"
        };

        dispatch(addToSubscription(orderObj));

        Swal.fire({
            title: "Yayyy!",
            text: "Subscription added successfully!",
            icon: "success"
        });
    }

    return (
        <section className="course-details-section">

            <h3 className="details-heading">
                Course Details
            </h3>

            {reqcourse && (

                <div className="container-fluid">

                    <h2 className="selected-course-title">
                        {reqcourse.name}
                    </h2>

                    <div className="row g-4 align-items-stretch">


                        <div className="col-12 col-lg-5">

                            <div className="card details-image-card h-100">

                                <img
                                    src={reqcourse.image}
                                    className="details-course-img"
                                    alt={reqcourse.name}
                                />

                            </div>

                        </div>

                        <div className="col-12 col-lg-7">

                            <div className="card details-info-card h-100">

                                <div className="card-body">

                                    <h4 className="details-info-title">
                                        About This Course
                                    </h4>

                                    <p className="details-description">
                                        {reqcourse.description}
                                    </p>

                                    <hr />

                                    <div className="details-info-grid">

                                        <div className="detail-item">
                                            <i className="fa-regular fa-clock"></i>
                                            <div>
                                                <small>Duration</small>
                                                <h6>{reqcourse.duration}</h6>
                                            </div>
                                        </div>

                                        <div className="detail-item">
                                            <i className="fa-solid fa-language"></i>
                                            <div>
                                                <small>Language</small>
                                                <h6>{reqcourse.language}</h6>
                                            </div>
                                        </div>

                                        <div className="detail-item">
                                            <i className="fa-solid fa-users"></i>
                                            <div>
                                                <small>Current Batch</small>
                                                <h6>{reqcourse.batch}</h6>
                                            </div>
                                        </div>

                                        <div className="detail-item">
                                            <i className="fa-solid fa-indian-rupee-sign"></i>
                                            <div>
                                                <small>Course Price</small>
                                                <h6>₹{reqcourse.Price}</h6>
                                            </div>
                                        </div>

                                    </div>

                                    <hr />

                                    <div className="details-actions">

                                        <button
                                            className="btn save-course-btn"
                                            onClick={handleCart}
                                        >
                                            <i className="fa-regular fa-bookmark me-2"></i>
                                            Save for Later
                                        </button>

                                        <button
                                            className="btn purchase-course-btn"
                                            data-bs-toggle="modal"
                                            data-bs-target="#purchaseModal"
                                        >
                                            Purchase Now
                                            <i className="fa-solid fa-arrow-right ms-2"></i>
                                        </button>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>
            )}


            <div className="modal fade" id="purchaseModal" tabIndex="-1">

                <div className="modal-dialog modal-dialog-centered">

                    <div className="modal-content purchase-modal">

                        <div className="modal-header">

                            <h5 className="modal-title fw-bold">
                                Start Your Subscription
                            </h5>

                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                            ></button>

                        </div>

                        <div className="modal-body">

                            <p className="text-muted">
                                Enter your contact details to continue.
                            </p>

                            <form onSubmit={purchaseOne}>

                                <div className="mb-3">
                                    <label className="form-label">
                                        Email Address
                                    </label>

                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder="Enter your email"

                                        onChange={(e) => setMail(e.target.value)}
                                        required
                                    />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">
                                        Phone Number
                                    </label>

                                    <input
                                        type="tel"
                                        className="form-control"
                                        placeholder="Enter your phone number"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}

                                        required
                                    />
                                </div>

                                <button
                                    type="submit"
                                    data-bs-dismiss="modal"
                                    className="btn purchase-course-btn w-100 mt-3"
                                >
                                    Start Subscription
                                </button>

                            </form>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}
