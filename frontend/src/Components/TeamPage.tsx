import PhyllisToken from "../images/my_fucking_mayc.png";
import "./TeamPage.css";

const TeamPage = () => {
    return (
        <div className="TeamPage-Main">
            <h1 className="h1-signature-flavors">Signature Flavors</h1>
            <div className="Team-Container">
                <img className="Phyllis-token" src={PhyllisToken} />
                {/*

                <img className="Ahawk-token" src={AhawkToken} />
                <img className="eyescream-token" src={EyescreamScoop} />
                <img className="eyescream-token" src={EyescreamScoop} />
                <img className="eyescream-token" src={EyescreamScoop} />
                */}
            </div>
        </div>
    )
}

export default TeamPage;