const http = require("http");


// These req and res are objects and you can give whatever name you want to give but usually wwe give this to remove confusion


const server = http.createServer((req, res) => {
  // res.write("Hello World")
  // res.end()

  // You can write in end only
  // res.end("Hello World")

  // req.url will give the url that is user requested for
  // console.log(req.url)

  if (req.url === "/") {
    res.end("Home Page");
  } else if (req.url === "/about") {
    res.end("Hello World");
  }

  res.end(`<h1>Error while finding your page</h1>
        <a href = "/"> Back to home page </a>
        `);
});

server.listen(5000);
