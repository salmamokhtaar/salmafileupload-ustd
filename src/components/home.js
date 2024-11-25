import Blogs from "./blogs";
import Spinner from "./spinner";
import ErrorMessage from "./error";
import useFetch from "../hooks/useFetch";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
// import { Spinner } from "react-bootstrap";

const Home = () => {

    const {data:blogs , isPending , error} = useFetch("http://localhost:3030/blogs")

  
    const navigate = useNavigate();

    const handleClick = (id) => {
        

        fetch('http://localhost:3030/blogs/' + id, {
          method: 'DELETE'
        }).then(() => {
            window.location.reload(); // Refreshes the page
        }).catch(err => {
            alert(err.message)
        })
      }

    return ( 
        <div className="content">
           
            { error && <ErrorMessage msg={error}/> }
            { isPending &&  <Spinner/> }
            { blogs && <Blogs blogs={blogs} title="All Blogs" handleDelete = {handleClick}/> }
      
                    
        </div>
     );
}
 
export default Home;