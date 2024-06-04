const http = require('http');
require('dotenv').config();
const routeHandler = require('./routes/router');

const server = http.createServer(routeHandler);
console.log(process.env.PORT)
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});