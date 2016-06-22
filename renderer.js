// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
function end_main(){
    var ipc = window.require('ipc')
    ipc.send('close-main-window')
}
