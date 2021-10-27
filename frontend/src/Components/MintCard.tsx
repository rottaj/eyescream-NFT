import React from 'react';
import fs, { readFileSync } from 'fs';
import EyeScreamPreview from "../images/eyescreamscoop.jpg";
const { _abi } = require('../interfaces/EyescreamInterface');
var Contract = require('web3-eth-contract');

interface Props {
}

class MintCard extends React.Component <Props>{

    contract: {
        methods: {
            totalAmount: any
        }
    }

    constructor(props: Props) {
        super(props)
        require("dotenv").config()
        const RINKEBY_URL = process.env.RINKEBY_URL;
        Contract.setProvider(RINKEBY_URL);
        var contractAddress = "0x7c986641D92dA20d53aFCf5d3B57Fd9be02caD1d"
        var contract = new Contract(_abi, contractAddress)
        this.contract = contract

    }
    state = {
        coins: 1,
        amountEth: 0.08,
        tokenCount: null,
    }

    async getAmount(){
        var totalAmount = await this.contract.methods.totalAmount();
        return totalAmount
    }

    componentDidMount() {
        console.log(this.contract.methods)
        var totalAmount = this.getAmount()
        console.log(totalAmount)
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

                <form className="mint-form">
                    <input className="mint-form-token-amount" type="text" id="token-amount" name="token-amount" placeholder="Enter number of Eyescreams you want." value={this.state.coins} onChange={this.onChangeCalculateTotal}/>
                </form>
                <hr></hr>
                <div className="mint-card-total">
                    <h3 className="total-h3">Total</h3>
                    <h1 className="mint-card-total-price-h1">{this.state.amountEth} ETH</h1>
                </div>
                <hr></hr>
                <button className="mint-card-button-buy">Buy now!</button>

            </div>
        )
    }
 }

export default MintCard