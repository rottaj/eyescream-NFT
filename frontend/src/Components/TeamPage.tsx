import React from 'react';
import PhyllisToken from "../images/my_fucking_mayc.png";
import AhawkToken from "../images/ahawk_nft.png";
import EyescreamScoop from "../images/eyescreamscoop.jpg";
import "./TeamPage.css";

export default class TeamPage extends React.Component {
    render() {
        return (
            <div className="TeamPage-Main">
                <h1 className="h1-signature-flavors">Signature Flavors</h1>
                <div className="Team-Container">
                    <img className="Phyllis-token" src={PhyllisToken} />
                    <img className="Ahawk-token" src={AhawkToken} />
                    {/*
                    <img className="eyescream-token" src={EyescreamScoop} />
                    <img className="eyescream-token" src={EyescreamScoop} />
                    <img className="eyescream-token" src={EyescreamScoop} />
                    */}
                </div>
            </div>
        )
    }
}