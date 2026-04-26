// Getting DOM elements
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');
    const deleteAllBtn = document.getElementById('deleteAllBtn');

    let tasks = [];
// Hide the "Delete All" button initially [Mahmoud]
    deleteAllBtn.style.display = 'none';

    //  localStorage
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
        tasks = JSON.parse(savedTasks);

        tasks.forEach(task => {
            addTaskToDOM(task);
        });

        deleteAllBtn.style.display = 'block';
    }

//  for Add task to the page
    function addTaskToDOM(taskValue) {
        const li = document.createElement('li');

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.classList.add('task-check');

        const span = document.createElement('span');
        span.innerText = taskValue;

        checkbox.addEventListener('change', function() {
            span.classList.toggle('completed');
        });

        li.appendChild(checkbox);
        li.appendChild(span);

        taskList.appendChild(li);
    }

// Function to add a new task
    function addTask() {
        const value = taskInput.value.trim();
        if (value === '') return;

        tasks.push(value);
        localStorage.setItem('tasks', JSON.stringify(tasks));

        addTaskToDOM(value);

        deleteAllBtn.style.display = 'block';
        taskInput.value = '';
    }
    // إنشاء عنصر الصوت
const completeSound = new Audio("./انتهاء التاسك.mp3");
const shay = new Audio("./sound.mp3");

setInterval(function ps(){
shay.currentTime = 0 ;
shay.play();
},60000);

document.addEventListener("change", function(e) {
    if (e.target.classList.contains("task-check")) {
        
        if (e.target.checked) {
        
            completeSound.currentTime = 0;
            completeSound.play();
        }
    }
});

 //Function to delete all tasks [Mahmoud]
    function deleteAllTasks() {
        if (confirm('Are you sure you want to delete all tasks?')) {
            taskList.innerHTML = '';
            tasks = [];

            localStorage.removeItem('tasks');
            deleteAllBtn.style.display = 'none';
        }
    }

 // Add event listeners
    addTaskBtn.addEventListener('click', addTask);

    taskInput.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') {
            addTask();
        }
    });
//Event for delete all button [Mahmooud]
    deleteAllBtn.addEventListener('click', deleteAllTasks);
