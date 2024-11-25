import { useEffect , useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
        const abortCon = new AbortController()

      setTimeout(() => {
        fetch(url,{signal:abortCon.signal})
        .then(res => {
          if (!res.ok) { // error coming back from server
            throw Error('could not fetch the data for that resource');
          } 
          return res.json();
        })
        .then(data => {
          setIsPending(false);
          setData(data);
          setError(null);
        })
        .catch(err => {
          // auto catches network / connection error
          console.log(err.name)
            if(err.name === "AbortError"){
                console.log("Fetch Aborted")
            }else{
                setIsPending(false);
                setError(err.message);
            }
        })
      }, 1000);
     
     return () => abortCon.abort()
    }, [])
   
    return {data , isPending , error}
  
}

export default useFetch