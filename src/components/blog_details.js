import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Spinner from "./spinner";
import ErrorMessage from "./error";
import MySkeleton from "./skilton";


const BlogDetails = () => {

    const {id} = useParams()

    const {data:blog , isPending , error} = useFetch("http://localhost:3030/blogs/"+id)

    return ( 
        <div className="content">
            { isPending &&  <MySkeleton/> }
            { error && <ErrorMessage msg={error}/> }
            { blog && (
                <div className="alert alert-primary" role="alert" key={blog.id}>
                <h3>{blog.title}</h3>
                Authored by {blog.author}
                <hr></hr>
                 <div className="content">
                     {blog.body}
                 </div>
                 <div className="content">
                 {blog.image != '-1' && (
                        <div>
                        <h3>Base64 Preview:</h3>
                        <img src={blog.image} alt="Preview" className="float-right" style={{ maxWidth: "200px" }} />
                        </div>
                )}
                 </div>
             </div>
            )}
   </div>
     );
}
 
export default BlogDetails;