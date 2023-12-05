
  document.addEventListener('DOMContentLoaded', (event) => {
    // Existing code for drag-and-drop
  
    // Function to create a new task
    function createNewTask() {
      const newTaskContainer = document.createElement('div');
      newTaskContainer.className = 'task';
      newTaskContainer.draggable = true;
  
      // Customize the content of the new task as needed
      newTaskContainer.innerHTML = `
        <div class='task__tags'>
          <span class='task__tag task__tag--new'>New</span>
          <button class='task__options'><i class="fas fa-ellipsis-h"></i></button>
        </div>
        <p>New Task Content</p>
        <div class='task__stats'>
          <span><time datetime="${new Date().toISOString()}"><i class="fas fa-flag"></i>Now</time></span>
          <span><i class="fas fa-comment"></i>0</span>
          <span><i class="fas fa-paperclip"></i>0</span>
          <span class='task__owner'></span>
        </div>
      `;
  
      // Add drag-and-drop event listeners to the new task
      newTaskContainer.addEventListener('dragstart', handleDragStart, false);
      newTaskContainer.addEventListener('dragenter', handleDragEnter, false);
      newTaskContainer.addEventListener('dragover', handleDragOver, false);
      newTaskContainer.addEventListener('dragleave', handleDragLeave, false);
      newTaskContainer.addEventListener('drop', handleDrop, false);
      newTaskContainer.addEventListener('dragend', handleDragEnd, false);
  
      // Append the new task to the appropriate column or container
      const taskColumn = document.querySelector('.project-column'); // Adjust this selector as needed
      taskColumn.appendChild(newTaskContainer);
    }
  
    // Example: Trigger the creation of a new task on button click
    const addTaskButton = document.querySelector('#task'); // Make sure to have a button with this ID
    addTaskButton.addEventListener('click', createNewTask);
  });
  