var http = require('http');
var processor = require('./processor');


http.createServer (function(req, res){
    res.writeHead(200);
    res.write(processor.textAdd() + '$' + (processor.processor(100, 100000)) + '\n');
    res.end();
}).listen(3000);

console.log("listening on port: 3000");



