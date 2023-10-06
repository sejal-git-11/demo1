const http = require("http");
var server = http.createServer((req,res) => {
    res.write("Hello world! I have created my first server!!!!");
    res.end();
});
server.listen(3000);
console.log("server started running on localhost 3000");