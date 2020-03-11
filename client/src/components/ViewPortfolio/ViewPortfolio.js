import React, { Fragment } from 'react'
import Resource from '../../containers/Resource/Resource';
import PortfolioLayoutView from '../Layouts/portfolioView/portfolioLayoutView';

const viewPortfolio = ({ match }, props) => {
    return (
        <Fragment>
            <Resource
                path={`/api/v1/portfolios?id=${match.params.portfolioId}`}
                render={
                    data => {
                        let portfolio = data.payload
                        return (
                            <Fragment key={portfolio._id}>
                                <PortfolioLayoutView
                                    title={portfolio.title}
                                    start_date={portfolio.start_date.slice(0, 10)}
                                    end_date={portfolio.end_date.slice(0, 10)}
                                    skills={portfolio.dev_stack}
                                    text={portfolio.description}
                                />
                            </Fragment>
                        )
                    }
                }
            />
        </Fragment>
    )
}

export default viewPortfolio;