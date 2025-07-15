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
    prompt.textContent = '>';

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
            output.textContent = 'Test!';
            break;
        case 'help':
            output.textContent = `---------- Windows CMD Simulator ----------
A simple command prompt simulator styled like the classic Windows CMD interface, built using HTML, CSS, and JavaScript. Type custom commands and see responses inside a terminal-like UI.
Here is a list of all available commands:
| test  | Prints "Test!"           |
| help  | Shows available commands |
| clear | Clears the terminal      |`;
            break;
        case 'clear':
            terminal.innerHTML = '';
            return;
        default:
            output.textContent = `'${cmd}' non è riconosciuto come comando interno o esterno.`;
    }

    terminal.appendChild(output);
    terminal.appendChild(document.createElement('br'));
}

addStartupHeader();
createNewLine();