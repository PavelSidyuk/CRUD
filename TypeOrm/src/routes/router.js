import url from 'url';
import userRoutes from './userRoutes/userRouter';
import path from "node:path";


const routeHandler = async (req, res) => {
    const parseUrl = url.parse(req.url, true);
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