const data = require('../../data')
module.exports = (res, req) => {
    res.writeHead(200);
    res.end(JSON.stringify(data.getUsers()));
}