// Import express from express library
import express from 'express';
// Importing the functions I made
import Task from '../models/task.js';
import sequelize from '../config/dbconn.js';
// Declare router as the express router function
const router = express.Router();
//Get all tasks
router.get('/', async (req, res) => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        //Declare 'tasks' as all of the tasks in task.js or "Task"
        const tasks = await Task.findAll();
        res.render('index', { tasks }); //respond with that
    }
    //If an error is caught then console the error
    catch (error){
        res.status(500).json({message: text});
    }
});
router.post('/tasks', async (req, res) => {
    try {
        const task = await Task.create(req.body);
        res.status(201).json(task);
    }
    catch(error){
        res.status(400).json({ error: error.message});
    }
});
export default router;