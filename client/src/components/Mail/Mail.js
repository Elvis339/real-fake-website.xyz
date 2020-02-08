import React from 'react';
import Aux from '../hoc/Aux';

const mail = props => (
    <Aux>
        <a href="mailto:elvissabanovic3@gmail.com?subject=Contact from a website&body=I'll be happy to talk to you! :)">{props.text}</a>
    </Aux>
);

export default mail;