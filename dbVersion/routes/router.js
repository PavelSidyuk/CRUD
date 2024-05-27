const url = require("url");
const userRoutes = require("./userRoutes/userRouter");


const routeHandler = async (req, res) => {

    const parseUrl = url.parse(req.url, true);
    const method = req.method;
    const path = parseUrl.pathname;
    res.setHeader('Content-Type', 'application/json');

    if (path === '/users' || path.startsWith('/users/')) {
       await userRoutes(req, res)
    } else {
        res.setHeader('Content-Type', 'application/json');
        res.writeHead(404);
        res.end(JSON.stringify({onmessage: 'Route not found'}));
    }

};

module.exports = routeHandler;