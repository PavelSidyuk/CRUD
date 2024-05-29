import express from 'express';
import router from './router/userRouter.js'
const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/users', router);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));