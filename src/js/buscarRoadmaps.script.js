document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('nav');
    const main = document.querySelector('main');
    const searchButton = document.getElementById('searchButton');
    const searchInput = document.getElementById('searchInput');
    const resultsContainer = document.getElementById('results');

    resultsContainer.innerHTML = '<p>Procure pela tecnologia ou cargo que você deseja.</p>';

    // Função para exibir os resultados da pesquisa
    function showSearchResults(query) {
        // Dados fictícios para simulação (atualize com informações reais)
        const roadmaps = [
            // Back-end
            { title: 'Desenvolvedor Backend Java', file: 'roadmaps/backEnd/backEndJava.roadmap.html' },
            { title: 'Desenvolvedor Backend Node.js', file: 'roadmaps/backEnd/backEndNodeJS.roadmap.html' },
            { title: 'Desenvolvedor Backend PHP', file: 'roadmaps/backEnd/backEndPhp.roadmap.html' },
            { title: 'Desenvolvedor Backend C#', file: 'roadmaps/backEnd/backEndCSharp.roadmap.html' },
            { title: 'Desenvolvedor Backend Python', file: 'roadmaps/backEnd/backEndPython.roadmap.html' },
            { title: 'Desenvolvedor Backend Ruby', file: 'roadmaps/backEnd/backEndRuby.roadmap.html' },
            // Full Stack
            { title: 'Desenvolvedor Fullstack Java', file: 'roadmaps/fullStack/fullStackJava.roadmap.html' },
            { title: 'Desenvolvedor Fullstack Node.js', file: 'roadmaps/fullStack/fullStackNodeJS.roadmap.html' },
            { title: 'Desenvolvedor Fullstack PHP', file: 'roadmaps/fullStack/fullStackPhp.roadmap.html' },
            { title: 'Desenvolvedor Fullstack C#', file: 'roadmaps/fullStack/fullStackCSharp.roadmap.html' },
            { title: 'Desenvolvedor Fullstack Python', file: 'roadmaps/fullStack/fullStackPython.roadmap.html' },
            { title: 'Desenvolvedor Fullstack Ruby', file: 'roadmaps/fullStack/fullStackRuby.roadmap.html' },
            // Front-end
            { title: 'Desenvolvedor Frontend', file: 'roadmaps/frontEnd/frontend.roadmap.html' },
            // Desenvolvimento de Games
            { title: 'Game Developer', file: 'roadmaps/gameDev/gameDeveloper.roadmap.html' },
            { title: 'Game Designer', file: 'roadmaps/gameDev/gameDesigner.roadmap.html' },
            // Ciencia de Dados
            { title: 'Cientista de Dados', file: 'roadmaps/dataScience/dataScientist.roadmap.html' },
            { title: 'Analista de Dados', file: 'roadmaps/dataScience/dataAnalyst.roadmap.html' },
            // Engenharia de Dados
            { title: 'Engenheiro de Dados', file: 'roadmaps/dataScience/dataEngineer.roadmap.html' },
            // Desenvolvimento Mobile
            { title: 'Desenvolvedor Mobile IOS', file: 'roadmaps/mobileDev/mobileDevIos.roadmap.html' },
            { title: 'Desenvolvedor Mobile Android', file: 'roadmaps/mobileDev/mobileDevAndroid.roadmap.html' },
            { title: 'Desenvolvedor Mobile Hibrido', file: 'roadmaps/mobileDev/mobileDevHybrid.roadmap.html' },
            // Ux/UI
            { title: 'Ux Designer', file: 'roadmaps/uxUi/uxDesigner.roadmap.html' },
            { title: 'Ui Designer', file: 'roadmaps/uxUi/uiDesigner.roadmap.html' },
            // Segurança da Informação
            { title: 'Segurança da Informação', file: 'roadmaps/security/securityAnalyst.roadmap.html' },
            { title: 'Cibersegurança', file: 'roadmaps/security/penetrationTester.roadmap.html' },
            // DevOps e Infraestrutura
            { title: 'DevOps', file: 'roadmaps/devOps/devOps.roadmap.html' },
            { title: 'Administrador de Sistemas', file: 'roadmaps/devOps/sysAdmin.roadmap.html' },
            { title: 'Engenheiro de Rede', file: 'roadmaps/devOps/networkEngineer.roadmap.html' },
            // Inteligencia Artificial e Machine Learning
            { title: 'Engerenheiro de Inteligência Artificial/Machine Learning', file: 'roadmaps/aiMl/aiMlEngineer.roadmap.html' },
        ];

        // Limpa os resultados anteriores
        resultsContainer.innerHTML = '';

        // Filtra os resultados com base na pesquisa
        const filteredResults = roadmaps.filter(roadmap => roadmap.title.toLowerCase().includes(query));

        // Exibe os resultados
        if (filteredResults.length > 0) {
            filteredResults.forEach(roadmap => {
                const resultItem = document.createElement('div');
                resultItem.classList.add('result-item');

                // Cria um link para o roadmap
                resultItem.innerHTML = `<h3><a href="${roadmap.file}" target="_blank">${roadmap.title}</a></h3>`;

                resultsContainer.appendChild(resultItem);
            });
        } else {
            resultsContainer.innerHTML = '<p>Nenhum roadmap encontrado.</p>';
        }
    }

    // Adiciona um ouvinte de evento para o botão de pesquisa
    searchButton.addEventListener('click', () => {
        const query = searchInput.value.toLowerCase();
        if (query === '') {
            resultsContainer.innerHTML = '<p>Por favor, digite alguma palavra-chave para pesquisar.</p>';
            return;
        }
        showSearchResults(query);
    });

    // Adiciona um ouvinte de evento para o botão hamburger
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        nav.classList.toggle('active');
        main.classList.toggle('nav-active');
    });
});
