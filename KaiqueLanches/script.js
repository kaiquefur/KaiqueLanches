// script.js

// Variáveis para total de compra
let total = 0;

// Função para atualizar o total
function updateTotal(value) {
    total += value;
    document.getElementById('total-price').innerText = `Total: R$ ${total.toFixed(2)}`;
}

// Evento para os botões de compra
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', (event) => {
        const priceText = event.target.previousElementSibling.innerText; // Obtém o preço do produto
        const price = parseFloat(priceText.replace('R$', '').replace(',', '.').trim());
        updateTotal(price); // Atualiza o total
    });
});

// Evento para o formulário de cadastro
document.getElementById('signup-form').addEventListener('submit', (event) => {
    event.preventDefault(); // Previne o envio padrão do formulário
    alert('Cadastro realizado com sucesso!');
    // Aqui você pode adicionar lógica para redirecionar ou limpar o formulário
    document.getElementById('signup-form').reset();
    total = 0; // Reseta o total após o cadastro
    updateTotal(0); // Atualiza a exibição do total
});
