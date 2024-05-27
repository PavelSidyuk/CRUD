const data = require("../../data");
const url = require("url");
module.exports = (res, req) => {
    const id = parseInt(req.url.split('/')[2]);
    const user = data.getUserById(id)
    if (user) {
        res.writeHead(200);
        res.end(JSON.stringify(user));
    } else {
        res.writeHead(404);
        res.end(JSON.stringify({onmessage: 'user not found'}));
    }
}