import React from 'react';
import DripBackgroundBanner from "../images/DripBackgroundBanner.png";
import './BottomNavBar.css';
export default class BottomNavBar extends React.Component {
    render() {
        return (
            <div>
                <img src={DripBackgroundBanner} /> 
            </div>
        )
    }
}