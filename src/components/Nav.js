const Nav = ({cat,dog}) => {

    //console.log("******",props);

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    
                    <h1 className="navbar-brand" id="nameTitle">Joshua Chosay</h1>
                    
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                    
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    
                    <div className="collapse navbar-collapse" id="navbarColor01">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <a className="nav-link active" href="#">Home
                                    <span className="visually-hidden">(current)</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Portfolio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Resume</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Contact</a>
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