document.getElementById('start-button').addEventListener('click', function () {
    const welcomeScreen = document.getElementById('welcome-screen');
    welcomeScreen.classList.add('fade-out'); // Desvanece la pantalla de inicio

    document.querySelector('.subtitle').classList.add('subtitle-fade'); // Anima el subtítulo
    document.querySelector('h1').classList.add('title-stay'); // Deja el título animado
    this.classList.add('button-fade'); // Desvanece el botón

    setTimeout(() => {
        welcomeScreen.classList.add('hidden'); // Oculta la pantalla de inicio
        document.getElementById('main-content').classList.remove('hidden'); // Muestra el contenido principal
    }, 1000); // Duración de la animación
});