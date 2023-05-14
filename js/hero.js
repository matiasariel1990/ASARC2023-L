

function cambiarImagen() {
    var imagenes = [
      "../img/hero/juanca.jpg",
      "../img/hero/pola.jpg",
      "../img/hero/santy.jpg",
      "../img/hero/scrum.jpg"
      // Agrega aquí más imágenes si lo deseas
    ];
    
    var imgHero = document.getElementById('img-hero');
    var imagenActual = imgHero.style.backgroundImage.slice(5, -2);
    var indexActual = imagenes.indexOf(imagenActual) + 1;
  
    if (indexActual >= imagenes.length) {
      indexActual = 0;
    }
    
    imgHero.style.backgroundImage = 'url(' + imagenes[indexActual] + ')';
    imgHero.classList.add('animacion'); // Agrega la clase de animación
  }

  setInterval(cambiarImagen, 8000);
