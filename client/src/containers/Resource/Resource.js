import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Centered from '../../components/Layouts/Centered/Centered';
import { Alert, Spinner } from 'react-bootstrap';

const Resource = ({ path, render }) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [payload, setPayload] = useState([]);

    const fetchData = (path) => {
        axios.get(path).then(res => {
            setPayload(res.data);
            setLoading(false);
        }).catch(err => setError(err));
    }

    useEffect(() => fetchData(path), [path])

    return (
        <>
            {error ? <Alert variant='danger'>Something went wrong...</Alert> : null}
            {loading ? <Centered height='70vh'><Spinner animation='grow' /></Centered> : null}
            {render({ loading, error, payload })}
        </>
    )
};

export default Resource;
