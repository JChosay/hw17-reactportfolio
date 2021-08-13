const Portfolio = () => {
    return (
        <div className="container-fluid">
            <div id="wrapper">
                <div className="col-1.5" id="pagemarkers">
                    Portfolio
                </div>
                
                <div id="workcontainer">
                    <div id="worktoprowcontainer">
                        <div id="topleftcontainer">
                            <a target="_blank" href="https://jchosay.github.io/group-pj1-covid-goal-track/"><img className="work" src="images/covidGoalTracker.jpg" /></a>
                            <div id="toprightcontainer">
                                <div id="innertopright">
                                    <a target="_blank" href="https://github.com/JChosay/hw11-employee-tracker.git" ><img className="work" src="images/employeetracker.jpg" /></a>
                                    <a target="_blank" href="https://github.com/JChosay/hw9-team-profile-generator.git" ><img className="work" src="images/teambuilder.jpg" id="toprightbottom" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="workbottomrowcontainer">
                        <div id="bottomleftcontainer">
                            <div id="innerbottomleft">
                                <a target="_blank" href="https://jchosay.github.io/hw6-weather-dashboard/"><img className="work" src="images/weatherdash.jpg" /></a>
                                <a target="_blank" href="https://github.com/JChosay/hw16-workout-tracker.git"><img className="work" src="images/workouttracker.jpg" id="bottomleftbottom" /></a>
                            </div>
                        </div>
                        <div id="bottomrightcontainer" >
                            <a target="_blank" href="https://dnd-creator.herokuapp.com/"><img className="work" src="images/dnd.jpg" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;
