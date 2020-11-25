/*
function sayHello(name){
    console.log("Hello " + name);
}

sayHello("Joy");


//console.log(module);

// var logger = require('./logger');   // instead of var sue const
// logger.log('Welcome to Node JS');

var log = require('./logger');   // instead of var sue const
log('Welcome to Node JS');

OR
import { log } from './logger';

logger.log('Welcome to Node JS');  
------------------------------------


path
const path = require('path');

var pathObj = path.parse(__filename);
console.log(pathObj);        



//Operating System Module
const os =  require('os');

var freeMemory = os.freemem();
var totalMemory = os.totalmem();

console.log(`Free Memory: ${freeMemory}`);
console.log(`Total Memory: ${totalMemory}`);        



//File System Module
const fs = require('fs');

const files = fs.readdirSync('./');
console.log(files);      */



//------------------------------------------------------------
//EVENTS
const EventEmitter = require('events');
const emitter = new EventEmitter();

//Register a listener
emitter.on('messageLogged', (arg) => {    //function(arr){} 
    console.log('Listener called', arg);
});

//Raise and event
emitter.emit('messageLogged', {id: 1, url: 'http://'});

//------Another Example--------
/*
//Register a listener
emitter.on('Logging', (arg) => {    //function(arr){} 
    console.log('Listener called', arg);
});

//Raise and event
emitter.emit('Logging', {data: "Logging event"});    */

//------------------------------------------------------------ 
