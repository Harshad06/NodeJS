console.log(__filename);
console.log(__dirname);

var url = "https://mylogger.io/log";

function log(message){
    console.log(message);
}

//module.exports.log = log;     //exporting an object
module.exports = log;           //exporting a single function
/*OR 
const _log = log;
export { _log as log }; */
