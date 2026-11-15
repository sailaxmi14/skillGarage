import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSubscriptionByUsername } from "../Store/SubscriptionSlice";
import "./Subscribe.css";

function Subscribed() {
    var mysub = useSelector(state => state.subs.mySubscription);
    console.log(mysub);

    var dispatch = useDispatch();

    useEffect(() => {
        var username = localStorage.getItem("isUser");
        dispatch(getSubscriptionByUsername(username));
    }, [dispatch])

    return (
        <>
            <div className="subscribed-page">

                <div className="subscribed-heading">
                    <div>
                        <h2>My Subscriptions</h2>
                        <p>Explore and manage all the courses you have subscribed to.</p>
                    </div>

                    <div className="subscription-count">
                        
                        <div>
                            <h3>{mysub.length}</h3>
                            <span>Active Courses</span>
                        </div>
                    </div>
                </div>

                <div className="subscription-section-title">
                    <h5>Your Learning Journey</h5>
                    
                </div>

                <div className="row g-4">
                    {
                        mysub &&
                        mysub.map((o, i) => (
                            <div className="col-12 col-md-6 col-xl-4" key={i}>
                                <div className="subscription-card">

                                    <div className="subscription-card-header">
                                        <span className="course-number">
                                            COURSE {i+1}
                                        </span>
                                        
                                        <h4>{o.name}</h4>
                                    </div>

                                    <div className="subscription-card-body">

                                        <img
                                            src={o.image}
                                            className="subscription-image"
                                            alt={o.name}
                                        />

                                        <div className="subscription-details">
                                            <div className="subscription-detail-item">
                                                <i className="bi bi-currency-rupee"></i>
                                                <div>
                                                    <small>Course Price</small>
                                                    <strong>₹{o.Price}</strong>
                                                </div>
                                            </div>

                                            
                                        </div>

                                    </div>

                                    <div className="subscription-contact">
                                        <h6>
                                            <i className="bi bi-person-lines-fill me-2"></i>
                                            Contact Information
                                        </h6>

                                        <p>
                                            <i className="bi bi-telephone me-2"></i>
                                            {o.userPhone}
                                        </p>

                                        <p>
                                            <i className="bi bi-envelope me-2"></i>
                                            {o.userMail}
                                        </p>
                                    </div>

                                </div>
                            </div>
                        ))
                    }
                </div>

            </div>
        </>
    )
}

export default Subscribed;