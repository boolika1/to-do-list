//Getting DOM elements
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');
const deleteAllBtn = document.getElementById('deleteAllBtn');


// Hide delete all button initially
deleteAllBtn.style.display = 'none';


// Add task function
function addTask() {
  const taskValue = taskInput.value.trim();
  if (taskValue === '') return;

  // Create li
  const taskElement = document.createElement('li');

  // ===== Checkbox =====
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';

  // ===== Task text =====
  const taskText = document.createElement('span');
  taskText.innerText = taskValue;

  // Checkbox event (strikethrough)
  checkbox.addEventListener('change', function () {
    taskText.classList.toggle('completed');
  });

  // ===== Remove button =====
  const removeBtn = document.createElement('button');
  removeBtn.innerText = 'Remove';
  removeBtn.className = 'remove';

  removeBtn.addEventListener('click', function () {
    taskList.removeChild(taskElement);

    // hide delete all if empty
    if (taskList.children.length === 0) {
      deleteAllBtn.style.display = 'none';
    }
  });

  // ===== IMPORTANT ORDER =====
  taskElement.appendChild(checkbox);
  taskElement.appendChild(taskText);
  taskElement.appendChild(removeBtn);

  taskList.appendChild(taskElement);

  // show delete all button
  deleteAllBtn.style.display = 'block';

  // clear input
  taskInput.value = '';
}


// Delete all tasks
function deleteAllTasks() {
  if (confirm('Are you sure you want to delete all tasks?')) {
    taskList.innerHTML = '';
    deleteAllBtn.style.display = 'none';
  }
}


// Events
addTaskBtn.addEventListener('click', addTask);

taskInput.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    addTask();
  }
});

deleteAllBtn.addEventListener('click', deleteAllTasks)
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