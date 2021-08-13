const Resume = () => {
    return(
        <div className="container-fluid" >
        <div id="wrapper">
            <div className="col-1.5" id="pagemarkers">
                Resume
            </div>
            <div id="pdfcontainer" width="1000px">
                <img src="images/resume.jpg"/>
                <a id="downloadlink" href="elements/newrez.pdf" download="Chosay Resume">click to download a copy</a>
            </div>
        </div>
    </div>
    )
}

export default Resume;