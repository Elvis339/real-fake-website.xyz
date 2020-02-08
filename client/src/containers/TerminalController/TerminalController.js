import React, { Component } from "react";
import Aux from '../../components/hoc/Aux';
import Terminal from '../../components/Terminal/Terminal';
import About from '../../components/About/About';
import Contact from '../../components/Contact/Contact';
import Portfolio from '../../components/Portfolio/Portfolio';

class TerminalController extends Component {
    constructor(props) {
        super(props)
        this.handleChange.bind(this)
        this.changeHandler.bind(this)
    }

    state = {
        input: "home",
        error: null,
    };

    componentWillMount() {
        return this.show = <Terminal
            change={e => this.handleChange(e)}
            error={this.state.error}
        />
    }

    handleChange(e) {
        const value = String(e.target.value).toLocaleLowerCase(), allowedCommands = [
            'about',
            'portfolio',
            'contact',
            'blog'
        ]
        let isAllowed = allowedCommands.includes(value)

        if (!isAllowed) return 

        return this.setState({ input: value })
    }

    changeHandler(e) {
        const elementState = e.target.dataset.state
        this.setState({ input: elementState })
    }

    render() {
        let show; 
        switch(this.state.input) {
            case "about":
                show = <About 
                    handler={e => this.changeHandler(e)}
                />
                break;
            case "contact":
                show = <Contact 
                    handler={e => this.changeHandler(e)}
                />
                break;
            case "portfolio":
                show = <Portfolio 
                    handler={e => this.changeHandler(e)}
                />
                break;
            default:
                show = <Terminal
                change={e => this.handleChange(e)}
                error={this.state.error}
            />
        }
        return (
            <Aux>
                {show}
            </Aux>
        );
    };
};

export default TerminalController;