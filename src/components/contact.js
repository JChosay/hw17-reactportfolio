const Contact = () => {
    return(
        <div className="container-fluid">
        <div id="wrapper">
            <div className="col-1.5" id="pagemarkers">
                Contact
            </div>
                <div className="col-10.5" id="contactform" width="100vw">
                    <form>
                        <div className="form-group">
                            <label id="namelabel" for="exampleTextarea" className="form-label mt-4">Name:</label>
                            <textarea className="form-control" id="exampleTextarea" rows="1"></textarea>
                        </div>
                        
                        <div className="form-group">
                        <label for="exampleInputEmail1" className="form-label mt-4">Email address:</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                        </div>
                        
                        <div className="form-group">
                        <label for="exampleTextarea" className="form-label mt-4">Message:</label>
                        <textarea className="form-control" id="exampleTextarea" rows="12"></textarea>
                        </div>
                    </form>
                </div>
        </div>
    </div>
    )
}

export default Contact;