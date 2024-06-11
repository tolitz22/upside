//Slider buttons add active class

const buttons = document.getElementsByClassName("btn-slider");
const carousel = document.getElementById("main-carousel");
let activeButton = document.querySelector(".btn-slider.active");



document.addEventListener("DOMContentLoaded", function() {
  const myCarouselElement = document.querySelector('#main-carousel')
  const carousel = new bootstrap.Carousel(myCarouselElement, {
    interval: 5000,   
    pause:'hover',
    ride:'carousel'
  })

  console.log(carousel);
})



document.addEventListener("DOMContentLoaded", function() {
  const desktopButtons = document.querySelectorAll('.btn-slider');
  const mobileButtons = document.querySelectorAll('.buttons-slider-container-mobile .btn');
  const allButtons = [...desktopButtons, ...mobileButtons];
  let activeButton = document.querySelector('.btn-slider.active');

  allButtons.forEach(button => {
      button.addEventListener('click', function(event) {
          const myCarouselEl = document.querySelector('#main-carousel');
          const carousel = bootstrap.Carousel.getInstance(myCarouselEl);

          if (carousel) {
              carousel.dispose();
          }

          if (event.target !== activeButton) {
              allButtons.forEach(btn => btn.classList.remove('active'));
              event.target.classList.add('active');
              activeButton = event.target;
          }
      });
  });
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


$(document).ready(function () {


  function makeRequest() {
    // Create a new XMLHttpRequest object
    var xhr = new XMLHttpRequest();
  
    // Configure the request: GET method, URL
    // staging
    // xhr.open('GET', 'https://gettournamentleaderboards-4sbyyp2mpq-uc.a.run.app', true);
    // prod
    xhr.open('GET', 'https://gettournamentleaderboards-4qt3w6p6hq-uc.a.run.app', true);
    

    // Set up a function to handle the response
    xhr.onload = function() {
        if (xhr.status >= 200 && xhr.status < 300) {
            // Success! Handle the response data
            var responseData = JSON.parse(xhr.responseText);
            var tournaments = responseData.tournaments;
  
            // Get the main carousel element
            var mainCarousel = document.querySelector('.leaderboard-carousel');
            
            tournaments = tournaments.filter((item)=>{
              return item.leaderboard.length>2
            });

            console.log(tournaments);              
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
              groupCells: tournaments.length>2? true:false,              
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