document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section');
    let currentSectionIndex = 0;

    // Mapeamento de classes de categorias para nomes legíveis
    const categoryNames = {
        'devFrontEnd': 'Desenvolvedor Front-End',
        'devBackEnd': 'Desenvolvedor Back-End',
        'devFullStack': 'Desenvolvedor Full Stack',
        'gameDev': 'Desenvolvedor de Jogos',
        'gameDesigner': 'Designer de Jogos',
        'dataScientist': 'Cientista de Dados',
        'dataEngineer': 'Engenheiro de Dados',
        'mobileDev': 'Desenvolvedor Mobile',
        'uxuiDesign': 'Design UX/UI',
        'infoSecurity': 'Segurança da Informação',
        'devOps': 'DevOps',
        'aiMl': 'Inteligência Artificial / Machine Learning'
    };

    // Função para mostrar a seção atual
    function showSection(index) {
        sections.forEach((section, i) => {
            section.style.display = i === index ? 'block' : 'none';
        });
    }

    // Função para verificar se o nome é válido
    function nameIsValid() {
        if (sections[currentSectionIndex].id === 'section-dados-pessoais') {
            const nameInput = document.getElementById('nome');
            return nameInput.value.trim() !== '';
        }
        return true;
    }

    // Função para verificar se as opções de seleção são válidas
    function isValidSelection() {
        if (sections[currentSectionIndex].id !== 'section-dados-pessoais') {
            const selectInputs = sections[currentSectionIndex].querySelectorAll('select');
            return Array.from(selectInputs).every(selectInput => selectInput.value !== '');
        }
        return true;
    }

    // Função para obter a pontuação de uma categoria específica
    function calculateCategoryScore(categoryClass) {
        const selectInputs = document.querySelectorAll(`.${categoryClass}`);
        let totalScore = 0;
        let count = 0;

        selectInputs.forEach(selectInput => {
            if (selectInput.value) {
                totalScore += parseInt(selectInput.value, 10);
                count++;
            }
        });

        if (count > 0) {
            const averageScore = totalScore / count;
            const percentage = Math.round(averageScore);
            return percentage;
        }

        return 0;
    }

    // Função para passar para a próxima seção
    function nextSection(nextSectionId) {
        if (!nameIsValid()) {
            alert('Por favor, preencha seu nome.');
            return;
        }

        if (!isValidSelection()) {
            alert('Por favor, escolha uma opção válida.');
            return;
        }

        if (nextSectionId === 'section-importante') {
            const nameInput = document.getElementById('nome').value;
            const importanteTexto = document.getElementById('importante-texto');
            importanteTexto.textContent = `Atenção, ${nameInput}, é importante que você reserve um tempo, serão cerca de 36 perguntas nesse questionário. Boa sorte!`;
        }

        const nextSectionIndex = Array.from(sections).findIndex(section => section.id === nextSectionId);
        if (nextSectionIndex !== -1) {
            currentSectionIndex = nextSectionIndex;
            showSection(currentSectionIndex);

            if (nextSectionId === 'section-resultados') {
                showResults();
            }
        }
    }

    // Função para mostrar os resultados
    function showResults() {
        const categories = [
            'devFrontEnd',
            'devBackEnd',
            'devFullStack',
            'gameDev',
            'gameDesigner',
            'dataScientist',
            'dataEngineer',
            'mobileDev',
            'uxuiDesign',
            'infoSecurity',
            'devOps',
            'aiMl'
        ];
    
        const resultadosContainer = document.getElementById('resultados-container');
        let results = [];
    
        categories.forEach(category => {
            const percentage = calculateCategoryScore(category);
            results.push({ name: categoryNames[category], percentage });
        });
    
        results.sort((a, b) => b.percentage - a.percentage);
    
        // Gerar HTML para resultados
        let resultsHtml = '';
        let maxPercentage = results[0]?.percentage || 0; 
    
        results.forEach(result => {
            resultsHtml += `<p class="${result.percentage === maxPercentage ? 'best-career' : ''}">
                <strong>${result.name}:</strong> ${result.percentage}%
            </p>`;
        });
    
        resultadosContainer.innerHTML = resultsHtml;
    
        
        document.getElementById('section-resultados').style.display = 'block';
        sections.forEach(section => {
            if (section.id !== 'section-resultados') {
                section.style.display = 'none';
            }
        });
    }

    

    showSection(currentSectionIndex);
    window.nextSection = nextSection;
});



