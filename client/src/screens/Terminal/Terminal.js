import React, { useState, useEffect } from 'react'
import TerminalView from '../../components/Terminal/Terminal';
import About from "../../components/About/About";
import Contact from "../../components/Contact/Contact";
import Portfolio from "../../components/Portfolio/Portfolio";

const Terminal = () => {
    const [navigation, setNavigation] = useState('contact');
    const handleNavigation = e => {
        const value = e.target.value.toLocaleLowerCase(), allowedCommands = [
            'about',
            'portfolio',
            'contact',
            'blog'
        ]
        const isAllowed = allowedCommands.includes(value)

        if (!isAllowed) return

        return setNavigation(value);
    }

    switch (navigation) {
        case 'about':
            return <About handler={e => setNavigation(e.target.dataset.state)} />
        case 'contact':
            return <Contact handler={e => setNavigation(e.target.dataset.state)} />
        case 'portfolio':
            return <Portfolio handler={e => setNavigation(e.target.dataset.state)} />
        default:
            return <TerminalView change={e => handleNavigation(e)} />
    }
};

export default  Terminal;
