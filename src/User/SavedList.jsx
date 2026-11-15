import { useDispatch, useSelector } from "react-redux";
import { getCartByUsername, removeFromCart } from "../Store/CartSlice";
import { useEffect, useState } from "react";
import { addToSubscription } from "../Store/SubscriptionSlice";
import Swal from "sweetalert2";
import "./SavedList.css";

function SavedList() {

    var mycart = useSelector(state => state.cart.myCourse);
    console.log(mycart);
    var dispatch = useDispatch("");
    useEffect(() => {
        var username = localStorage.getItem("isUser");
        dispatch(getCartByUsername(username));
    }, [dispatch])

    var [dummy, setDummy] = useState(null);
    function receiveData(obj) {
        setDummy(obj);
    }

    var [phone, setPhone] = useState("");
    var [mail, setMail] = useState("");
    function purchaseOne(e) {
        e.preventDefault();
        var orderObj = {
            ...dummy,
            username: localStorage.getItem("isUser"),
            userPhone: phone,
            userMail: mail,
            status: "null"
        }
        console.log(orderObj);
        dispatch(addToSubscription(orderObj));
        Swal.fire({
            title: "Yayyy!",
            text: "Subscription added successfully!...",
            icon: "success"
        });
        dispatch(removeFromCart(orderObj));
    }

    function purchaseAll(e) {
        e.preventDefault();
        mycart.forEach((obj) => {
            var newobj = {
                ...obj,
                username: localStorage.getItem('isUser'),
                userPhone: phone,
                userMail: mail,
                status: "null"
            }
            dispatch(addToSubscription(newobj));
            dispatch(removeFromCart(newobj));
        });

        Swal.fire({
            title: "Yayyy!",
            text: "Subscription added successfully!...",
            icon: "success"
        });
    }

    return (
        <>
            <div className="saved-page">

                <div className="saved-heading">
                    <div>
                        <h2>My Saved Courses</h2>
                        <p>Manage your saved courses and start learning today.</p>
                    </div>
                    <div className="saved-count">
                        <span>{mycart.length}</span>
                        <small>Saved Courses</small>
                    </div>
                </div>

                <div className="saved-table-card">
                    <div className="saved-table-title">
                        <h5>Saved Course List</h5>
                        <span>Your learning collection</span>
                    </div>

                    <div className="table-responsive">
                        <table className="table saved-table align-middle">
                            <thead>
                                <tr>
                                    <th>Sno</th>
                                    <th>Course Name</th>
                                    <th>Batch</th>
                                    <th>Duration</th>
                                    <th>Price</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    mycart && mycart.map((c, ind) => (
                                        <tr key={ind}>
                                            <td>{ind + 1}</td>
                                            <td className="saved-course-name">{c.name}</td>
                                            <td>{c.duration}</td>
                                            <td>{c.batch}</td>
                                            <td className="saved-price">₹{c.Price}</td>

                                            <td>
                                                <div className="saved-actions">
                                                    <button
                                                        className="btn purchase-btn"
                                                        data-bs-target='#purchaseModal'
                                                        data-bs-toggle='modal'
                                                        onClick={() => receiveData(c)}
                                                    >
                                                        Purchase Now
                                                    </button>

                                                    <button
                                                        className="btn remove-btn"
                                                        onClick={() => dispatch(removeFromCart(c))}
                                                    >
                                                        <i className="bi bi-trash3"></i>
                                                        Remove
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                }

                                <tr className="saved-summary-row">
                                    <td colSpan="2">
                                        <span className="summary-label">Total Amount</span>
                                        <strong>₹{mycart.reduce((acc, obj) => acc + obj.Price, 0)}</strong>
                                    </td>

                                    <td colSpan="2">
                                        <span className="summary-label">Total Items</span>
                                        <strong>{mycart.reduce((acc, a) => acc + a.quantity, 0)}</strong>
                                    </td>

                                    <td colSpan='2'>
                                        <button
                                            className='btn purchase-all-btn'
                                            data-bs-toggle='modal'
                                            data-bs-target='#allPurchaseModal'
                                        >
                                            <i className="bi bi-bag-check me-2"></i>
                                            Purchase All
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>

            <div className='modal fade' id='purchaseModal'>
                <div className='modal-dialog modal-dialog-centered'>
                    <div className='modal-content saved-modal'>
                        <div className='modal-header saved-modal-header'>
                            <div>
                                <h5 className="modal-title">Complete Your Subscription</h5>
                                <p>Enter your contact details to continue.</p>
                            </div>
                            <button className='btn-close' data-bs-dismiss='modal'></button>
                        </div>

                        <div className='modal-body saved-modal-body'>
                            <form action='' onSubmit={purchaseOne}>
                                <div className='form-group mb-3'>
                                    <label className='form-label'>Email Address</label>
                                    <input
                                        type='email'
                                        className='form-control saved-input'
                                        placeholder="Enter your email"
                                        onChange={(e) => setMail(e.target.value)}
                                    />
                                </div>

                                <div className='form-group mb-3'>
                                    <label className='form-label'>Phone Number</label>
                                    <input
                                        type='text'
                                        className='form-control saved-input'
                                        placeholder="Enter your phone number"
                                        onChange={(e) => setPhone(e.target.value)}
                                    />
                                </div>

                                <button type='submit' data-bs-dismiss='modal' className='btn modal-purchase-btn'>
                                    Start Subscription
                                    <i className="bi bi-arrow-right ms-2"></i>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            
            <div className='modal fade' id='allPurchaseModal'>
                <div className='modal-dialog modal-dialog-centered'>
                    <div className='modal-content saved-modal'>
                        <div className='modal-header saved-modal-header'>
                            <div>
                                <h5 className="modal-title">Purchase All Courses</h5>
                                <p>Complete your subscription for all saved courses.</p>
                            </div>
                            <button className='btn-close' data-bs-dismiss='modal'></button>
                        </div>

                        <div className='modal-body saved-modal-body'>
                            <form action='' onSubmit={purchaseAll}>
                                <div className='form-group mb-3'>
                                    <label className='form-label'>Email Address</label>
                                    <input
                                        type='email'
                                        className='form-control saved-input'
                                        placeholder="Enter your email"
                                        onChange={(e) => setMail(e.target.value)}
                                    />
                                </div>

                                <div className='form-group mb-3'>
                                    <label className='form-label'>Phone Number</label>
                                    <input
                                        type='text'
                                        className='form-control saved-input'
                                        placeholder="Enter your phone number"
                                        onChange={(e) => setPhone(e.target.value)}
                                    />
                                </div>

                                <button type='submit' data-bs-dismiss='modal' className='btn modal-purchase-btn'>
                                    Subscribe to All
                                    <i className="bi bi-arrow-right ms-2"></i>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SavedList;