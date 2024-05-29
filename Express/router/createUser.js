import data from '../sql3-data.js';

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
            const createUser = await data.addUser(user)
            res.status(201).json(createUser);
        } else {
            res.status(404).json({onmessage: 'Name and/or age are required'});
        }

    });
}

export default createUser;