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