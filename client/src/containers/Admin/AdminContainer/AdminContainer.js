import React, { Component } from 'react';
import axios from 'axios';
import Login from '../../../components/Admin/Login/Login';


class Admin extends Component {
    constructor(props) {
        super(props)

        this.handleSubmit.bind(this);
        this.handleChange.bind(this);
    }

    state = {
        error: null,
        name: null,
        email: null,
        password: null,
        treshold: 1,
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    async handleSubmit(e) {
        e.preventDefault();

        if (this.state.treshold > 1) {
            e.target.children[3].disabled = true
            return window.location.href = "http://www.nyan.cat/";
        }

        try {
            const res = await axios.post('/api/v1/login', {
                name: this.state.name,
                email: this.state.email,
                password: this.state.password,
            })
            localStorage.setItem('token', res.data.token);
            localStorage.setItem('created_by', this.state.email);
            this.props.history.push('/admin');
        }
        catch (err) {
            let counter = this.state.treshold + 1
            this.setState({ error: err, treshold: counter });
        }
    };


    render() {
        return (
            <Login
                change={e => this.handleChange(e)}
                handleSubmit={e => this.handleSubmit(e)}
            />
        )
    }
}

export default Admin;