function adicionar() {
    const taskInput = document.getElementById('novatarefa');
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        const taskList = document.getElementById('tarefa');

        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Excluir';
        deleteButton.onclick = function() {
            taskList.removeChild(listItem);
        };

        listItem.appendChild(deleteButton);

        listItem.onclick = function() {
            listItem.classList.toggle('completo');
        };

        taskList.appendChild(listItem);

        taskInput.value = '';
    }
}
