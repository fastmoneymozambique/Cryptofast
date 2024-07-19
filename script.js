// Função para gerar um ID de usuário aleatório
function generateUserId() {
    return Math.floor(Math.random() * 90000) + 10000; // Gera um número aleatório entre 10000 e 99999
}

// Função para obter o ID de usuário da localStorage ou gerar um novo
function getUserId() {
    let userId = localStorage.getItem('user-id');
    if (!userId) {
        userId = generateUserId();
        localStorage.setItem('user-id', userId);
    }
    return userId;
}

// Função para atualizar o texto do ID de usuário na página
function updateUserId() {
    const userIdElement = document.getElementById('user-id');
    userIdElement.textContent = getUserId();
}

// Evento de clique no botão de fazer depósito
document.getElementById('btn-depositar').addEventListener('click', () => {
    window.location.href = 'depositar.html'; // Redireciona para depositar.html ao clicar
});

// Evento de clique no botão de sacar
document.getElementById('btn-sacar').addEventListener('click', () => {
    const saldoAtual = document.getElementById('saldo').textContent;
    if (saldoAtual === '0.00MT') {
        alert('Erro: Verifique seu saldo antes de sacar.');
    } else {
        // Lógica para realizar o saque
        alert('Saque realizado com sucesso!');
        // Atualiza o saldo na interface
        document.getElementById('saldo').textContent = '0.00MT';
    }
});

// Evento de clique no botão de ver planos de investimentos
document.getElementById('btn-ver-planos').addEventListener('click', () => {
    window.location.href = 'planos.html'; // Redireciona para planos.html ao clicar
});

// Ao carregar a página, atualiza o ID de usuário
document.addEventListener('DOMContentLoaded', () => {
    updateUserId();

    // Define os saldos iniciais como 0.00MT
    document.getElementById('saldo').textContent = '0.00MT';
    document.getElementById('lucro').textContent = '0.00MT';
    document.getElementById('investido').textContent = '0.00MT';
    document.getElementById('depositado').textContent = '0.00MT';

    // Função para gerar números aleatórios com nomes moçambicanos fictícios
    setInterval(() => {
        const nomesMoçambicanos = [
            'Adélio Mutemba',
            'Zeca Mucavel',
            'António Malveiro',
            'Celestino Sangue',
            'Filomena Xanana',
            'Narciso Machele',
            'Joana Maciel',
            'Gonzalo Matusse'
        ];

        const valorAleatorio = Math.floor(Math.random() * 50000) + 1000; // Valor aleatório entre 1000 e 50000
        const nomeAleatorio = nomesMoçambicanos[Math.floor(Math.random() * nomesMoçambicanos.length)];

        const animationElement = document.createElement('div');
        animationElement.classList.add('animation');
        animationElement.textContent = `${nomeAleatorio} ${valorAleatorio}MT`;

        document.getElementById('animations').appendChild(animationElement);

        // Remove o elemento após 3 segundos
        setTimeout(() => {
            animationElement.remove();
        }, 3000);

    }, 5000); // Gera a cada 5 segundos
});
