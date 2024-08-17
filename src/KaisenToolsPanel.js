import React, { useState, useRef, useEffect } from 'react';
import { Terminal } from 'xterm';
import 'xterm/css/xterm.css'; // Import xterm.js CSS
import './KaisenToolsPanel.css'; // Import your custom CSS

function KaisenToolsPanel() {
    const [command, setCommand] = useState('');
    const [output, setOutput] = useState('');
    const [selectedTask, setSelectedTask] = useState('');
    const terminalRef = useRef(null);

    const taskOptions = {
        update: "apt-get update",
        upgrade: "apt-get upgrade",
        installTools: "katoolin3 install tools"
    };

    useEffect(() => {
        const term = new Terminal();
        term.open(terminalRef.current);
        term.write('Welcome to the Kaisen Linux Tools Interface\r\n');
        term.write('> ');
        term.onData(e => {
            term.write(`\r\nYou pressed ${e}`);
            term.write('\r\n> ');
        });
    }, []);

    const executeCommand = () => {
        const cmd = selectedTask || command;
        setOutput(`Executing: ${cmd}\nResult: Command executed successfully.`);
        terminalRef.current.term.write(`\r\nExecuting: ${cmd}\r\n`);
    };

    return (
        <div className="kaisen-panel">
            <h2>Kaisen Linux Tools</h2>
            <div className="tooltip">
                <select className="kaisen-dropdown" onChange={(e) => setSelectedTask(taskOptions[e.target.value])}>
                    <option value="">Select a Task</option>
                    <option value="update">Update System</option>
                    <option value="upgrade">Upgrade System</option>
                    <option value="installTools">Install Katoolin Tools</option>
                </select>
                <span className="tooltiptext">Select a common task to execute.</span>
            </div>
            <input
                type="text"
                value={command}
                onChange={(e) => setCommand(e.target.value)}
                placeholder="Or Enter Katoolin command"
                className="kaisen-input"
            />
            <button onClick={executeCommand} className="kaisen-button">
                Execute
            </button>
            <div ref={terminalRef} style={{ height: '200px', width: '100%', backgroundColor: '#000' }}></div>
        </div>
    );
}

export default KaisenToolsPanel;

const [commandHistory, setCommandHistory] = useState([]);
const [historyIndex, setHistoryIndex] = useState(-1);

const handleKeyDown = (e) => {
    if (e.key === 'ArrowUp' && commandHistory.length > 0) {
        const index = historyIndex <= 0 ? commandHistory.length - 1 : historyIndex - 1;
        setCommand(commandHistory[index]);
        setHistoryIndex(index);
    }
    if (e.key === 'ArrowDown' && commandHistory.length > 0) {
        const index = historyIndex >= commandHistory.length - 1 ? 0 : historyIndex + 1;
        setCommand(commandHistory[index]);
        setHistoryIndex(index);
    }
};

const executeCommand = () => {
    const cmd = selectedTask || command;
    setCommandHistory([...commandHistory, cmd]);
    setHistoryIndex(-1);
    terminalRef.current.term.write(`\r\nExecuting: ${cmd}\r\n`);
};

return (
    <input
        type="text"
        value={command}
        onChange={(e) => setCommand(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Or Enter Katoolin command"
        className="kaisen-input"
    />
);
