// DOM Elements
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');
const deleteAllBtn = document.getElementById('deleteAllBtn');

let tasks = [];

// Hide Delete All button
deleteAllBtn.style.display = 'none';

// Load tasks from localStorage
const savedTasks = localStorage.getItem('tasks');
if (savedTasks) {
    tasks = JSON.parse(savedTasks);

    tasks.forEach(task => {
        addTaskToDOM(task);
    });

    deleteAllBtn.style.display = 'block';
}

// Add task to DOM
function addTaskToDOM(taskValue) {
    const li = document.createElement('li');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    const span = document.createElement('span');
    span.innerText = taskValue;

const audio = new Audio("./صلي علي محمد.mp3"); 
setInterval(function () {
    audio.currentTime = 0;
    audio.play();
    }, 100_000); 
   // 🎵 تشغيل الأغنية عند التشييك
    const song = new Audio("./انتهاء التاسك.mp3");
    checkbox.addEventListener('change', function () {
        span.classList.toggle('completed');
        if (checkbox.checked) {
            song.currentTime = 0;
            song.play();
        } else {
            song.pause();
            song.currentTime = 0;
        }
    });

    li.appendChild(checkbox);
    li.appendChild(span);
    taskList.appendChild(li);
}

// Add new task
function addTask() {
    const value = taskInput.value.trim();
    if (value === '') return;

    tasks.push(value);
    localStorage.setItem('tasks', JSON.stringify(tasks));

    addTaskToDOM(value);

    deleteAllBtn.style.display = 'block';
    taskInput.value = '';
}

// Delete all tasks
function deleteAllTasks() {
    if (confirm('Are you sure you want to delete all tasks?')) {
        taskList.innerHTML = '';
        tasks = [];

        localStorage.removeItem('tasks');
        deleteAllBtn.style.display = 'none';
    }
}

// Events
addTaskBtn.addEventListener('click', addTask);

taskInput.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        addTask();
    }
});

deleteAllBtn.addEventListener('click', deleteAllTasks);