const Spinner = () => {
    return ( 
        <div className="d-flex justify-content-center align-content-center">
            <img className="center-block" style={
            {
                width:"100px" , height:"100px"
            }
        }
        src="/load2.gif"/>
        </div>
    );
}
 
export default Spinner;