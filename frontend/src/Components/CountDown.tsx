import React from 'react';
import "./CountDown.css";
interface Props {
    startTime: number
}

interface State {
    days: number,
    hours: number,
    minutes: number,
    seconds: number,
    expired: boolean
}

interface Interval {
    interval: any
}

class CountDown extends React.Component<Props, State, Interval> {
    constructor(props: Props, interval: any) {
        super(props)
        //this.interval = null
    }
    state: State = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        expired: false
    }

    componentDidMount() {
        //this.interval = setInterval(this.initializeTimer, 1000);
        setInterval(this.initializeTimer, 1000);
    }

    initializeTimer = () => {
        const startDate = this.props.startTime
        const now = new Date().getTime();
        if (!startDate) {
            this.setState({ expired: true})
            return;
        }
        const countDownStartState = new Date(startDate).getTime();
        const distance = countDownStartState - now;
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        if (distance < 0) {
             // add function to stop interval here.
            //clearInterval(this.interval)
            this.setState({expired: true})
        }
        this.setState({days, hours, minutes, seconds, expired: false})
    }

    render() {
        return (
            <div className="count-down-panel">
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1"  className="liquid-drop">
                    <defs>
                        <filter id="liquid">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                        <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="liquid" />
                        </filter>
                    </defs>
                </svg>
                <div className="count-down-card">
                <div className="count-down-card-time-container">
                    <div className="count-down-container-days">
                    <div className="count-down-panel-days">
                        <h1>{this.state.days}</h1> <br></br>
                        <h4> Days</h4>

                    </div>
                    <div className="drops">
                        <div className="drop1"></div>
                        <div className="drop2"></div>  
                    </div>

                    </div>

                    <div className="count-down-container-hours">
                    <div className="count-down-panel-hours">
                        <h1>{this.state.hours}</h1>
                        <h4> Hours</h4>
                    </div>
                    <div className="drops">
                        <div className="drop1"></div>
                        <div className="drop2"></div>  
                    </div>
                    </div>


                    <div className="count-down-container-minutes">
                    <div className="count-down-panel-minutes">
                        <h1>{this.state.minutes}</h1>
                        <h4>Minutes</h4>
                    </div>
                    <div className="drops">
                        <div className="drop1"></div>
                        <div className="drop2"></div>  
                    </div>
                    </div>

                    <div className="count-down-container-seconds">
                    <div className="count-down-panel-seconds">
                        <h1>{this.state.seconds}</h1>
                        <h4>Seconds</h4>
                    </div>
                    <div className="drops">
                        <div className="drop1"></div>
                        <div className="drop2"></div>  
                    </div>
                    </div>







                </div>
                </div>
            </div>
        )
    }
}

export default CountDown