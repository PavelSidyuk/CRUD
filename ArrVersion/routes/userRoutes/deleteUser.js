const data = require('../../data')
const url = require("url");
module.exports = (res, req) => {
    const id = parseInt(req.url.split('/')[2]);
    let success = data.deleteUser(id)
    if (success) {
        res.writeHead(201);
        res.end();
    } else {
        res.writeHead(404);
        res.end(JSON.stringify({onmessage: 'user not found'}));

    }
}