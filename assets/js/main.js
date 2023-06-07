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

//Send form contact

$(document).ready(function () {
  $("form").submit(function (event) {
    event.preventDefault(); // Prevenir la actualización de la página

    // Obtener los valores de los campos
    var name = $("#name").val();
    var email = $("#email").val();
    var comments = $("#comments").val();

    // Enviar la información mediante AJAX
    $.ajax({
      type: "POST",
      url: "process-form.php", // Ruta al archivo PHP que procesará el formulario
      data: {
        name: name,
        email: email,
        comments: comments,
      },
      success: function (response) {
        var successText = document.getElementsByClassName(
          "success-form visually-hidden"
        )[0];

        successText.classList.remove("visually-hidden");
      },
      error: function (jqXHR, textStatus, errorThrown) {
        console.log("Estado:", textStatus);
        console.log("Error:", errorThrown);
        // Mostrar mensaje de error
        alert("Error to send form");
      },
    });
  });
});


//Search Tournament Inputs 

const searchInputs = document.querySelectorAll('.search-input');

searchInputs.forEach(input => {
  input.addEventListener('input', () => handleSearch(input));
});

function handleSearch(input) {
  const searchTerm = input.value.toLowerCase();
  const table = input.parentNode.querySelector('.leaderboard-table');
  const rows = table.querySelectorAll('tr');

  rows.forEach(row => {
    const username = row.cells[0].textContent.toLowerCase();
    if (username.includes(searchTerm)) {
      row.style.display = '';
    } else {
      row.style.display = 'none';
    }
  });
}


