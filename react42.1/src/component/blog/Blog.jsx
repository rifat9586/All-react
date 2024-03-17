import { useEffect, useState } from "react";
import Bloging from "../blogss/Bloging";
import PropTypes from 'prop-types';

const Blog = ({ handelEvent}) => {
    const [blog, setBlog]= useState([]);

    useEffect(()=>{
        fetch('Data.json')
        .then(res => res.json())
        .then(data => setBlog(data))
    },[]);
    return (
        <div className="md:w-2/3">
            {
                blog.map((blogs, idx) => <Bloging key={idx} bloging={blogs} handelEvent={handelEvent}></Bloging>)
            }
        </div>
    );
};

Blog.propTypes={
    handelEvent: PropTypes.func
}
export default Blog;