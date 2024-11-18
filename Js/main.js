if('serviceWorker' in navigator){
    navigator.serviceWorker.register('sw.js')
    .then(reg => console.log('Service Worker registrado:',reg))
    .catch(err => console.error('Error al registrar el Service Worker:',err));
}

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('Js/firebase-messaging-sw.js')
    .then((registration) => {
        console.log('Service Worker registrado con éxito:', registration);
    })
    .catch((error) => {
        console.error('Error al registrar el Service Worker:', error);
    });
}

document.getElementById('notificar').addEventListener('click', () => {
    if (Notification.permission === 'granted') {
        navigator.serviceWorker.ready.then(function(registration) {
            registration.showNotification('Hola desde tu PWA', {
                body: 'Hola',
                icon: 'icon.png',
                vibrate: [200, 100, 200],
                actions: [
                    { action: 'explore', title: 'explorar' },
                    { action: 'close', title: 'cerrar' }
                ]
            });
        });
    } else {
        alert('Debes conceder permiso para enviar notificaciones');
    }
});

//Todo esto es lo mismo
/*
api captura de pantalla envia el jpg o png a la persona que quieras con su asunto correspondiente via email.
Habilitar la funcionalidad de compartir contenido para que los usuarios
puedan compartir sus listas de tareas con otros a través de diferentes
canales, como correo electrónico, mensajes de texto o redes sociales.
*/