const http = require("http");
http
  .createServer((req, res) => {
    res.writeHead(404);
    res.write("Page not found");
    res.end();
  })
  .listen(3000);

console.log("Listening on port 3000...");
