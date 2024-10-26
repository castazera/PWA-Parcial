document.addEventListener('DOMContentLoaded', () => {
    const todoForm = document.getElementById('todo-form');
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');
    
    let todos = JSON.parse(localStorage.getItem('todos')) || [];

    function guardarToDos() {
        localStorage.setItem('todos', JSON.stringify(todos));
    }

    function renderTodos() {
        todoList.innerHTML = '';
        todos.forEach((todo, index) => {
            const li = document.createElement('li');
            li.className = `list-group-item todo-item ${todo.completed ? 'completed' : ''}`;
            
            li.innerHTML = `
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" ${todo.completed ? 'checked' : ''}>
                    <span class="todo-text">${todo.text}</span>
                </div>
                <button class="btn btn-danger btn-sm delete-btn">Eliminar</button>
            `;

            const checkbox = li.querySelector('input');
            checkbox.addEventListener('change', () => VerificarToDo(index));

            const deleteBtn = li.querySelector('.delete-btn');
            deleteBtn.addEventListener('click', () => deleteTodo(index));

            todoList.appendChild(li);
        });
    }

    function addTodo(text) {
        todos.push({ text, completed: false });
        guardarToDos();
        renderTodos();
    }

    function VerificarToDo(index) {
        todos[index].completed = !todos[index].completed;
        guardarToDos();
        renderTodos();
    }

    function deleteTodo(index) {
        todos.splice(index, 1);
        guardarToDos();
        renderTodos();
    }

    todoForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const todoText = todoInput.value.trim();
        if (todoText) {
            addTodo(todoText);
            todoInput.value = '';
        }
    });

    renderTodos();
});