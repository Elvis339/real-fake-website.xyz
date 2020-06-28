import React from 'react';
import './Terminal.css';

const terminal = ({ change }) => (
    <div className="Terminal">
        <div className="window">
            <div className="terminal">
                <p className="command">git clone <a target="_blank" rel="noopener" href="https://github.com/Elvis339/real-fake-website.xyz">https://github.com/Elvis339/real-fake-website.xyz</a></p>
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
                        autoFocus
                        type="text"
                        placeholder="Enter a command"
                        onChange={change}
                    />
                </p>
                <p className="help">
                    Available commands about, portfolio, contact, blog <br />
                </p>
            </div>
        </div>
    </div>
)

export default terminal;
