//Slider buttons add active class

const buttons = document.getElementsByClassName("btn-slider");
const carousel = document.getElementById("main-carousel");
let activeButton = document.querySelector(".btn-slider.active");

// Asegurarse de que haya un botón activo inicialmente
if (activeButton === null) {
  buttons[0].classList.add("active");
  activeButton = document.querySelector(".btn-slider.active");
}

carousel.addEventListener("click", function (event) {
  if (event.target.classList.contains("btn-slider")) {
    // Verificar si el botón que se hizo clic es diferente del botón activo actual
    if (event.target !== activeButton) {
      activeButton.classList.remove("active");
      event.target.classList.add("active");
      activeButton = event.target;
    }
  }
});

//Show list Tournament Grand Prize

const tournamentButton = document.querySelectorAll(".view-more");
const tournamentPrice = document.getElementsByClassName("grand-prize-item");

tournamentButton.forEach(function (boton) {
  boton.addEventListener("click", function () {
    let lista = boton.parentNode.querySelector("ul");
    let items = lista.querySelectorAll(".grand-prize-item");

    items.forEach(function (item) {
      if (item.classList.contains("d-none")) {
        item.classList.remove("d-none");
        boton.textContent = "Close";
      } else {
        item.classList.add("d-none");
        boton.textContent = "View More";
      }
    });
  });
});
