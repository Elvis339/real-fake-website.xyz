import React, { Fragment } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
} from "react-router-dom";
import { Container, Row } from 'react-bootstrap';
import ArticleContainer from '../../../containers/Admin/ArticleContainer/ArticleContainer';
import logoff from '../../../helpers/logout';


const dashboard = props => (
    <Router>
        <Fragment>
            <h2>Accounts</h2>

            <ul>
                <li>
                    <Link to="/add">Add article</Link>
                </li>
                <li>
                    <Link to="/edit">Edit</Link>
                </li>
                <li>
                    <Link to="/admin">Admin</Link>
                </li>
                <li>
                    <Link to='/login' onClick={logoff}>Logout</Link>
                </li>
            </ul>

            <Switch>
                <Route path="/:id" children={<Child />} />
            </Switch>
        </Fragment>
    </Router>
)

function Child(props) {
    let { id } = useParams();
    let show;
    switch(id){
        case "add":
            show = <ArticleContainer post={true} />
            break;
        case "edit":
            show = <ArticleContainer post={false} />
            break;
        default:
            break;
    }
    return (
        <Container>
            <Row>
                {show}
            </Row>
        </Container>
    );
}

export default dashboard;