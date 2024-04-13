(function () {
    const openButtons = document.querySelectorAll('.open-button');
    const closeButtons = document.querySelectorAll('.close-button');

    openButtons.forEach((button) => {
        button.addEventListener('click', () => {
            const windowBackground = button.nextElementSibling;
            windowBackground.style.display = 'flex';
        });
    });

    function cerrarVentana(event) {
        const windowContainer = event.target.parentElement;
        const windowBackground = windowContainer.parentElement;
        windowContainer.classList.add('close');
        setTimeout(() => {
            windowContainer.classList.remove('close');
            windowBackground.style.display = 'none'
        }, 1000);
    }

    closeButtons.forEach((button) => {
        button.addEventListener('click', cerrarVentana);
    })

})();
