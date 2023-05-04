
//Slider buttons add active class 

const buttons = document.getElementsByClassName("btn-slider");
const carousel = document.getElementById("main-carousel");
let activeButton = document.querySelector(".btn-slider.active");

// Asegurarse de que haya un botón activo inicialmente
if (activeButton === null) {
  buttons[0].classList.add("active");
  activeButton = document.querySelector(".btn-slider.active");
}

carousel.addEventListener("click", function(event) {
  if (event.target.classList.contains("btn-slider")) {

    // Verificar si el botón que se hizo clic es diferente del botón activo actual
    if (event.target !== activeButton) {
      activeButton.classList.remove("active");
      event.target.classList.add("active");
      activeButton = event.target;
    }
  }
});
  
  
  
  
  
  