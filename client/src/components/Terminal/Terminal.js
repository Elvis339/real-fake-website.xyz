import React from 'react';
import './Terminal.css';

const terminal = props => (
    <div className="Terminal">
        <div className="window">
            <div className="terminal">
                <p className="command">git clone <a target="_blank" rel="noopener" href="https://github.com/Elvis339/personal_website">https://github.com/Elvis339/personal_website</a></p>
                <p className="log">
                    <span>
                        Cloning into 'Elvis339'...<br />
                        remote: Enumerating objects: 384, done.<br />
                        remote: Total 384 (delta 144), reused 330 (delta 93)<br />
                        Receiving objects: 100% (384/384), 338.35 KiB | 546.00 KiB/s, done.<br />
                        Resolving deltas: 100% (144/144), done.<br />
                        Checking connectivity... done.<br />
                    </span>
                </p>
                <p className="command">
                    cd <input 
                        type="text" 
                        placeholder="Enter a command"
                        onChange={props.change}
                        />
                </p>
                <p className="help">
                    Available commands about, portfolio, contact, blog <br />
                    {props.error}
                </p>
            </div>
        </div>
    </div>
)

export default terminal;
