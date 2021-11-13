import React from 'react';
import EyeScreamPreview from "../images/eyescreamscoop.jpg";
import { ethers, Contract } from 'ethers';
import { _abi } from '../interfaces/EyescreamInterface'
const Web3 = require('web3');
require('dotenv').config()
const RINKEBY_URL = process.env.RINKEBY_URL;


interface Props {
    window: any;
    //account:any;
}

var contractAddress = "0x05D79a33C0f7e719aE171b61f095F500635A0a21";



export default class MintCard extends React.Component <Props>{

    state = {
        coins: 1,
        amountEth: 0.08,
        tokenCount: null,
    }

    componentDidMount() {
        console.log("i dont know what to do with you")
    }

    async onSubmitMint(e: any) { // maybe call on external function? How do we store 10k images?  Dividing images into subfolders is prob best bet.
        e.preventDefault();
        //var file: string
        console.log("E:", e.target[0].value)
        console.log("ETH WINDOW", window.ethereum)
        if (this.props.window.ethereum) {
            const provider = new ethers.providers.Web3Provider(this.props.window.ethereum);
            const signer = await provider.getSigner();
            await signer.getAddress()
            console.log("SIGNER", signer)
            //signer._address = this.props.account;
            const contract = new ethers.Contract(contractAddress, _abi, signer);
            let quantity = parseInt(e.target[0].value);
            console.log("TESETSETINGNSGN QUANTY", quantity)
            let txn = await contract.mint(quantity, { 
                value: ethers.utils.parseEther((0.08 * quantity).toString())
            });
            await txn.wait();
        }
    }


    onChangeCalculateTotal = (e: React.ChangeEvent<HTMLInputElement>) => {
        let tokenNum = parseInt(e.target.value) || 0;
        if (tokenNum > 5) { tokenNum = 5 }
        let amount = tokenNum * 0.08 
        this.setState({
            coins: tokenNum,
            amountEth: amount
        })
    }

    render() {
        return (
            <div className="mint-card">
                <div className="mint-card-title">
                    <h3>Enter the amount of Eyescream you'd like to buy</h3>
                </div>
                <div className="mint-card-eyescream">
                    <img src={EyeScreamPreview} className="mint-img"></img>
                    <div className="mint-card-eyescream-info">
                        <h3 className="current-price-h3">Current Price</h3>
                        <h1 className="current-price-h1">0.08 ETH Each</h1>
                        <h3>10,101/10,101 remain</h3>
                    </div>
                </div>

                <form className="mint-form" onSubmit={(e) => this.onSubmitMint(e)}>
                    <input className="mint-form-token-amount" type="text" id="token-amount" name="token-amount" placeholder="Enter number of Eyescreams you want." value={this.state.coins} onChange={this.onChangeCalculateTotal}/>
                <hr></hr>
                <div className="mint-card-total">
                    <h3 className="total-h3">Total</h3>
                    <h1 className="mint-card-total-price-h1">{this.state.amountEth} ETH</h1>
                </div>
                <hr></hr>
                <button type="submit" className="mint-card-button-buy">Buy now!</button>
                </form>
            </div>
        )
    }
}