let taskInput = document.getElementById('taskInput');
let taskList = document.getElementById('taskList');

function addTask() {
    let taskText = taskInput.value.trim();
    if (taskText !== '') {
        let li = document.createElement('li');
        li.textContent = taskText;
        
        let deleteButton = document.createElement('span');
        deleteButton.textContent = '❌';
        deleteButton.classList.add('delete');
        deleteButton.onclick = function() {
            taskList.removeChild(li);
        };
        
        li.appendChild(deleteButton);
        taskList.appendChild(li);
        
        taskInput.value = '';
    }
}
