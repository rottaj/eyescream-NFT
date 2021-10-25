import React from 'react';

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
                <div className="count-down-panel-days">
                    <h1>{this.state.days}</h1>
                </div>
                <div className="count-down-panel-hours">
                    <h1>{this.state.hours}</h1>
                </div>
                <div className="count-down-panel-minutes">
                    <h1>{this.state.minutes}</h1>
                </div>
                <div className="count-down-panel-seconds">
                    <h1>{this.state.seconds}</h1>
                </div>
            </div>
        )
    }
}

export default CountDown