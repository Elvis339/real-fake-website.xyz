import React, {Fragment} from 'react';
import Resource from "../../containers/Resource/Resource";
import {Container} from "react-bootstrap";
import ReactHtmlParser from 'react-html-parser';

const PortfolioItem = ({match}) => {
    return (
        <>
            <Resource
                path={`/api/v1/portfolios?id=${match.params.portfolioId}`}
                render={
                    data => {
                        const {title, description, dev_stack, start_date, end_date} = data.payload;
                        console.log(data.payload)
                        return (
                            <>
                                <Container>
                                    <h1 className='text-center header-text pt-2'>{title}</h1>
                                    <div className='text-center header-text'>{start_date} - {end_date}</div>
                                    <h3 className='text-center header-text pt-5'>
                                        <code>{dev_stack}</code>
                                    </h3>
                                    <div className='portfolio-description mt-5 lead'>
                                        {ReactHtmlParser(description)}
                                    </div>
                                </Container>
                            </>
                        )
                    }
                }
            />
        </>
    )
};

export default PortfolioItem;