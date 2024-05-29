import data from '../sql3-data.js';

const getUser = async (req, res) => {
    const id = parseInt(req.url.split('/')[1]);
    const user = await data.getUserById(id);
    if (user) {
        res.status(200).json(user);
    } else {
        res.status(404).json({onmessage: 'user not found'});
    }
}

export default getUser;