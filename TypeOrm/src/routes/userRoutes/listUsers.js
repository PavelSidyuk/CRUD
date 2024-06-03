import {getUsers} from '../../sql3-data';

export default async (req, res) => {
    res.writeHead(200);
    res.end(JSON.stringify(await getUsers()));
}