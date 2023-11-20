function mudarCor(container) {
        
  container.querySelector('img').style.filter = "brightness(0.8) contrast(1.2) saturate(2) hue-rotate(200deg)";
 
  container.querySelector('.overlay').style.opacity = 0.4;
}

function restaurarCor(container) {
  
  container.querySelector('img').style.filter = "none";
  
  container.querySelector('.overlay').style.opacity = 0;
}

function mudarCor2(container) {
      
  container.querySelector('img').style.filter = "brightness(0.8) contrast(1.2) saturate(2) hue-rotate(200deg)";
 
  container.querySelector('.overlay2').style.opacity = 0.4;
}

function restaurarCor2(container) {
  
  container.querySelector('img').style.filter = "none";
  
  container.querySelector('.overlay2').style.opacity = 0;
}

function mostrarMenu(event) {
  event.stopPropagation(); // Impede a propagação do evento para o corpo do documento
  var menuFlutuante = document.getElementById('menuFlutuante');
  menuFlutuante.style.display = (menuFlutuante.style.display === 'block') ? 'none' : 'block';
  menuFlutuante.style.left = event.clientX + 'px'; // Define a posição horizontal com base na posição do cursor
  menuFlutuante.style.top = event.clientY + 'px'; // Define a posição vertical com base na posição do cursor
}

// Fecha o menu flutuante se clicar fora dele
document.addEventListener('click', function(event) {
  var menuFlutuante = document.getElementById('menuFlutuante');
  if (event.target.closest('.imagem-container') === null) {
    menuFlutuante.style.display = 'none';
  }
});

function mostrarMenu2(event) {
  event.stopPropagation(); // Impede a propagação do evento para o corpo do documento
  var menuFlutuante2 = document.getElementById('menuFlutuante2');
  menuFlutuante2.style.display = (menuFlutuante2.style.display === 'block') ? 'none' : 'block';
  menuFlutuante2.style.left = event.clientX + 'px'; // Define a posição horizontal com base na posição do cursor
  menuFlutuante2.style.top = event.clientY + 'px'; // Define a posição vertical com base na posição do cursor
}

// Fecha o menu flutuante se clicar fora dele
document.addEventListener('click', function(event) {
  var menuFlutuante2 = document.getElementById('menuFlutuante2');
  if (event.target.closest('.imagem-container') === null) { 
    menuFlutuante2.style.display = 'none';
  }
});

function mostrarMenu3(event) {
  event.stopPropagation(); // Impede a propagação do evento para o corpo do documento
  var menuFlutuante3 = document.getElementById('menuFlutuante3');
  menuFlutuante3.style.display = (menuFlutuante3.style.display === 'block') ? 'none' : 'block';
  menuFlutuante3.style.left = event.clientX + 'px'; // Define a posição horizontal com base na posição do cursor
  menuFlutuante3.style.top = event.clientY + 'px'; // Define a posição vertical com base na posição do cursor
}

// Fecha o menu flutuante se clicar fora dele
document.addEventListener('click', function(event) {
  var menuFlutuante3 = document.getElementById('menuFlutuante3');
  if (event.target.closest('.imagem-container') === null) { 
    menuFlutuante3.style.display = 'none';
  }
});

function mostrarMenu4(event) {
  event.stopPropagation(); // Impede a propagação do evento para o corpo do documento
  var menuFlutuante4 = document.getElementById('menuFlutuante4');
  menuFlutuante4.style.display = (menuFlutuante4.style.display === 'block') ? 'none' : 'block';
  menuFlutuante4.style.left = event.clientX + 'px'; // Define a posição horizontal com base na posição do cursor
  menuFlutuante4.style.top = event.clientY + 'px'; // Define a posição vertical com base na posição do cursor
}

// Fecha o menu flutuante se clicar fora dele
document.addEventListener('click', function(event) {
  var menuFlutuante4 = document.getElementById('menuFlutuante4');
  if (event.target.closest('.imagem-container') === null) { 
    menuFlutuante4.style.display = 'none';
  }
});

function mostrarMenu5(event) {
  event.stopPropagation(); // Impede a propagação do evento para o corpo do documento
  var menuFlutuante5 = document.getElementById('menuFlutuante5');
  menuFlutuante5.style.display = (menuFlutuante5.style.display === 'block') ? 'none' : 'block';
  menuFlutuante5.style.left = event.clientX + 'px'; // Define a posição horizontal com base na posição do cursor
  menuFlutuante5.style.top = event.clientY + 'px'; // Define a posição vertical com base na posição do cursor
}

// Fecha o menu flutuante se clicar fora dele
document.addEventListener('click', function(event) {
  var menuFlutuante5 = document.getElementById('menuFlutuante5');
  if (event.target.closest('.imagem-container') === null) { 
    menuFlutuante5.style.display = 'none';
  }
});

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

function updateDropdownVisibility() {
  var dropdown = document.getElementById('dropdown-content2');
  if (window.innerWidth < 768) { // Altere o valor conforme necessário
      dropdown.style.display = 'none';
  } else {
      dropdown.style.display = 'block'; // ou 'flex' ou 'inline', dependendo do seu layout
  }
}

