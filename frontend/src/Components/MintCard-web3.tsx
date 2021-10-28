import React from 'react';
import EyeScreamPreview from "../images/eyescreamscoop.jpg";
import eyescream_1 from '../images/img/eyescream_1.svg';
const { _abi } = require('../interfaces/EyescreamInterface');
var Contract = require('web3-eth-contract');
const Web3 = require('web3');
const web3 = new Web3(Web3.givenProvider);
require("dotenv").config()
const RINKEBY_URL = process.env.RINKEBY_URL;
interface Props {
    account: any;
}

class MintCard extends React.Component <Props>{

    contract: {
        methods: {
            totalAmount: any,
            mint: any
        },
        setProvider: any
    }
    account: any;

    constructor(props: Props) {
        super(props)
        var contractAddress = "0x7c986641D92dA20d53aFCf5d3B57Fd9be02caD1d"

        var contract = new Contract(_abi, contractAddress)
        this.contract = contract;
        this.contract.setProvider(web3.currentProvider);
        this.account = web3.eth.accounts.create();
        console.log("CONTRACT", this.contract);
        console.log("Account", this.account);

    }
    
    state = {
        coins: 1,
        amountEth: 0.08,
        tokenCount: null,
    }

    async onSubmitMint(e: any) { // maybe call on external function? How do we store 10k images?  Dividing images into subfolders is prob best bet.
        e.preventDefault();
        console.log("Account foobar", this.props.account)
        console.log("E:", e.target[0].value)
        console.log("Testing Mint",this.contract.methods.mint)
        //for (let i=0; i<=e.taget[0].value; i++) {
            /*
            var txn = await this.contract.methods.mint(eyescream_1, {
                value: ethers.utils.parseEther("0.08")
            })
            */
        //}
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

export default MintCard