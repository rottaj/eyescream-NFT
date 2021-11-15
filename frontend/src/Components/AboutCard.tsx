import React from 'react';
import "./AboutCard.css";
export default class AboutCard extends React.Component {
    render() {
        return (
            <div className="about-card-parent">
                <div className="about-card-main">
                    <div className="about-card-child">
                        <h2>EYESCREAM</h2>
                        <h5>ALLOWS YOU TO COLLABORATE AND CONNECT WITH OTHER CREATORS.</h5>

                        EACH TOKEN PROVIDES ACCESS TO OUR EXCLUSIVE COMMUNITY WHERE MEMBERS CAN COLLABORATE, CREATE, LEARN, NETWORK, AND
                        PIONEER WEB3.
                        <br></br><br></br>
                        OUR MISSION IS TO BUILDAN ENVIRONMENT WHERE PASSIONATE AND CREATIVE PEOPLE CAN MAKE MEANINGFUL CONTRIBUTIONS TO OUR PLANET.
                        <br></br><br></br>
                        WE BELIEVE THAT MAKING INTRODUCING FRESH PERSPECTIVES AND NEW TECHNIQUES ALLOWS PEOPLE TO EVOLVE AND GROW AS A COMMUNITY.
                        <br></br><br></br>
                        IT TAKES TIME TO BUILD SOMETHING THAT'S WORTH BUILDING.

                        {/*
                        Eyescream is a platform for collaborative creativity. Each token serves as a membership to our community... 
                        granting members access to an exclusive club where they 
                        create, learn, network, and pioneer web3.
                        <br></br><br></br>
                        We're building a community to benefit the planet, and all of it's beautiful eyescream
                        lovers.
                        <br></br><br></br>
                        Building people; by bringing them together. Creating strong, like minded contributors
                        to our planet.
                        <br></br><br></br>
                        And of course, having the best time we can while doing it. We like to party and we know you do too! 
                        */}
                    </div>
                </div>
            </div>
        )
    }
}