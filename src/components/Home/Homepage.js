import videoHomePage from'../../assets/audio/video-1920.mp4'
import React from "react";
const Homepage = () =>{
    return (
        <div className="homepage-container">
            <video autoPlay loop muted>
                <source
                    src={videoHomePage}
                    type = 'video/mp4'
                />
            </video>
            <div className="homepage-content btn col-md-6">
                <div className="title-body-header ">
                    There's a better way to ask
                </div >
                <div className="title-body-middle">
                    You don't want to make a boring form. And your audience won't answer one. Create a typeform instead—and make everyone happy.
                </div>
                <div className="title-body-btn">
                    <button className ="title-content-btn">Get started - it's free</button>
                </div>
            </div>
        </div>
    )
}
export default Homepage