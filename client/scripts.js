
var login = undefined;             //TODO fill login, password and server
var password = undefined;
var server = "ws://localhost:8080/ws";

function connect() {
    socket = new WebSocket(server + '?user=' + login + '&password=' + password);

    socket.onopen = function () {
    };

    socket.onclose = function () {
        connect(server);
    };

    socket.onmessage = function (message) {
        gameData = JSON.parse(message.data);
        print(gameData.event);

        if (gameData.mover == login) {
            doAnswer();
        }
    };
}

function print(text) {
    console = document.getElementById("console");
    console.value += text + "\n";

    if (console.value.split("\n").length > 50) {
        console.value = console.value.substring(console.value.indexOf("\n") + 1, console.value.length);
    }

    console.scrollTop = console.scrollHeight;
}

function doAnswer() {       //TODO type your answer here!

    //Possible answers:
    //Call, Fold, Check, Rise, AllIn
    //You can specify rise value:  "Rise,500"

    socket.send("Call");
}