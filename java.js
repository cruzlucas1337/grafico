// Dados iniciais
let labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May'];
let data = [10, 20, 30, 40, 50];

// Configuração do gráfico
const ctx = document.getElementById('meuGrafico').getContext('2d');
const grafico = new Chart(ctx, {
    type: 'line', // Tipo de gráfico
    data: {
        labels: labels, // Eixo X
        datasets: [{
            label: 'Vendas',
            data: data, // Dados do gráfico
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 2,
            fill: false,
        }]
    },
    options: {
        responsive: true,
        scales: {
            x: { beginAtZero: true },
            y: { beginAtZero: true }
        }
    }
});

// Função para atualizar os dados do gráfico dinamicamente
function atualizarGrafico() {
    // Gerar novos dados aleatórios para o gráfico
    labels.push(`Mês ${labels.length + 1}`); // Adiciona o próximo mês
    data.push(Math.floor(Math.random() * 100)); // Gera um valor aleatório para as vendas

    // Limita o número de meses a 6
    if (labels.length > 6) {
        labels.shift(); // Remove o primeiro mês
        data.shift(); // Remove o primeiro dado
    }

    // Atualiza o gráfico com os novos dados
    grafico.data.labels = labels;
    grafico.data.datasets[0].data = data;
    grafico.update();
}

// Atualiza o gráfico a cada 2 segundos
setInterval(atualizarGrafico, 2000);
