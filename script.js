javascript
Copiar código
const data = [
    {
        question: "O que significa LGBT?",
        answer: "LGBT é uma sigla que representa Lésbicas, Gays, Bissexuais e Transgêneros."
    },
    {
        question: "O que é identidade de gênero?",
        answer: "Identidade de gênero refere-se à percepção individual de si como masculino, feminino, uma combinação de ambos ou nenhum."
    },
    {
        question: "O que é orientação sexual?",
        answer: "Orientação sexual é sobre quem você sente atração emocional, romântica ou sexual."
    },
    // Adicione mais perguntas e respostas aqui
];

function search() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';
    
    const results = data.filter(item => item.question.toLowerCase().includes(input) || item.answer.toLowerCase().includes(input));
    
    if (results.length > 0) {
        results.forEach(item => {
            const resultItem = document.createElement('div');
            resultItem.innerHTML = `<h3>${item.question}</h3><p>${item.answer}</p>`;
            resultsDiv.appendChild(resultItem);
        });
    } else {
        resultsDiv.innerHTML = '<p>Nenhuma resposta encontrada.</p>';
    }
}
