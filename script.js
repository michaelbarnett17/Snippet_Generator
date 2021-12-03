const input = document.querySelector('#input');
const output = document.querySelector('#output');
const snippetName = document.querySelector('#snippetName');
const shortcut = document.querySelector('#snippetShortcut');
const button = document.querySelector('#copyButton');

input.addEventListener('keyup', function () {
    createOutput();
});


snippetName.addEventListener('keyup', function () {
    createOutput();
});

shortcut.addEventListener('keyup', function () {
    createOutput();
});

const createOutput = () => {
    
    let inputLines = input.value.split('\n');
    

    output.value =
`"${snippetName.value}": {
"scope": "javascript,typescript",
"prefix": "${shortcut.value}",
"body": [\n`

    for (let i = 0; i < inputLines.length; i++) {
        output.value += `    "${inputLines[i]}",\n`;
    }

  
    output.value +=
`],
"description": "${snippetName.value}" },`    

button.addEventListener('click', function () {
    const copyText = output;
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
});

};

