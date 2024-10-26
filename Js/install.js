let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();

    deferredPrompt = e;

    let botonInstalar = document.getElementById('install');
    botonInstalar.hidden = false;

    botonInstalar.addEventListener('click', () => {
        botonInstalar.hidden = true;
        deferredPrompt.prompt();

        deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
                console.log('El usuario aceptó la instalación');
            } else {
                console.log('El usuario rechazó la instalación');
            }
            deferredPrompt = null;
        });
    });
});

window.addEventListener('appinstalled', () => {
    console.log('La aplicación fue instalada.');
});