import React from 'react';
import DripBackgroundBanner from "../images/DripBackgroundBanner.png";
import PhyllisToken from "../images/my_fucking_mayc.png";
import AhawkToken from "../images/ahawk_nft.png";
import "./TeamPage.css";

export default class TeamPage extends React.Component {
    render() {
        return (
            <div className="TeamPage-Main">
                <h1>Signature Flavors</h1>
                <div className="Team-Container">
                    <img className="Phyllis-token" src={PhyllisToken} />
                    <img className="Ahawk-token" src={AhawkToken} />
                </div>
            </div>
        )
    }
}