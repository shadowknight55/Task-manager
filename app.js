//importing from libraries
import express from 'express';

import path from 'path';

import taskRoutes from './routes/tasks.js';
//declares the express function as app
const app = express();

//tells the app to read it in ejs
app.set('view engine', 'ejs');

//tells the app which file to read
app.set('views', './views');

//tells the app to use express.json
app.use(express.json());

//tells the app to use the static folder
app.use('/', taskRoutes);

//consoles the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`server is running on port http://localhost:${PORT}`);
});
