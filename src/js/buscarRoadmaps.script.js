// buscarRoadmaps.script.js

document.getElementById('searchButton').addEventListener('click', function() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const resultsContainer = document.getElementById('results');

    // Dados fictícios para simulação (atualize com informações reais)
    const roadmaps = [
        // Back-end
        { title: 'Desenvolvedor Backend Java', file: 'roadmaps/backEnd/backEndJava.roadmap.html' },
        { title: 'Desenvolvedor Backend Node.js', file: 'roadmaps/backEnd/backEndNodeJS.roadmap.html' },
        { title: 'Desenvolvedor Backend Php', file: 'roadmaps/backEnd/backEndPhp.roadmap.html' },
        { title: 'Desenvolvedor Backend C#', file: 'roadmaps/backEnd/backEndCSharp.roadmap.html' },
        { title: 'Desenvolvedor Backend Python', file: 'roadmaps/backEnd/backEndPython.roadmap.html' },
        { title: 'Desenvolvedor Backend Ruby', file: 'roadmaps/backEnd/backEndRuby.roadmap.html' },
        // Full Stack
        { title: 'Desenvolvedor Fullstack Java', file: 'roadmaps/fullStack/fullStackJava.roadmap.html' },
        { title: 'Desenvolvedor Fullstack Node.js', file: 'roadmaps/fullStack/fullStackNodeJS.roadmap.html' },
        { title: 'Desenvolvedor Fullstack Php', file: 'roadmaps/fullStack/fullStackPhp.roadmap.html' },
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
});