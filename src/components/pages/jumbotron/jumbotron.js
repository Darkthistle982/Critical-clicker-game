import React from "react";
import "./jumbotron.css"

const Jumbotron = () => {
    return(
    <div className="jumbotron jumbotron-fluid">
        <div className="container text-center">
            <h1 className="display-4">Critical Clicker Memory Game!</h1>
            <p className="lead">Click on any image to earn points, but don't click on any picture more than once!</p>
        </div>
    </div>
    )
}

export default Jumbotron;