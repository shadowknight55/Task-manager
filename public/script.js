/** Implement frontend functionality
 * Design the dashboard (homepage) that loads all the task when the site loads
 * implement the functionality that allows users to add a task, update a task and delete task
 *  
 * **/

const display = async () => {
    try {
        const response = await fetch('/tasks');
        const tasks = await response.json();

        const taskList = document.getElementById('task-list');
        taskList.innerHTML = '';

        tasks.forEach(task => {
            const li = document.createElement('li');
            li.textContent = task.title;
            taskList.appendChild(li);
        });
    } catch (error) {
        console.error('Error fetching tasks:', error);
    }
};
displayTask();