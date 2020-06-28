import React, { Fragment } from 'react';
import { dateParser } from "../../helpers"

import Resource from '../../containers/Resource/Resource';
import Navigation from '../Navigation/Navigation';

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const portfolio = ({ handler }) => {
    return (
        <>
            <Navigation handler={handler} />
            <VerticalTimeline>
                <Resource
                    path='/api/v1/portfolios'
                    render={
                        data => {
                            if (typeof data.payload !== "undefined") {
                                return data.payload.map((item, index) => {
                                    let text = '';
                                    item.dev_stack.forEach(skill => text += skill);
                                    return (
                                        <Fragment key={index}>
                                            <VerticalTimelineElement
                                                style={{ cursor: 'pointer' }}
                                                onTimelineElementClick={() => window.open(`/portfolio/${item.title.replace(/\s/g, '-')}`, '_blank')}
                                                className="vertical-timeline-element--work"
                                                date={dateParser(item)}
                                                iconStyle={{ background: '#48c6ef', color: '#fff' }}
                                            >
                                                <h3 className="vertical-timeline-element-title">{item.title}</h3>
                                                <hr />
                                                <h4 className="vertical-timeline-element-subtitle">{text}</h4>
                                            </VerticalTimelineElement>
                                        </Fragment>
                                    );
                                });
                            };
                        }
                    }
                />
            </VerticalTimeline>
        </>
    )
};

export default portfolio;
