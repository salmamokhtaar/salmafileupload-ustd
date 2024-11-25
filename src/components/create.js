import { useState } from "react";
import Spinner from "./spinner";
import ErrorMessage from "./error";
import SuccessMessage from "./success";


const Create = () => {

    const [title , setTitle] = useState();
    const [body , setBody] = useState();
    const [author , setAuthor] = useState();
    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);
    const [image, setImage] = useState(null);
    const [base64Image, setBase64Image] = useState("");

    // Handle image file selection
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImage(file);

        // Convert image to base64
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
        setBase64Image(reader.result);
        };
    };


    function handleSubmit(e){
        e.preventDefault()

        if (!base64Image) {
            alert("Please upload an image.");
            return;
          }

        const blog = { title, body, author,image:base64Image };
        setIsPending(true)

        fetch('http://localhost:3030/blogs/', {
          method: 'POST',
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(blog)
        }).then(res => {
            if (!res.ok) { // error coming back from server
              throw Error('could not fetch the data for that resource');
            } 
            return res.json();
        }).then(() => {
          console.log('new blog added');
          setIsPending(false)
          setSuccess(true)
          setError(null);
        }) .catch(err => {
            // auto catches network / connection error
            console.log(err.name)
            if(err.name === "AbortError"){
                console.log("Fetch Aborted")
            }else{
                setIsPending(false);
                setError(err.message);
            }
        })
    }

    return ( 
        <>
         { isPending &&  <Spinner/> }
         { error && <ErrorMessage msg={error}/> }
         { success && <SuccessMessage msg="Record Created"/> }
         <h2>Add new blog</h2>
        <form onSubmit={handleSubmit}>
        <div className="mb-3">
            <label className="form-label">Title</label>
            <input 
            type="text" 
            className="form-control"
            value = {title}
            required
            onChange={(e)=>setTitle(e.target.value)}
            />
            </div>
            <div className="mb-3">
            <label className="form-label">Body</label>
            <textarea 
            className="form-control"
            rows="3"
            value = {body}
            required
            onChange={(e)=>setBody(e.target.value)}
             ></textarea>
              <label className="form-label">Author</label>
             <select 
             class="form-select" 
             value = {author}
             required
             onChange={(e)=>setAuthor(e.target.value)}
             >
                    <option value="omar">Omar</option>
                    <option value="Ali">Ali</option>
                    <option value="Ahmed">Ahmed</option>
            </select>
            <input type="file" accept="image/*" onChange={handleImageChange} />
            {base64Image && (
                <div>
                <h3>Base64 Preview:</h3>
                <img src={base64Image} alt="Preview" style={{ maxWidth: "200px" }} />
                </div>
            )}
            {!isPending && <button type="submit" class="btn btn-primary mt-3">Add Blog</button>}
            </div>
        </form>
        </>
       
     );
}
 
export default Create;