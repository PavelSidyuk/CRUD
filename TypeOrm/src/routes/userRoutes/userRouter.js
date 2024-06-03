import listUsers from './listUsers'
import createUser from './createUser'
import updateUser from './updateUser'
import getUser from './getUser'
import deleteUser from './deleteUser'
import url from 'url'


const userRouter = (req, res) => {
    const parseUrl = url.parse(req.url, true);
    const method = req.method;
    const path = parseUrl.pathname;
    res.setHeader('Content-Type', 'application/json');
    if (path === '/users' && method === 'GET') {
        listUsers(req, res);
    } else if (path === '/users' && method === 'POST') {
        createUser(req, res)
    } else if (path.startsWith('/users/') && method === 'PUT') {
        updateUser(res, req)
    } else if (path.startsWith('/users/') && method === 'GET') {
        getUser(req, res)
    } else if (path.startsWith('/users/') && method === 'DELETE') {
        deleteUser(res, req)
    } else {
        res.writeHead(404);
        res.end(JSON.stringify({onmessage: 'Route not found'}));
    }

}

module.exports = userRouter;