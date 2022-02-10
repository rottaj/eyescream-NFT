import 'react-vertical-timeline-component/style.min.css';
import { Bounce } from 'react-awesome-reveal';
import "./TimeLine.scss";


const TimeLine = () => {
    return (
        <div className="TimeLine-Main">
            <div className="TimeLine-Header-Rainbow">
                <ul className="c-rainbow">
                <li className="c-rainbow__layer c-rainbow__layer--white">ROADMAP V1</li>
                <li className="c-rainbow__layer c-rainbow__layer--orange">ROADMAP V1</li>
                <li className="c-rainbow__layer c-rainbow__layer--red">ROADMAP V1</li>
                <li className="c-rainbow__layer c-rainbow__layer--violet">ROADMAP V1</li>
                <li className="c-rainbow__layer c-rainbow__layer--blue">ROADMAP V1</li>
                <li className="c-rainbow__layer c-rainbow__layer--green">ROADMAP V1</li>
                <li className="c-rainbow__layer c-rainbow__layer--yellow">ROADMAP V1</li>
            </ul>
            </div>
            <div className="TimeLine-Card-Container">
            <Bounce className="TimeLine-Card">
                <div>
                    <h1> Stage 1 </h1>
                    <h3>Premint</h3>
                </div>
            </Bounce>
            <Bounce className="TimeLine-Card">
                <div>
                    <h1> Stage 2 </h1>
                    <h3>Public Sale + Merch Drop</h3>
                </div>
            </Bounce>

            <Bounce className="TimeLine-Card">
                <div>
                    <h1> Stage 3 </h1>
                    <h3>New Years Party + Scavenger Hunt</h3>
                </div>
            </Bounce>

            <Bounce className="TimeLine-Card">
                <div>
                    <h1> Stage 4 </h1>
                    <h3>Website v2 Launch + New Charity Donation</h3>
                </div>
            </Bounce>

            <Bounce className="TimeLine-Card">
                <div>
                <h1> Stage 5 </h1>
                <h3>?????</h3>
                </div>
            </Bounce>

            <Bounce className="TimeLine-Card">
                <div>
                <h1> Stage 6 </h1>
                <h3>Roadmap V2 + ?????</h3>
                </div>
            </Bounce>
            </div>
        </div>
    )
}
export default TimeLine;