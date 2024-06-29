const addTask = document.getElementById('addTask');
const addTaskBtn = document.getElementById('addTaskBtn');
const todotasks = document.getElementById('tasks');

let taskList = [];

addTaskBtn.addEventListener('click', add)

function add(){
    const task = addTask.value.trim();
    if (task !== " " ){
        taskList.push({text: task, done: false});
        addTask.value = " ";
        renderTasks();
    }
}

function renderTasks(){
    todotasks.innerHTML = '';
    taskList.forEach((task, index) => {
        const taskElement = document.createElement('li');
        taskElement.textContent = task.text;
        taskElement.dataset.index = index;
        if (task.done) {
            taskElement.style.textDecoration = 'line-through';
        }
        todotasks.appendChild(taskElement);
    });
}

// Add event listeners to the task list items
todotasks.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        const index = e.target.dataset.index;
        taskList[index].done = !taskList[index].done;
        renderTasks();
    }
});

// Add event listeners to delete tasks
todotasks.addEventListener('contextmenu', (e) => {
    if (e.target.tagName === 'LI') {
        const index = e.target.dataset.index;
        taskList.splice(index, 1);
        renderTasks();
    }
});