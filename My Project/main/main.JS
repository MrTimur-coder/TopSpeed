document.querySelector('.header_bottom_btn').addEventListener('click', function () {
   this.classList.toggle('active');
   document.querySelector('.header-menu').classList.toggle('active');
});

const button1 = document.querySelector('.header_menu-btn1');
const button2 = document.querySelector('.header_menu-btn2');
const button3 = document.querySelector('.header_menu-btn3');
const button4 = document.querySelector('.header_menu-btn4');
const submenu1 = document.querySelector('.submenu1');
const submenu2 = document.querySelector('.submenu2');
const submenu3 = document.querySelector('.submenu3');
const submenu4 = document.querySelector('.submenu4');


// Add event listener to each button

button1.onclick = function() {
   this.classList.toggle('activa');
   submenu1.classList.toggle('activa');
};
button2.onclick = function() {
   this.classList.toggle('activa');
   submenu2.classList.toggle('activa');
};
button3.onclick = function() {
   this.classList.toggle('activa');
   submenu3.classList.toggle('activa');
};
button4.onclick = function() {
   this.classList.toggle('activa');
   submenu4.classList.toggle('activa');
};


const icon = document.querySelector('.icon')
const search = document.querySelector('.search')
const clear = document.querySelector('.clear')

icon.onclick = function () {
   search.classList.toggle('activ')
}

clear.onclick = function () {
   document.getElementById('mySearch').value = ''
}

// =============================== SEARCH ===================================

const mySearch = document.getElementById('mySearch');
const results = document.getElementById('results');

mySearch.addEventListener('input', function(event) {
   // Получаем введенное значение
   const searchTerm = event.target.value;
   // Обновляем текст результата
   results.textContent = `Ищете: ${searchTerm}`;
   // Здесь можно добавить логику для выполнения поиска, как например запрос на сервер
});
// document.getElementById('search-button').addEventListener('click', function() {
//    const query = document.getElementById('search-input').value;
//    const resultsContainer = document.getElementById('results');
//    resultsContainer.innerHTML = ''; // Очистка предыдущих результатов

//    if (query) {
//        // Здесь можно добавить логику поиска, например, запрос к серверу
//        // Для примера, просто отображаем введенный запрос
//        const resultItem = document.createElement('div');
//        resultItem.textContent = `Результаты поиска для: ${query}`;
//        resultsContainer.appendChild(resultItem);
//    } else {
//        resultsContainer.textContent = 'Введите запрос для поиска.';
//    }
// });

/* ========================Scroll To Top Button ========================= */
// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunctions(), scrollFunction()};

function scrollFunctions() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
//   document.getElementById("mybtn")
}

function scrollFunction() {
   if (document.body.scrollTop > 90 || document.documentElement.scrollTop > 0) {
    document.getElementById("header_top_nav").style.fontSize = "50px";
   } else {
     document.getElementById("header_top_nav").style.fontSize = "70px";
   }
 }
//============================= DARK MODE ====================================
function myFunction() {
   var element = document.body;
   element.classList.toggle("dark-mode");
}

// ============================ Scroll ======================================
function scrollFunction() {
  if (document.body.scrollTop > 90 || document.documentElement.scrollTop > 0) {
   document.getElementById("header_top_nav").style.fontSize = "50px";
  } else {
    document.getElementById("header_top_nav").style.fontSize = "70px";
  }
}