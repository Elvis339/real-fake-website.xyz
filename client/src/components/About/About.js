import React, { Fragment } from 'react';
import ReactHtmlParser from 'react-html-parser';
import Resource from '../../containers/Resource/Resource';
import Navigation from '../Navigation/Navigation';

const About = ({ handler }) => (
    <>
        <Navigation handler={handler} />
        <div className='about-view'>
            <h1 className='text-center header-text'>Hi! I'm Elvis, I like programming.</h1>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
                <polygon fill="white" points="0,100 100,0 100,100" />
            </svg>
        </div>
        <Resource
            path="/api/v1/about"
            render={
                data => {
                    const { description } = data.payload;
                    return (
                        <div className='about-content mx-auto about-card'>
                            <div className="lead">
                                {ReactHtmlParser(description)}
                            </div>
                        </div>
                    )
                }
            }
        />
    </>
)

export default About;
