import express from 'express'
import { searchController, userNameController } from './controller.js';

const app = express();
const PORT = 3000;

app.get('/user/:userName', userNameController);
app.get('/search', searchController);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})