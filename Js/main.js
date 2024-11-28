document.getElementById("todo-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const todoInput = document.getElementById("todo-input");
    const newTask = todoInput.value;

    const todoList = document.getElementById("todo-list");
    const listItem = document.createElement("li");
    listItem.className = "list-group-item";
    listItem.textContent = newTask;

    const completeButton = document.createElement("button");
    completeButton.className = "btn btn-success btn-sm float-end";
    completeButton.textContent = "Completar";
    listItem.appendChild(completeButton);

    const rehacerButton = document.createElement("button");
    rehacerButton.className = "btn btn-success btn-sm float-end";
    rehacerButton.textContent = "Rehacer";
    rehacerButton.style.display = "none";
    listItem.appendChild(rehacerButton);

    const borrarButton = document.createElement("button");
    borrarButton.className = "btn btn-danger btn-sm float-end delete"; 
    borrarButton.textContent = "Eliminar";
    listItem.appendChild(borrarButton);

    todoList.appendChild(listItem);

    todoInput.value = "";


    completeButton.addEventListener("click", () => {
        listItem.classList.add("completed"); 
        completeButton.disabled = true; 
        completeButton.style.display = "none"; 
        rehacerButton.style.display = "inline"; 


        if (Notification.permission === "granted") {
            navigator.serviceWorker.ready.then(function (registration) {
                registration.showNotification("Tarea completada", {
                    body: `Has completado la tarea: ${newTask}`,
                    icon: "icon.png",
                    vibrate: [200, 100, 200],
                    actions: [
                        { action: "explore", title: "Explorar" },
                        { action: "close", title: "Cerrar" },
                    ],
                });
            });
        }
    });

    // Agregar evento para rehacer la tarea
    rehacerButton.addEventListener("click", () => {
        listItem.classList.remove("completed"); 
        completeButton.disabled = false;
        completeButton.style.display = "inline"; 
        rehacerButton.style.display = "none";
    });

    borrarButton.addEventListener("click", () => {
        todoList.removeChild(listItem); 
    });
});

function compartirLista() {
    const contenidoCompartir = {
      title: 'Mi lista de tareas',
      text: 'Aquí está mi lista de tareas que quiero compartir contigo.',
      url: 'https://www.projoodle.com/8246738f26c448b786396d10f659b2a7/8d38fcc2e63b47c5ba1f87e050d10844', // Puede ser la URL de la lista
    };
  
    if (navigator.share) {
      navigator.share(contenidoCompartir)
        .then(() => console.log('Contenido compartido exitosamente'))
        .catch((error) => console.error('Error al compartir:', error));
    } else {
      alert('La funcionalidad de compartir no está disponible en tu navegador.');
    }
  }