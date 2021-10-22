import React from 'react';
import EyeScreamPreview from "../images/eyescreamscoop.jpg";

export default function MintCard() {
    return (
        <div className="mint-card">
            <div className="mint-card-title">
                <h3>Enter the amount of Eyescream you'd like to buy</h3>
            </div>
            <div className="mint-card-eyescream">
                <img src={EyeScreamPreview} className="mint-img"></img>
                <div className="mint-card-eyescream-info">
                    <h3 className="current-price-h3">Current Price</h3>
                    <h1>0.08 ETH Each</h1>
                    <h3>10,101/10,101 remain</h3>
                </div>
            </div>

            <form className="mint-form">
                <input className="mint-form-token-amount" type="text" id="token-amount" name="token-amount" value="1" placeholder="Enter number of Eyescreams you want."/>
            </form>
            <hr></hr>
            <div className="mint-card-total">
                <h3 className="total-h3">Total</h3>
                <h1 className="mint-card-total-price-h1">0.08 ETH</h1>
            </div>
            <hr></hr>
            <button className="mint-card-button-buy">Buy now!</button>

        </div>
    )
}
