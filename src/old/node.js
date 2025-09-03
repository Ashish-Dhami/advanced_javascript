import http from "http";
const server = http.createServer((req, res) => {
  res.writeHead(200, {
    "content-type": "application/json",
  });
  res.write("{ a: 1, b: 2 }");
  res.end();
});

server.listen(4000, () => {
  console.log("server started");
});
console.error("*".repeat(80));
