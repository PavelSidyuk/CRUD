const listUsers = require('./listUsers');
const createUser = require('./createUser');
const getUser = require('./getUser');
const updateUser = require('./updateUser');
const deleteUser = require('./deleteUser')
const url = require('url');


const userRouter = (req, res) => {
    const parseUrl = url.parse(req.url, true);
    const method = req.method;
    const path = parseUrl.pathname;
    res.setHeader('Content-Type', 'application/json');
    if (path === '/users' && method === 'GET') {
        listUsers(res, req)
    } else if (path === '/users' && method === 'POST') {
        createUser(res, req)
    } else if (path.startsWith('/users/') && method === 'GET') {
        getUser(res, req)
    } else if (path.startsWith('/users/') && method === 'PUT') {
        updateUser(res, req)
    } else if (path.startsWith('/users/') && method === 'DELETE') {
        deleteUser(res, req)
    } else {
        res.writeHead(404);
        res.end(JSON.stringify({onmessage: 'Route not found'}));
    }
}

module.exports = userRouter;