import React, { Fragment } from 'react';

const mail = props => (
    <Fragment>
        <a href="mailto:elvissabanovic3@gmail.com?subject=Contact from a website&body=I'll be happy to talk to you! :)">{props.text}</a>
    </Fragment>
);

export default mail;