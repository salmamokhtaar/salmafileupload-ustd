import { Link } from "react-router-dom";
const Navbar = () => {
    return ( 
        <nav className="navbar navbar-expand-lg bg-dark ">
        <div className="container-fluid">
          <a className="navbar-brand text-light" href="#">Navbar w/ text</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse  d-flex justify-content-end" id="navbarText">
            <ul className="navbar-nav ">
              <li className="nav-item">
                <Link className="nav-link active text-light" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link text-light" aria-current="page" to="/create">Create</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="#">Pricing</a>
              </li>
            </ul>
          
          </div>
        </div>
      </nav>
     );
}
 
export default Navbar;