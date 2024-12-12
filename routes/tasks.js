import express from 'express';
// Assuming Sequelize ORM is used
import Task from '../models/task.js'; // Replace with the correct Sequelize model
import sequelize from '../config/dbconn.js'; // Replace with the correct Sequelize config

const router = express.Router();

// Ensure the database connection is authenticated
(async () => {
    try {
        await sequelize.authenticate();
        console.log('Database connected successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error.message);
    }
})();

/**
 * Retrieves all tasks from the database.
 * @route GET /
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @returns {Object} JSON response with all tasks or error message.
 */
router.get('/', async (req, res) => {
    try {
        const tasks = await Task.findAll(); // Sequelize's findAll method
        res.status(200).json(tasks);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: 'Server error' });
    }
});

/**
 * Renders tasks in an HTML view (if using templates).
 * @route GET /render
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 */
router.get('/render', async (req, res) => {
    try {
        const tasks = await Task.findAll();
        res.render('index', { tasks }); // Rendering with template engine
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

/**
 * Creates a new task in the database.
 * @route POST /tasks
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 */
router.post('/tasks', async (req, res) => {
    try {
        const task = await Task.create(req.body); // Sequelize's create method
        res.status(201).json(task);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

export default router;