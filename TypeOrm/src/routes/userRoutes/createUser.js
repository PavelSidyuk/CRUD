import {addUser} from '../../sql3-data';

const createUser = async (req, res) =>{
    let body = '';
    req.on('data', chunk => {
        body += chunk;
    });
    req.on('end', async () => {
        const parsedBody = new URLSearchParams(body);
        const name = parsedBody.get('name');
        const age = parsedBody.get('age');
        if (name && age) {
            const user = { name, age: parseInt(age)};
            const createUser = await addUser(user)
            res.writeHead(201);
            res.end(JSON.stringify(createUser));
        } else {
            res.writeHead(404);
            res.end(JSON.stringify('Name and/or age are required'));
        }

    });
}

export default createUser;