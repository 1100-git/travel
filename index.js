// burger
const bool = false;
const body = document.querySelector("body");
const burger = document.querySelector(".header-burger");
const menu = document.querySelector(".nav-burger-menu");
const menuLinks = menu.querySelectorAll(".nav-link");


burger.addEventListener('click',
  function () {
    burger.classList.toggle("header-burger-active");
    menu.classList.toggle("nav-burger-menu-active");
    document.body.classList.toggle("stop-scroll");
  }
);

menuLinks.forEach(function (el) {
  el.addEventListener('click',
    function () {
      burger.classList.remove("header-burger-active");
      menu.classList.remove("nav-burger-menu-active");
      document.body.classList.remove("stop-scroll");
    })
});

body.addEventListener('click',
  function (el) {
    if (el.target !== burger && el.target !== menu) {
      burger.classList.remove("header-burger-active");
      menu.classList.remove("nav-burger-menu-active");
      document.body.classList.remove("stop-scroll");
    }
  }
);

// loginPopup

const loginButtonBurger = document.getElementById('loginButtonBurger');
const loginButton = document.getElementById('loginButton');
const regButton = document.getElementById('regButton'); // registerPopup
const logButton = document.getElementById('logButton'); // registerPopup
const popup = document.querySelector('.login-popup');
const regPopup = document.querySelector('.register-popup'); // registerPopup
const shadow = document.querySelector('.obscur');


loginButton.addEventListener('click', () => {
  popup.classList.toggle('login-popup-active');
  shadow.classList.toggle('obscur-active');
})
regButton.addEventListener('click', () => {             // registerPopup
  regPopup.classList.toggle('register-popup-active');
  popup.classList.toggle('login-popup-active');
})
logButton.addEventListener('click', () => {             // registerPopup
  regPopup.classList.remove('register-popup-active');
  popup.classList.toggle('login-popup-active');
})
loginButtonBurger.addEventListener('click', () => {
  popup.classList.toggle('login-popup-active');
  shadow.classList.toggle('obscur-active');
})
shadow.addEventListener('click', (event) => {
  // console.log(event)
  if(event.target.classList.contains('obscur-active')){
    popup.classList.remove('login-popup-active');
    shadow.classList.remove('obscur-active');
    regPopup.classList.remove('register-popup-active');
  }
})
const formLogin = document.getElementById('formLogin');
formLogin.addEventListener("submit", function (event) {
  event.preventDefault();   
  alert(`email: ${formLogin.elements["email"]} \nPassword: ${formLogin.elements["password"]}`);
});