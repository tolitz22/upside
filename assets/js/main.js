//Slider buttons add active class

const buttons = document.getElementsByClassName("btn-slider");
const carousel = document.getElementById("main-carousel");
let activeButton = document.querySelector(".btn-slider.active");

// Asegurarse de que haya un botón activo inicialmente
if (activeButton === null && buttons[0] ) {
  buttons[0].classList.add("active");
  activeButton = document.querySelector(".btn-slider.active");

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
}



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
  // go to top button
  var btn = $('#button');
  var btn2 = $('#button2');
  $(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
  });

  btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '300');
  });

  btn2.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '300');
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



  // Espera a que se cargue el documento
  // document.addEventListener('DOMContentLoaded', function() {
  //   // Obtén el enlace "Leaderboards"
  //   var leaderboardsLink = document.getElementById('leaderboards-link');
    
  //   // Agrega un evento de clic al enlace
  //   leaderboardsLink.addEventListener('click', function(e) {
  //     e.preventDefault(); // Evita el comportamiento de enlace predeterminado
      
  //     // Obtén el destino del enlace
  //     var target = document.querySelector(this.getAttribute('href'));
      
  //     // Calcula la posición del destino en relación con la ventana
  //     var offset = target.getBoundingClientRect().top + window.pageYOffset;
      
  //     // Realiza el desplazamiento suave utilizando animaciones de JavaScript
  //     window.scrollTo({
  //       top: offset,
  //       behavior: 'smooth'
  //     });
  //   });
  // });



//   function makeRequest() {
//     // Create a new XMLHttpRequest object
//     var xhr = new XMLHttpRequest();

//     // Configure the request: GET method, URL
//     xhr.open('GET', 'https://gettournamentleaderboards-4sbyyp2mpq-uc.a.run.app', true);

//     // Set up a function to handle the response
//     xhr.onload = function() {
//         if (xhr.status >= 200 && xhr.status < 300) {
//             // Success! Handle the response data
//             var responseData = JSON.parse(xhr.responseText);
//             var carouselInnerDiv = document.querySelector('#carouselExampleIndicators2 .carousel-inner');

//             // Function to generate HTML for leaderboard section
//             function generateLeaderboardHTML(title, prizeDescription, leaderboard) {
//                 var html = `
//                     <div class="carousel-item">
//                         <div class="row">
//                             <div class="col-md-4 card-container mb-3">
//                                 <div class="grand-prize-container text-center">
//                                     <p class="title">${title}</p>
//                                     <div class="text d-flex">
//                                         <ul class="grand-prize-list">
//                                             <!-- Grand prize list goes here -->
//                                         </ul>
//                                     </div>
//                                     <button class="view-more">View More</button>
//                                 </div>
//                                 <div class="card">
//                                     <div class="card-body text-center">
//                                         <h4 class="card-title">${title}</h4>
//                                         <p>${prizeDescription}</p>
//                                         <div class="table-container">
//                                             <table class="text-start leaderboard-table">
//                                                 <tr>
//                                                     <th>Nickname</th>
//                                                     <th>Tokens</th>
//                                                 </tr>`;

//                 // Generate table rows for leaderboard
//                 leaderboard.forEach(entry => {
//                     html += `
//                                                 <tr>
//                                                     <td>${entry.nickname}</td>
//                                                     <td>${entry.tokens}</td>
//                                                 </tr>`;
//                 });

//                 html += `
//                                             </table>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>`;

//                 return html;
//             }

      

//             // Loop through the tournaments and generate HTML for each leaderboard
//             responseData.tournaments.forEach(tournament => {
//                 var html = generateLeaderboardHTML(tournament.title, tournament.prizeDescription, tournament.leaderboard);
//                 // console.log(html);
//                 carouselInnerDiv.innerHTML += html;
//             });

//             // Activate the first carousel item if it exists
//             var firstCarouselItem = carouselInnerDiv.querySelector('.carousel-item');
//             if (firstCarouselItem) {
//                 firstCarouselItem.classList.add('active');
//             }
       
//         } else {
//             // Request failed
//             console.error('Request failed with status:', xhr.status);
//         }
//     };

//     // Set up a function to handle errors
//     xhr.onerror = function() {
//         // Request error
//         console.error('Request failed');
//     };

//     // Send the request
//     xhr.send();
// }

// // Call the makeRequest function to fetch leaderboard data




$(document).ready(function () {


  function makeRequest() {
    // Create a new XMLHttpRequest object
    var xhr = new XMLHttpRequest();
  
    // Configure the request: GET method, URL
    xhr.open('GET', 'https://gettournamentleaderboards-4sbyyp2mpq-uc.a.run.app', true);
  
    // Set up a function to handle the response
    xhr.onload = function() {
        if (xhr.status >= 200 && xhr.status < 300) {
            // Success! Handle the response data
            var responseData = JSON.parse(xhr.responseText);
            var tournaments = responseData.tournaments;
  
            // Get the main carousel element
            var mainCarousel = document.querySelector('.leaderboard-carousel');
  
            // Iterate through the tournaments and create a carousel cell for each one
            tournaments.forEach(function(tournament) {
                var carouselCell = document.createElement('div');
                // carouselCell.classList.add('carousel-cell');
                carouselCell.classList.add('card-container');
                carouselCell.classList.add('col-md-4');
                carouselCell.classList.add('mb-3');
                
                var leaderboardHTML = '';
                tournament.leaderboard.forEach(function(entry) {
                    leaderboardHTML += `
                        <tr>
                            <td>${entry.nickname}</td>
                            <td>${entry.tokens}</td>
                        </tr>
                    `;
                });
  
                var innerHTML = `
                        <div class="grand-prize-container text-center">
                            <p class="title">${tournament.title}</p>
                            <div class="text d-flex">
                                
                            </div>
            
                        </div>
                        <div class="card">
                            <div class="card-body text-center">
                                <h4 class="card-title">Leaderboard</h4>                                
                                <div class="table-container">
                                    <table class="text-start leaderboard-table">
                                        <tr>
                                            <th>Username</th>
                                            <th>Pts</th>
                                        </tr>
                                        ${leaderboardHTML}
                                    </table>
                                </div>                                
                            </div>
                        </div>
          
                `;
  
                carouselCell.innerHTML = innerHTML;
                mainCarousel.appendChild(carouselCell);
  
            });
  
            // Initialize Flickity after adding the carousel cells
  
            var elem = document.querySelector('.leaderboard-carousel');
            var flkty = new Flickity( elem, {
              // options
              cellAlign: 'left',
              contain: true,
              pageDots: true,
              groupCells:false,
            });
            

        } else {
            // Request failed
            console.error('Request failed with status:', xhr.status);
        }
    };
  
    // Set up a function to handle errors
    xhr.onerror = function() {
        // Request error
        console.error('Request failed');
    };
  
    // Send the request
    xhr.send();
  }
  makeRequest();


})