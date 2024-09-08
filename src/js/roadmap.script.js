// roadmap.script.js
document.querySelectorAll('.section').forEach(section => {
    section.addEventListener('click', () => {
        // Fecha todas as seções
        document.querySelectorAll('.section').forEach(sec => {
            if (sec !== section) {
                sec.classList.remove('active');
            }
        });

        // Alterna a classe active para a seção clicada
        section.classList.toggle('active');
    });
});
