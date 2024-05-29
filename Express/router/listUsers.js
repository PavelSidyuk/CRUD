import data from '../sql3-data.js';
const getUsers = async (req, res) => {
    res.json( await data.getUsers());
}
export default getUsers;