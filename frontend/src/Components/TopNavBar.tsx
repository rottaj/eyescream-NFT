import React from 'react';
import "./TopNavBar.css";

export default class TopNavBar extends React.Component {
    render() {
        return (
            <div className="top-nav-bar">
                <h2 className="top-nav-bar-h2">The Eyescream Social</h2>
                <button className="connect-wallet-button" >Connect Wallet</button>
            </div>
        )
    }
}