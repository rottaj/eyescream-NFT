import React from 'react'
import EyeScreamPreview from "../images/eyescreamscoop.jpg";
import 'react-vertical-timeline-component/style.min.css';
const { VerticalTimeline, VerticalTimelineElement }  = require('react-vertical-timeline-component');

export default class TimeLine extends React.Component {
    render() {
        return (
            <div>

                <VerticalTimeline>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                        date="December 2021"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        //icon={<img src={EyeScreamPreview}/>}
                    >
                        <h1 className="vertical-timeline-element-title">Stage 01</h1>
                        <h2>
                            Pre-mint
                        </h2>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="December 2022"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        //icon={<WorkIcon />}
                    >
                        <h1 className="vertical-timeline-element-title">Stage 02</h1>
                        <h2>
                            Public Sale + Merch Drop
                        </h2>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="January 1, 2022"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        //icon={<WorkIcon />}
                    >
                        <h1 className="vertical-timeline-element-title">Stage 03</h1>
                        <h2>
                            New Years Party 
                        </h2>
                        <h4>New York City, New York</h4>


                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="March 2022"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        //icon={<WorkIcon />}
                    >
                        <h1 className="vertical-timeline-element-title">Stage 04</h1>
                        <h2>
                            Website v2 release! <br></br>
                        </h2>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date="April 2022"
                        iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                        //icon={<SchoolIcon />}
                    >
                        <h1 className="vertical-timeline-element-title">Stage 05</h1>
                        <h2 className="vertical-timeline-element-subtitle">Next Charity donation</h2>
                        <p>
                            Members vote what charity the community donates to.
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date="May 2022"
                        iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                        //icon={<SchoolIcon />}
                    >
                        <h1 className="vertical-timeline-element-title">Stage 06</h1>
                        <h2 className="vertical-timeline-element-subtitle">????</h2>
                        <p>
                            ????
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date="June 2022"
                        iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                        //icon={<SchoolIcon />}
                    >
                        <h1 className="vertical-timeline-element-title">Stage 07</h1>
                        <h2 className="vertical-timeline-element-subtitle">Roadmap v2 release!</h2>
                        <p>
                            Maybe another party?
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                        //icon={<StarIcon />}
                    />
                </VerticalTimeline>
            </div>
        )
    }
}