import React, {Fragment} from 'react';
import ReactHtmlParser from 'react-html-parser';
import Resource from '../../containers/Resource/Resource';
import Navigation from '../Navigation/Navigation';

const About = ({handler}) => (
    <>
        <Navigation handler={handler}/>
        <div className='about-view'>
            <h1 className='text-center header-text'>Hi! I'm Elvis, I like programming.</h1>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
                <polygon fill="white" points="0,100 100,0 100,100"/>
            </svg>
        </div>
        <Resource
            path="/api/v1/articles"
            render={
                data => {
                    if (typeof (data.payload.article) !== "undefined") {
                        return data.payload.article.map((val, index) => {
                            return (
                                <Fragment key={index}>
                                    <div className='about-content mx-auto about-card'>
                                        <div className="lead">
                                            {ReactHtmlParser(val.description)}
                                        </div>
                                    </div>
                                </Fragment>
                            )
                        })
                    }
                }
            }
        />
    </>
)

export default About;
