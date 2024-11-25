import { useState } from "react";
import {useNavigate, Link } from "react-router-dom";

const Blogs = (props) => {
    let blogs = props.blogs
    let title = props.title;
    let handleDelete = props.handleDelete

    return ( 
       <div className="content">
            <h2>{title}</h2>
            
            {
                blogs.map(blog=> (
                    <div className="alert alert-primary" role="alert" key={blog.id}>
                       <Link to={`/blog/${blog.id}`}>
                        <h3>{blog.title}</h3>
                       </Link>
                       Authored by {blog.author}
                        <div className="d-flex justify-content-end">
                            <button type="button" className="btn btn-danger" onClick={() => {handleDelete(blog.id)}}>Delete</button>
                        </div>
                    </div>
                ))
            }
       </div>
     );
}
 
export default Blogs;