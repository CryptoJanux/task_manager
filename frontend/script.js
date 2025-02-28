// API Base URL (Django Backend URL)
const apiUrl = 'http://localhost:8000/api/tasks/';

// Fetch Tasks from Backend
function fetchTasks() {
    fetch(apiUrl)
        .then(response => response.json())
        .then(tasks => {
            const taskList = document.getElementById('taskList');
            taskList.innerHTML = ''; // Clear previous tasks
            tasks.forEach(task => {
                const taskItem = document.createElement('div');
                taskItem.classList.add('task-item');
                taskItem.innerHTML = `
                    <h3>${task.title}</h3>
                    <p>${task.description}</p>
                    <p><strong>Completed:</strong> ${task.completed ? 'Yes' : 'No'}</p>
                `;
                taskList.appendChild(taskItem);
            });
        })
        .catch(error => console.log('Error fetching tasks:', error));
}

// Add a New Task (POST Request)
function addTask() {
    const title = document.getElementById('taskTitle').value;
    const description = document.getElementById('taskDescription').value;

    if (!title) {
        alert("Please enter a task title!");
        return;
    }

    const taskData = {
        title: title,
        description: description,
        completed: false
    };

    fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(taskData)
    })
    .then(response => response.json())
    .then(newTask => {
        // After adding the task, re-fetch tasks
        fetchTasks();
    })
    .catch(error => console.log('Error adding task:', error));

    // Clear input fields
    document.getElementById('taskTitle').value = '';
    document.getElementById('taskDescription').value = '';
}

// Initial Fetch of Tasks
fetchTasks();
