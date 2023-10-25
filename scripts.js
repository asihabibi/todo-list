function addTask() {
    const taskInput = document.getElementById('newTask');
    const taskValue = taskInput.value.trim();

    if (taskValue) {
        const taskList = document.getElementById('todoList');
        const listItem = document.createElement('li');

       // Create a span for the task text
        const taskText = document.createElement('span');
        taskText.textContent = taskValue;
        taskText.onclick = function() {
            taskText.classList.toggle('completed');
        };
        listItem.appendChild(taskText);
        
        // Create a span for the delete button (cross sign)
        const deleteBtn = document.createElement('span');
        deleteBtn.textContent = ' x';  // You can replace this with an icon if you prefer
        deleteBtn.className = 'deleteBtn';
        deleteBtn.onclick = function() {
            taskList.removeChild(listItem);
        };
        listItem.appendChild(deleteBtn);

        taskList.appendChild(listItem);
        taskInput.value = '';
    }
}
function displayCurrentDate() {
    const date = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = date.toLocaleDateString(undefined, options);
    document.getElementById('currentDate').textContent = formattedDate;
}

function setupEventListeners() {
    const taskInput = document.getElementById('newTask');
    const addButton = document.querySelector('.addTask button');  // Selecting the button inside .addTask div

    // Event listener for the "Enter" key
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    // No need to add click event for addButton because it's already using the `onclick` attribute in HTML
}

// Call the function on page load to set the date
displayCurrentDate();
// Set up event listeners after the page is loaded
setupEventListeners();
