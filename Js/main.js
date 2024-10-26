if('serviceWorker' in navigator){
    navigator.serviceWorker.register('sw.js')
    .then(reg => console.log('Service Worker registrado:',reg))
    .catch(err => console.error('Error al registrar el Service Worker:',err));
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