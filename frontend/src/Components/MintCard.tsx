import { useState } from 'react';
import EyeScreamPreview from "../images/eyescreamscoop.jpg";
import { ethers, Contract } from 'ethers';
import { _abi } from '../interfaces/EyescreamInterface'
import "./MintCard.css";
require('dotenv').config()
const RINKEBY_URL = process.env.RINKEBY_URL;


interface Props {
    window: any;
}

var contractAddress = "0x5A9F025d93549961f6086d1b344BBEd0E9650A96";

const MintCard = (props: Props) => {

    const [coins, setCoins] = useState(1);
    const [amountEth, setAmountEth] = useState(0.00);

    const onSubmitMint = async (e: any) => { // maybe call on external function? How do we store 10k images?  Dividing images into subfolders is prob best bet.
        e.preventDefault();
        if (props.window.ethereum) {
            const provider = new ethers.providers.Web3Provider(props.window.ethereum);
            const signer = await provider.getSigner();
            await signer.getAddress()
            const contract = new ethers.Contract(contractAddress, _abi, signer);
            let quantity = parseInt(e.target[0].value);
            let txn = await contract.mint(quantity, { 
                value: ethers.utils.parseEther((0.00 * quantity).toString())
            });
            await txn.wait();
        }
    }


    const onChangeCalculateTotal = (e: React.ChangeEvent<HTMLInputElement>) => {
        let tokenNum = parseInt(e.target.value) || 0;
        if (tokenNum > 5) { tokenNum = 5 }
        let amount = tokenNum * 0.00
        setCoins(tokenNum);
        setAmountEth(amount);
    }

    return (
        <div className="mint-card">
            <div className="mint-card-title">
                <h3>Enter the amount of Eyescream you'd like to buy</h3>
            </div>
            <div className="mint-card-eyescream">
                <img src={EyeScreamPreview} className="mint-img"></img>
                <div className="mint-card-eyescream-info">
                    <h3 className="current-price-h3">Current Price</h3>
                    <h1 className="current-price-h1">0.00 ETH Each</h1>
                    <h3>10,101/10,101 remain</h3>
                </div>
            </div>

            <form className="mint-form" onSubmit={(e) => onSubmitMint(e)}>
                <input className="mint-form-token-amount" type="text" id="token-amount" name="token-amount" placeholder="Enter number of Eyescreams you want." value={coins} onChange={onChangeCalculateTotal}/>
            <hr></hr>
            <div className="mint-card-total">
                <h3 className="total-h3">Total</h3>
                <h1 className="mint-card-total-price-h1">{amountEth} ETH</h1>
            </div>
            <hr></hr>
            <button type="submit" className="mint-card-button-buy">Buy now!</button>
            </form>
        </div>
    )
}

export default MintCard;