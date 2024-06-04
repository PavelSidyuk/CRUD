const data = require("../../sql3-data");

module.exports = async (res, req) => {
    const id = parseInt(req.url.split('/')[2]);
    const user = await data.getUserById(id);
    if (user) {
        res.writeHead(200);
        res.end(JSON.stringify(user));
    } else {
        res.writeHead(404);
        res.end(JSON.stringify({onmessage: 'user not found'}));
    }
}