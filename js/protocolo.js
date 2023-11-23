var rotacaoAtual = 0; // Variável para rastrear o estado atual da rotação

function userlogo() {
    var poligono = document.getElementById('poligono');
    
    // Inverte a rotação com base no estado atual
    rotacaoAtual = 1 - rotacaoAtual;
    
    // Aplica a rotação correspondente
    poligono.style.transform = 'rotate(' + (rotacaoAtual * 180) + 'deg)';

    var dropdownContent = document.getElementById("dropdown-content");
    if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
    } else {
        dropdownContent.style.display = "block";
    }
}

function userlogo2() {
    var dropdownContent = document.getElementById("dropdown-content2");
    if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
    } else {
        dropdownContent.style.display = "block";
    }
}

function reset() {
    var dropdownContent = document.getElementById("dropdown-content2");
    dropdownContent.style.display = "none";
}

