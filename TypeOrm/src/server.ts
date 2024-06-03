import http from "http";
const routeHandler = require('./routes/router');

let port: number;
port = 3000 ;


const server = http.createServer(routeHandler);

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

