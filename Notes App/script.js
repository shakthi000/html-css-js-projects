// Get DOM elements
const noteInput = document.getElementById('noteInput');
const addNoteBtn = document.getElementById('addNote');
const noteList = document.getElementById('noteList');

// Add a new note to the list
function addNote() {
    const text = noteInput.value.trim();

    if (text === '') {
        return;
    }

    // Create a new list item
    const listItem = document.createElement('li');
    listItem.innerHTML = `
        <span>${text}</span>
        <span class="delete">Delete</span>
    `;

    // Append the new item to the list
    noteList.appendChild(listItem);

    // Add event listener to delete button
    const deleteBtn = listItem.querySelector('.delete');
    deleteBtn.addEventListener('click', () => {
        noteList.removeChild(listItem);
    });

    // Clear the input field
    noteInput.value = '';
}

// Add a note when the "Add" button is clicked
addNoteBtn.addEventListener('click', addNote);

// Add a note when the Enter key is pressed
noteInput.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        addNote();
    }
});
