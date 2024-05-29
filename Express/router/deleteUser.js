import data from '../sql3-data.js';
const deleteUser = async (req, res) => {
    const id = parseInt(req.url.split('/')[1]);
    let success = await data.deleteUser(id);
    if (success) {
        res.status(204).json();
    } else {
        res.status(404).json({onmessage: 'user not found'});
    }
}

export default deleteUser;