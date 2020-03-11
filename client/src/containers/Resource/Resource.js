import React, { Component } from 'react';
import axios from 'axios';
import { getJwt } from '../../helpers/jwt'

import { Alert } from 'antd';
import { Spin } from 'antd';

class Resource extends Component {

    state = {
        loading: true,
        error: null,
        payload: [],
    };

    getFromDB(param) {
        axios.get(param).then(res => {
            this.setState({
                payload: res.data,
                loading: false
            })
        }).catch(err => this.setState({ error: err }))
    }

    componentDidMount() {
        this.getFromDB(this.props.path);
    };

    componentDidUpdate(prevProps) {
        if(this.props.path !== prevProps.path) {
            return this.getFromDB(this.props.path)
        }
        return
    };

    render() {
        if (this.state.error) {
            if (this.state.error.response.data.status === 404) {
                return <Alert className='my-2' type='warning' message='Not found...' />
            }
            return <Alert className='my-2' type='error' message='Ooops, network tab has more info.' />
        } else if (this.state.loading) {
            return <Spin size='large' />
        } else {
            return this.props.render(this.state)
        }
    };
};

export default Resource;
