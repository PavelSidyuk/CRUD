import {Router} from "express";
import createUser from './createUser.js'
import getUsers from "./listUsers.js";
import getUser from "./getUser.js";
import updateUser from "./updateUser.js";
import deleteUser from "./deleteUser.js";

const router = new Router();

router.post('', createUser);
router.get('', getUsers);
router.get('/:id', getUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser)

export default router;