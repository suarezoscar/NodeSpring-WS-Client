const SockJS =  require('sockjs-client');
const { Stomp } = require('@stomp/stompjs');

var stompClient = null;

function connect(url) {
    var socket = new SockJS(url);
    stompClient = Stomp.over(socket);

    stompClient.connect({}, (frame) => {
        console.log('Connected: ' + frame);

        stompClient.subscribe('/topic/user', (greeting) => {
            console.log('greeting, ', greeting)
        });

    });
}

function disconnect() {
    if (stompClient !== null) {
        stompClient.disconnect();
    }
    console.log("Disconnected");
}

function sendName(name) {
    stompClient.send("/app/user", {}, JSON.stringify({name}));
}

function showGreeting(message) {
    console.log('showGreeting:: ', message);
}

module.exports = {
    sendName,
    disconnect,
    connect
};