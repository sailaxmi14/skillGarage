import { useState } from "react";
import { useDispatch } from "react-redux";
import { addCourses } from "../Store/CoursesSlice";
import Swal from "sweetalert2";

function AddCourse() {
    var dispatch = useDispatch("");
    var [cid, setId] = useState("");
    var [cname, setName] = useState("");
    var [cdesc, setDesc] = useState("");
    var [cbatch, setBatch] = useState("");
    var [cduration, setDuration] = useState("");
    var [clanguage, setLanguage] = useState("");
    var [cprice, setPrice] = useState("");
    var [cimg, setImage] = useState("");
    function addcourse(e) {
        e.preventDefault();
        var newobj = {
            id: cid,
            name: cname,
            description: cdesc,
            batch: cbatch,
            duration: cduration,
            language: clanguage,
            Price: cprice,
            image: cimg
        }
        dispatch(addCourses(newobj));
        console.log(newobj);
        // alert("course added successfully")
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Course Added..",
            showConfirmButton: false,
            timer: 1500
        });
    }
    return (
        <>
            <div className="container-fluid p-4">
                <div className="mb-4">
                    <h2 className="fw-bold">Add New Course</h2>
                    <p className="text-muted">
                        Create and publish a new course for learners.
                    </p>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div className="card border-0 shadow-sm rounded-4">
                            <div className="card-body p-4 p-md-5">
                                <div className="mb-4">
                                    <h4 className="fw-bold">Course Information</h4>
                                    <p className="text-muted small">Enter the details below to add a course.</p>
                                </div>
                                <form onSubmit={addcourse}>
                                    <div className="row g-4">
                                        <div className="col-md-6">
                                            <label htmlFor='id' className="form-label fw-semibold">Course Id</label>
                                            <input type="Number" name="id" className="form-control" placeholder="Enter course id" onChange={(e) => setId(e.target.value)} required />
                                        </div>
                                        <div className="col-md-6">
                                            <label htmlFor='name' className="form-label fw-semibold">Course Name</label>
                                            <input type="text" name="name" className="form-control" placeholder="Enter course name" onChange={(e) => setName(e.target.value)} required />
                                        </div>
                                        <div className="col-md-6">
                                            <label htmlFor='batch' className="form-label fw-semibold">Batch Number</label>
                                            <input type="number" min='1' name="batch" className="form-control" placeholder="Enter Batch Number" onChange={(e) => setBatch(e.target.value)} />
                                        </div>
                                        <div className="col-md-6">
                                            <label htmlFor='duration' className="form-label fw-semibold">Course Duration</label>
                                            <input type="text" name="duration" className="form-control" placeholder="Example:4 weeks" onChange={(e) => setDuration(e.target.value)} />
                                        </div>
                                        <div className="col-md-6">
                                            <label htmlFor='language' className="form-label fw-semibold">Course Language</label>
                                            <select name="language" className="form-select" onChange={(e) => setLanguage(e.target.value)}>
                                                <option value="">Select Language</option>
                                                <option>English</option>
                                                <option>Telugu</option>
                                            </select>
                                        </div>
                                        <div className="col-md-6">
                                            <label htmlFor='price' className="form-label fw-semibold">Course Price (₹)</label>
                                            <input type="number" name="price" className="form-control" placeholder="Enter course price" min="0" onChange={(e) => setPrice(e.target.value)}></input>
                                        </div>
                                        <div className="col-md-6">
                                            <label htmlFor='image' className="form-label fw-semibold">Course Image URL</label>
                                            <input type="url" name="image" className="form-control" placeholder="Paste image URL here" onChange={(e) => setImage(e.target.value)}></input>
                                        </div>
                                        <div className="col-12">
                                            <label htmlFor='description' className="form-label fw-semibold">Course Description </label>
                                            <textarea name="description" className="form-control" rows="4" placeholder="Write a short description about the course..." onChange={(e) => setDesc(e.target.value)}></textarea>
                                        </div>
                                        <div className="col-12 d-flex gap-3 justify-content-end mt-4">
                                            <button type="reset" className="btn btn-outline-secondary px-4">Reset</button>
                                            <button type="submit" className="btn text-dark px-5 fw-semibold btn-info" >
                                                <i className="fa-solid fa-plus me-2"></i>
                                                Add Course
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default AddCourse;