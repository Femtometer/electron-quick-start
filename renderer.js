// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
var fs = require('fs')

function end_main () {
    console.log('Click_button');
    document.write('Fun Called');
    var ipc = window.require('ipc');
    ipc.send('close-main-window');
}

function openFile () {
    dialog.showOpenDialog({ filters: [
    { name: 'text', extensions: ['txt'] }
    ]}, function (fileNames) {
        if (fileNames === undefined) return;
        var fileName = fileNames[0];
        fs.readFile(fileName, 'utf-8', function (err, data) {
            document.getElementById("editor").value = data;
        })
    })
}
