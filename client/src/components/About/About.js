import React, { Fragment } from 'react';
import ReactHtmlParser from 'react-html-parser';
import Resource from '../../containers/Resource/Resource';
import Social from '../Social/Social';
import Frame from '../Frame/Frame';

const about = props => (
    <Frame handler={props.handler} row={false}>
        <Resource
            path="/api/v1/articles"
            render={
                data => {
                    if (typeof (data.payload.article) !== "undefined") {
                        return data.payload.article.map((val, index) => {
                            return (
                                <Fragment key={index}>
                                    <div className='mx-auto my-5'>
                                        <h1 className="text-center pb-4">{val.title}</h1>
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

export default about;
