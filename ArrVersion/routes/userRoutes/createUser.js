const data = require('../../data')
module.exports = (res, req)=>{
    let body = '';
    req.on('data', chunk => {
        body += chunk;
    });
    req.on('end', () => {
        const parsedBody = new URLSearchParams(body);
        const name = parsedBody.get('name');
        const age = parsedBody.get('age');
        if (name && age) {
            const user = { name, age: parseInt(age)};
            data.addUser(user)
            res.writeHead(201);
            res.end(JSON.stringify(user));
        } else {
            res.writeHead(404);
            res.end(JSON.stringify('Name and/or age are required'));
        }

    });
}
