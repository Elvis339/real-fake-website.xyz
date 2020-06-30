import React, { Component } from 'react';
import axios from 'axios';
import Editor from '../EditorContainer/EditorContainer';
import Article from '../../../components/Admin/Article/Article';
import Portfolio from '../../../components/Admin/Article/Portfolio';
import AuthenticatedComponent from '../AuthenticatedContainer/AuthenticatedContainer';
import { Button } from 'react-bootstrap';


class ArticleController extends Component {
    constructor(props) {
        super(props)

        this.handleSubmit.bind(this);
        this.handleChange.bind(this);
        this.handleEditor.bind(this);
    }

    state = {
        status: null,
        id: null,
        title: null,
        short_description: null,
        description: null,
        type: "About",
        dev_stack: [],
        created_by: null,
        start_date: null,
        end_date: null,
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleEditor(value) {
        this.setState({
            description: value
        })
    }

    async handleSubmit(e) {
        e.preventDefault();

        try {
            if (this.state.type === "About") {
                if (this.props.post) {
                    await axios.post('/api/v1/articles', {
                        title: this.state.title,
                        description: this.state.description,
                        type: this.state.type,
                    }, { headers: { "Authorization": `Bearer ${window.localStorage.getItem('token')}` } })
                    this.setState({
                        status: {
                            err: "Done!",
                            message: "Added",
                        }
                    })
                } else {
                    await axios.patch('/api/v1/articles', {
                        title: this.state.title,
                        description: this.state.description,
                        type: this.state.type,
                        created_by: window.localStorage.getItem('created_by')
                    }, { headers: { "Authorization": `Bearer ${window.localStorage.getItem('token')}` } })
                    this.setState({
                        status: {
                            err: "Done!",
                            message: "Patched",
                        }
                    })
                }
            } else {
                if (this.props.post) {
                    await axios.post('/api/v1/articles', {
                        title: this.state.title,
                        short_description: this.state.short_description,
                        description: this.state.description,
                        type: this.state.type,
                        dev_stack: this.state.dev_stack,
                        created_by: window.localStorage.getItem('created_by'),
                        start_date: this.state.start_date,
                        end_date: this.state.end_date,
                    }, { headers: { "Authorization": `Bearer ${window.localStorage.getItem('token')}` } })
                    this.setState({
                        status: {
                            err: "Done!",
                            message: "Added",
                        }
                    })
                } else {
                    await axios.patch('/api/v1/articles', {
                        title: this.state.title,
                        description: this.state.description,
                        short_description: this.state.short_description,
                        type: this.state.type,
                        dev_stack: this.state.dev_stack,
                        created_by: window.localStorage.getItem('created_by'),
                        start_date: this.state.start_date,
                        end_date: this.state.end_date,
                    }, { headers: { "Authorization": `Bearer ${window.localStorage.getItem('token')}` } })
                    this.setState({
                        status: {
                            err: "Done!",
                            message: "Patched",
                        }
                    })
                }
            }
        }
        catch (err) {
            this.setState({ status: err.response.data });
        }
    };


    render() {
        return (
            <AuthenticatedComponent className="w-100">
                <Article
                    status={this.state.status}
                    type={this.state.type}
                    change={e => this.handleChange(e)}
                    handleSubmit={e => this.handleSubmit(e)}
                >
                    <Editor change={value => this.handleEditor(value)} />
                    {this.state.type === "Portfolio" ? <Portfolio change={e => this.handleChange(e)} /> : null}
                    <Button className='my-3' type="submit">{this.state.type || "About"}</Button>
                </Article>
            </AuthenticatedComponent>
        )
    }
}

export default ArticleController;