const data = require('../../sql3-data')
const url = require("url");
module.exports = async (res, req) => {
    const id = parseInt(req.url.split('/')[2]);
    let success = await data.deleteUser(id);
    if (success) {
        res.writeHead(204);
        res.end();
    } else {
        res.writeHead(404);
        res.end(JSON.stringify({onmessage: 'user not found'}));

    }
}