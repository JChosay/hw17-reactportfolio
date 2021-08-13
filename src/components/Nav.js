import {
    Link
  } from "react-router-dom";

const Nav = ({cat,dog}) => {
    return (
        <div id="navcontainer">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    
                    <h1 className="navbar-brand" id="nameTitle">Joshua Chosay</h1>
                    
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                    
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    
                    <div className="collapse navbar-collapse" id="navbarColor01">
                        <ul className="navbar-nav me-auto">
                            
                            <Link className="nav-link active" to="/">About Me<span className="visually-hidden">(current)</span></Link>
                            
                            <Link className="nav-link" to="/portfolio">portfolio</Link>
                            
                            <Link className="nav-link" to="/resume">resume</Link>
                            
                            <li className="nav-item">
                            <Link className="nav-link" to="/contact">contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <img src="./images/banner.jpg" id="banner"></img>
            <h1 id="title">Professional Portfolio</h1> 
        </div>
          
    )
}

export default Nav;