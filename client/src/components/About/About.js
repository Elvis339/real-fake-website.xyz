import React, { Fragment, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import ReactHtmlParser from 'react-html-parser';
import Resource from '../../containers/Resource/Resource';
import Social from '../Social/Social';
import Frame from '../Frame/Frame';
import Centered from '../Layouts/Centered/Centered';

const About = ({ handler }) => {
    return (
        <Frame handler={handler} row={false}>
            <Resource
                path="/api/v1/articles"
                render={
                    data => {
                        if (typeof (data.payload.article) !== "undefined") {
                            return data.payload.article.map((val, index) => {
                                return (
                                    <Fragment key={index}>
                                        <div className='about-view'>
                                            <h1 className='text-center header-text'>Hi! Here's something about me.</h1>
                                        </div>
                                        <div body className='about-content mx-auto about-card'>
                                            {ReactHtmlParser(val.description)}
                                        </div>
                                    </Fragment>
                                )
                            })
                        }
                    }
                }
            />
            <Social />
        </Frame>
    )
}

export default About;
