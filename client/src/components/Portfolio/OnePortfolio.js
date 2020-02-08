import React from 'react'
import Aux from '../hoc/Aux';
import Resource from '../../containers/Resource/Resource';
import OnePortfolioUi from '../UserInterface/OnePortfolioUI/OnePortfolioUi';
import Paragraph from '../UserInterface/Paragraph/Paragraph';

const onePortfolio = ({ match }, props) => {
    return (
        <Aux>
            <Resource
                path={`/api/v1/articles?id=${match.params.portfolioId}`}
                render={
                    data => {
                        let article = data.payload.article
                        let abc = "";
                        let skills = []
                        for (let i in article) {
                            skills.push(article[i])
                        }
                        if (typeof (skills[0]) !== "undefined") {
                            skills[0].forEach(skill => abc += skill)
                        }
                        if (typeof (article) !== "undefined") {
                            return (
                                <Aux key={article._id}>
                                    <OnePortfolioUi 
                                        title={article.title}
                                        start_date={article.start_date.slice(0, 10)}
                                        end_date={article.end_date.slice(0, 10)}
                                        skills={abc}
                                        text={article.description}
                                    />
                                </Aux>
                            )
                        }
                        return <Paragraph data="Loading..." />
                    }
                }
            />
        </Aux>
    )
}

export default onePortfolio;