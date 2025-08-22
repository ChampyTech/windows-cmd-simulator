const terminal = document.getElementById('terminal');

function addStartupHeader() {
    const header = document.createElement('div');
    header.innerHTML = `Microsoft Windows [Version 10.0.19045.6036]<br>(c) Microsoft Corporation. All rights reserved.<br><br>`;
    terminal.appendChild(header);
}

function createNewLine() {
    const line = document.createElement('div');
    line.className = 'line';

    const prompt = document.createElement('span');
    prompt.className = 'prompt';
    prompt.textContent = 'C:\\Windows\\System32>';

    const input = document.createElement('input');
    input.type = 'text';

    line.appendChild(prompt);
    line.appendChild(input);
    terminal.appendChild(line);

    input.focus();

    input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            const command = input.value.trim();
            handleCommand(command);
            input.disabled = true;
            createNewLine();
        }
    });
}

function handleCommand(cmd) {
    const output = document.createElement('div');
    switch (cmd.toLowerCase()) {
        case 'test':
            output.textContent = 'This is a test command!';
            break;
        case 'help':
            output.textContent = `---------- Windows CMD Simulator ----------
A simple command prompt simulator styled like the classic Windows CMD interface, built using HTML, CSS, and JavaScript. Type custom commands and see responses inside a terminal-like UI.

Here is a list of all available commands:
| test  | Prints a test message    |
| help  | Shows available commands |
| clear | Clears the terminal      |
| time  | Returns the current time |
| date  | Returns the current date |`;
            break;
        case 'time':
            const time = new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
            output.textContent = `Current time: ${time} (UTC)`;
            break;
        case 'date':
            const date = new Date().toLocaleDateString('en-US', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
            output.textContent = `Current date: ${date} (UTC)`;
            break;
        case 'clear':
            terminal.innerHTML = '';
            return;
        default:
            output.textContent = `'${cmd}' is not recognized as an internal or external command, operable program or batch file.`;
    }

    terminal.appendChild(output);
    terminal.appendChild(document.createElement('br'));
}

addStartupHeader();
createNewLine();