var io = require('socket.io-client');
var socket = io.connect('http://localhost:8080');
//socket.emit('print');
socket.on('printOut', function (data) {
    console.log(data);
});

socket.on('turn ends', function (data) {
    console.log(data);
});

socket.on('player action', function(msg) {
    console.log(msg);
});

socket.on('game starts', function(msg) {
    console.log(msg);
});

//console.log(typeof process.argv[2]);

var addUsers = function(number) {
    socket.emit('get player id', { 'faction': 'X' });
    socket.emit('get player id', { 'faction': 'X' });
    socket.emit('get player id', { 'faction': 'X' });
    socket.emit('get player id', { 'faction': '0' });
    socket.emit('get player id', { 'faction': '0' });
    if(number >= 6)
        socket.emit('get player id', { 'faction': '0' });

}

var timeout = 1000;

switch (process.argv[2]){
    case '1': // simple turn test
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
        break;
    case '2': // small world collision
        socket.emit('reset');
        socket.emit('turn', {playerid: 1, squareid: 25});
        socket.emit('turn', {playerid: 2, squareid: 81});
        socket.emit('print');
        socket.emit('turn', {playerid: 3, squareid: 23});
        socket.emit('turn', {playerid: 4, squareid: 25});
        socket.emit('turn', {playerid: 5, squareid: 56});
        socket.emit('turn', {playerid: 6, squareid: 31});
        socket.emit('print');
        break;

    case '3': // X wins
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
        break;

    case '4': // draw conditions test
        socket.emit('reset');
        socket.emit('start');
        socket.emit('turn', {playerid: 1, squareid: 19});
        socket.emit('turn', {playerid: 2, squareid: 20});
        socket.emit('turn', {playerid: 3, squareid: 21});
        socket.emit('turn', {playerid: 4, squareid: 28});
        socket.emit('turn', {playerid: 5, squareid: 29});
        socket.emit('turn', {playerid: 6, squareid: 30});

        socket.emit('turn', {playerid: 6, squareid: 39});
        socket.emit('turn', {playerid: 5, squareid: 38});
        socket.emit('turn', {playerid: 4, squareid: 37});
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
        break;

    case '5': // semi-win conditions test
        socket.emit('reset');
        socket.emit('start');
        socket.emit('turn', {playerid: 1, squareid: 19});
        socket.emit('turn', {playerid: 2, squareid: 20});
        socket.emit('turn', {playerid: 3, squareid: 21});
        socket.emit('turn', {playerid: 4, squareid: 28});
        socket.emit('turn', {playerid: 5, squareid: 81});
        socket.emit('turn', {playerid: 6, squareid: 30});

        socket.emit('turn', {playerid: 6, squareid: 39});
        socket.emit('turn', {playerid: 5, squareid: 38});
        socket.emit('turn', {playerid: 4, squareid: 37});
        socket.emit('turn', {playerid: 3, squareid: 1});
        socket.emit('turn', {playerid: 2, squareid: 2});
        socket.emit('turn', {playerid: 1, squareid: 3});

        socket.emit('turn', {playerid: 6, squareid: 46});
        socket.emit('turn', {playerid: 3, squareid: 10});
        socket.emit('turn', {playerid: 4, squareid: 47});
        socket.emit('turn', {playerid: 2, squareid: 11});
        socket.emit('turn', {playerid: 5, squareid: 48});
        //socket.emit('turn', {playerid: 1, squareid: 12});
        socket.emit('print');
        break;
    case '6': // test state before the start
        socket.emit('reset');
        socket.emit('print');
        socket.emit('turn', {playerid: 5, squareid: 1});
        socket.emit('get player id', { 'faction': 'X' });
        socket.emit('turn', {playerid: 1, squareid: 2});
        socket.emit('print');
        break;
    case '7': // test state after the start
        socket.emit('reset');
        socket.on('playerid', function(msg) {
            console.log('playerid received ' + msg.playerid);
        });
        addUsers();
        socket.emit('get player id', { 'faction': '0' });
        socket.emit('print');
        socket.emit('turn', {playerid: 1, squareid: 2});
        break;
    case '8': // poke players before the game starts
        socket.emit('reset');
        socket.on('playerid', function(msg) {
            console.log('playerid received ' + msg.playerid);
        });
        socket.emit('alive', {'playerid': 1});
        socket.emit('print');

        break;
    case '9': // poke players after the game starts
        timeout = 60000;
        socket.emit('reset');
        socket.on('playerid', function(msg) {
            console.log('playerid received ' + msg.playerid);
        });
        socket.on('disconnected players', function(msg) {
            console.log('disconnected players ' + msg.zombies);
        });
        addUsers(5);
        //socket.emit('get player id', { 'faction': '0' });
        var keepThemAlive = function () {
            socket.emit('alive', {'playerid': 1});
            socket.emit('alive', {'playerid': 2});
            socket.emit('alive', {'playerid': 3});
            socket.emit('alive', {'playerid': 4});
        }
        setTimeout(keepThemAlive, 13000);
        setTimeout(keepThemAlive, 23000);
        setTimeout(keepThemAlive, 33000);
        setTimeout(keepThemAlive, 43000);
        setTimeout(keepThemAlive, 53000);
        var ch = function () { socket.emit('print'); };
        setTimeout(ch, 15000);
        setTimeout(ch, 25000);
        setTimeout(ch, 45000);
        break;

}

setTimeout( () => { process.exit(0); }, timeout);