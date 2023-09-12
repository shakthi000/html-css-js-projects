// Wait for the DOM to be fully loaded before executing JavaScript

document.addEventListener("DOMContentLoaded", function () {

    const taskInput = document.getElementById("taskInput");
    const addTaskButton = document.getElementById("addTaskButton");
    const taskList = document.getElementById("taskList");

    // Add an event listener to the "Add" button
    addTaskButton.addEventListener("click", function () {
        const taskText = taskInput.value.trim();

        if (taskText !== "") {
            // Create a new list item (task)
            const li = document.createElement("li");
            li.textContent = taskText;
            
            // Append the task to the task list
            taskList.appendChild(li);

            // Add a click event listener to mark the task as completed
            li.addEventListener("click", function () {
                li.classList.toggle("completed");
            });

            // Clear the input field
            taskInput.value = "";
        }
    });

    // Add an event listener to the input field to allow Enter key submission
    taskInput.addEventListener("keyup", function (event) {
        if (event.key === "Enter") {
            // Trigger a click event on the "Add" button
            addTaskButton.click();
        }
    });
});
