var io = require('socket.io-client');
var socket = io.connect('http://localhost:8080');
//socket.emit('print');
socket.on('printOut', function (data) {
    console.log(data);
});

socket.on('turn ends', function (data) {
    console.log(data);
});

socket.emit('reset');
socket.emit('print');
socket.emit('start');
socket.emit('turn', {playerid: 1, squareid: 19});
socket.emit('turn', {playerid: 2, squareid: 20});
socket.emit('turn', {playerid: 3, squareid: 21});
socket.emit('turn', {playerid: 4, squareid: 28});
socket.emit('turn', {playerid: 5, squareid: 29});
socket.emit('turn', {playerid: 6, squareid: 30});
socket.emit('print');

socket.emit('reset');
socket.emit('turn', {playerid: 1, squareid: 25});
socket.emit('turn', {playerid: 2, squareid: 81});
socket.emit('print');
socket.emit('turn', {playerid: 3, squareid: 23});
socket.emit('turn', {playerid: 4, squareid: 25});
socket.emit('turn', {playerid: 5, squareid: 56});
socket.emit('turn', {playerid: 6, squareid: 31});
socket.emit('print');


socket.emit('reset');
socket.emit('start');
socket.emit('turn', {playerid: 1, squareid: 19});
socket.emit('turn', {playerid: 2, squareid: 20});
socket.emit('turn', {playerid: 3, squareid: 21});
socket.emit('turn', {playerid: 4, squareid: 28});
socket.emit('turn', {playerid: 5, squareid: 29});
socket.emit('turn', {playerid: 6, squareid: 30});

socket.emit('turn', {playerid: 6, squareid: 36});
socket.emit('turn', {playerid: 5, squareid: 38});
socket.emit('turn', {playerid: 4, squareid: 39});
socket.emit('turn', {playerid: 3, squareid: 1});
socket.emit('turn', {playerid: 2, squareid: 2});
socket.emit('turn', {playerid: 1, squareid: 3});

socket.emit('turn', {playerid: 6, squareid: 46});
socket.emit('turn', {playerid: 3, squareid: 10});
socket.emit('turn', {playerid: 4, squareid: 47});
socket.emit('turn', {playerid: 2, squareid: 11});
socket.emit('turn', {playerid: 5, squareid: 48});
socket.emit('turn', {playerid: 1, squareid: 12});
socket.emit('print');



setTimeout( () => { process.exit(0); }, 3000);