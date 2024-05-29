import data from '../sql3-data.js';

const updateUser = async (req, res) => {
    let body = '';
    const id = parseInt(req.url.split('/')[1]);
    req.on('data', chunk => {
        body += chunk;
    });
    req.on('end', async () => {
            const parsedBody = new URLSearchParams(body);
            const updatedData = {};
            parsedBody.forEach((value, key) => {
                updatedData[key] = key === 'age' ? parseInt(value) : value
            });
            let user = await data.updateUser(id, updatedData);
            if (user) {
                res.status(200).json(user);
            } else {
                res.status(404).json({onmessage: 'user not found'});

            }
        }
    )
}

export default updateUser;