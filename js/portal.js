var rotacaoAtual = 0; // Variável para rastrear o estado atual da rotação

function girarPoligono() {
    var poligono = document.getElementById('poligono');
    
    // Inverte a rotação com base no estado atual
    rotacaoAtual = 1 - rotacaoAtual;
    
    // Aplica a rotação correspondente
    poligono.style.transform = 'rotate(' + (rotacaoAtual * 180) + 'deg)';
}

function toggleDropdown() {
    var dropdownContent = document.getElementById("dropdown-content");
    dropdownContent.style.display = (dropdownContent.style.display === "none") ? "block" : "none";
}

function atualizarDados() {
    alert("Opção: Atualizar Dados Pessoais");
    // Adicione aqui a lógica para atualizar dados pessoais
}

function alterarSenha() {
    alert("Opção: Alterar Senha");
    // Adicione aqui a lógica para alterar a senha
}

function posGraduacao() {
    alert("Opção: Pós-Graduação");
    // Adicione aqui a lógica para a opção de Pós-Graduação
}