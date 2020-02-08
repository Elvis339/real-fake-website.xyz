import React, { Fragment } from 'react';
import ReactHtmlParser from 'react-html-parser';
import Resource from '../../containers/Resource/Resource';
import Spinner from '../UserInterface/Spinner/Spinner';
import Alert from '../UserInterface/Alerts/Alert';
import Social from '../Social/Social';
import Paragraph from '../UserInterface/Paragraph/Paragraph';
import Frame from '../Frame/Frame';

document.body.style.background = "#fff";
const yearsOld = () => new Date().getFullYear() - 1998;
const about = props => (
    <Frame handler={props.handler}>
        <Resource
            path="/api/v1/articles?article=about"
            render={
                data => {
                    if (data.error) {
                        return <Alert variant='danger' title='Ooops, something went wrong...' />
                    } else if (data.loading === true) {
                        return <Spinner animation='grow' size='lg' centered={true} />
                    } else if (typeof (data.payload.article) !== "undefined") {
                        return data.payload.article.map((val, index) => {
                            return (
                                <Fragment key={index}>
                                    <h1 className="text-center pb-4">{val.title}</h1>
                                    <Paragraph data={"Hy my name is Elvis and I'm " + yearsOld() + " old."} />
                                    <Paragraph data={ReactHtmlParser(val.description)} />
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

export default about;
