(function () {
    const skills = document.querySelector('.skills');

    console.log("Progrmador:\n %cElianLvX", "color:#00ff00; font-size: 2rem; font-weight: bold");

    if ( skills ) {
        const main = document.querySelector('.bg-main');

        if (window.innerWidth < 767) {
            main.style.setProperty('height', '100%', 'important');
        }
    }

    // Local Storage para transicion de primera visita a mi portafolio
    window.onload = function() {
        // Comprueba si la animación ya se ha ejecutado
        if (!localStorage.getItem('animationPlayed')) {
            // Si no se ha ejecutado, añade la clase 'fade-in' al body
            document.body.classList.add('fade-in');
    
            // Guarda un indicador en localStorage para saber que la animación ya se ha ejecutado
            localStorage.setItem('animationPlayed', true);
        }
    }
})();
