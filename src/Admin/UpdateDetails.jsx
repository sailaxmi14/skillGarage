import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { selectToUpdate, updateCourse } from "../Store/CoursesSlice";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

function UpdateDetails() {
    var navigate=useNavigate("");
    const { pid } = useParams("")
    var dispatch = useDispatch("");
    useEffect(() => {
        dispatch(selectToUpdate(pid))
    }, [dispatch, pid])
    var ucourse = useSelector(state => state.courses.updateCourse)
    console.log(ucourse);
    var [cname, setName] = useState("");
    var [cbatch, setBatch] = useState("");
    var [cduration, setDuration] = useState("");
    var [clan, setLan] = useState("");
    var [cprice, setPrice] = useState("");
    var [cdesc, setDescription] = useState("");
    var [cimage, setImage] = useState("");
    useEffect(() => {
        if (ucourse) {
            setName(ucourse.name);
            setBatch(ucourse.batch);
            setDuration(ucourse.duration);
            setLan(ucourse.language);
            setPrice(ucourse.Price);
            setDescription(ucourse.description);
            setImage(ucourse.image);
        }
    }, [ucourse])
    function callToUpdate(e) {
        e.preventDefault();
        var newObj = {
            id: ucourse.id,
            name: cname,
            batch: cbatch,
            duration: cduration,
            language: clan,
            Price: cprice,
            description: cdesc,
            image: cimage
        }
        dispatch(updateCourse(newObj));
        Swal.fire({
            title: "Updated Course Successfully",
            showClass: {
                popup: `
      animate__animated
      animate__fadeInUp
      animate__faster
    ` },
            hideClass: {
                popup: `
      animate__animated
      animate__fadeOutDown
      animate__faster
    ` }
        });
    }

    return (
        <>
            <h4 className='mb-4'>Update course details of id {pid}</h4>
            <form action='' onSubmit={callToUpdate}>
                <div className='form-group'>
                    <label className='form-label' htmlFor='name'>Course Name</label>
                    <input name='name' className='form-control' value={cname} onChange={(e) => setName(e.target.value)}></input>
                </div>
                <div className='form-group'>
                    <label className='form-label' htmlFor='batch'>Course Batch</label>
                    <input name='batch' className='form-control' value={cbatch} onChange={(e) => setBatch(e.target.value)}></input>
                </div>
                <div className='form-group'>
                    <label className='form-label' htmlFor='dur'>Course Duration</label>
                    <input name='dur' className='form-control' value={cduration} onChange={(e) => setDuration(e.target.value)}></input>
                </div>
                <div className='form-group'>
                    <label className='form-label' htmlFor='lan'>Course Language</label>
                    <input name='lan' className='form-control' value={clan} onChange={(e) => setLan(e.target.value)}></input>
                </div>
                <div className='form-group'>
                    <label className='form-label' htmlFor='price'>Course Price</label>
                    <input name='price' className='form-control' value={cprice} onChange={(e) => setPrice(e.target.value)}></input>
                </div>
                <div className='form-group'>
                    <label className='form-label' htmlFor='desc'>Course Description</label>
                    <input name='desc' className='form-control' value={cdesc} onChange={(e) => setDescription(e.target.value)}></input>
                </div>
                <div className='form-group'>
                    <label className='form-label' htmlFor='img'>Course Image</label>
                    <input name='img' className='form-control' value={cimage} onChange={(e) => setImage(e.target.value)}></input>
                </div>
                <button type='submit' className='btn btn-info mt-2' onClick={()=>navigate('/admin/manage')}>Update</button>
            </form>
        </>
    )
}
export default UpdateDetails;