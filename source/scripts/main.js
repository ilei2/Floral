/*
SOURCES/REFERENCES:
Detecting scrolling position: http://blog.grayghostvisuals.com/js/detecting-scroll-position/
Detect bottom of screen: https://stackoverflow.com/questions/9439725/javascript-how-to-detect-if-browser-window-is-scrolled-to-bottom
setAttribute(): https://www.w3schools.com/jsref/met_element_setattribute.asp
smooth scrolling: https://stackoverflow.com/questions/42261524/window-scrollto-with-a-smooth
*/

var carousel = (function() {
  var box = document.querySelector('.carouselbox');
  var next = box.querySelector('.next');
  var prev = box.querySelector('.prev');
  var items = box.querySelectorAll('.content li');
  var counter = 0;
  var amount = items.length;
  var current = items[0];

  function navigate(direction) {
    current.classList.add('hide');
    counter = counter + direction;
    if (direction === -1 && counter < 0) {
      counter = amount - 1;
    }
    if (direction === 1 && !items[counter]) {
      counter = 0;
    }
    current = items[counter];
    current.classList.remove('hide');
  }

  next.addEventListener('click', function(ev) {
    navigate(1);
  });

  prev.addEventListener('click', function(ev) {
    navigate(-1);
  })

  navigate(0);
})();

var homePosition = document.querySelector('.home').offsetTop;
var aboutPosition = document.querySelector('.about').offsetTop;
var carouselbox = document.querySelector('.carouselbox').offsetTop;
var galleryPosition = document.querySelector('.gallery').offsetTop;// + (homePosition);
galleryPosition += (carouselbox-galleryPosition)/10;
var contactPosition = document.querySelector('.contact').offsetTop;
var bottom = document.body.scrollHeight;

var testing = document.querySelector('.carouselbox').offsetTop;
/*
console.log("home: " + homePosition);
console.log("about: " + aboutPosition);
console.log("gallery: " + galleryPosition);
console.log("contact: " + contactPosition);
console.log("bottom: " + bottom);*/

//HIGHLIGHT SECTION
window.addEventListener("scroll", function(e) {
  var current;
  var hi = document.querySelector('.highlight');
  var navbar = document.querySelector('.navbar');

  var position = window.scrollY + homePosition;
  //console.log(position);
  var bottomPosition = window.scrollY + window.innerHeight;

  if (position >= contactPosition || bottomPosition == bottom) {
    hi.classList.remove("highlight");
    current = document.querySelector('.nav-contact');
    current.classList.add("highlight");
  }
  else if (position < aboutPosition) {
    hi.classList.remove("highlight");
    current = document.querySelector('.nav-home');
    current.classList.add("highlight");

    navbar.setAttribute("style", "height: 4em;");
  }
  else if (position >= aboutPosition && position < galleryPosition) {
    hi.classList.remove("highlight");
    current = document.querySelector('.nav-about');
    current.classList.add("highlight");

    navbar.setAttribute("style", "height: 2em;");
    navbar.setAttribute("style", "font-size: .7em;");
  }
  else {
    hi.classList.remove("highlight");
    current = document.querySelector('.nav-gallery');
    current.classList.add("highlight");
  }
})

//home section
var home = document.getElementById('home-id');
home.addEventListener("click", function() {
  var position = window.scrollY + homePosition;
  var i = 10; //wherever the window is currently at
  var int = setInterval(function() {
    window.scrollTo(0,position-i);
    i += 15;
    if ((position-i) < 0) clearInterval(int);
  }, 10);
})

//about section
var about = document.getElementById('about-id');
about.addEventListener("click", function() {
  var position = window.scrollY + homePosition;
  var i = 10;
  if (position > aboutPosition) {
    var int = setInterval(function() {
      window.scrollTo(0,position-i);
      i += 15;
      if ((position-i) < (aboutPosition - homePosition)) clearInterval(int);
    }, 10);
  } else {
      var int = setInterval(function() {
      window.scrollTo(0,position+i);
      i += 15;
      if ((position+i) > (aboutPosition - homePosition/2)) clearInterval(int);
    }, 10);
  }
})

//gallery section
var gallery = document.getElementById('gallery-id');
gallery.addEventListener("click", function() {
  var position = window.scrollY + homePosition;
  var i = 10;
  if (position > galleryPosition) {
    var int = setInterval(function() {
      window.scrollTo(0,position-i);
      i += 15;
      if ((position-i) < (galleryPosition - homePosition)) clearInterval(int);
    }, 10);
  } else {
      var int = setInterval(function() {
      window.scrollTo(0,position+i);
      i += 15;
      if ((position+i) > (galleryPosition - (25))) clearInterval(int);
    }, 10);
  }
})

//contact section
var contact = document.getElementById('contact-id');
contact.addEventListener("click", function() {
  var position = window.scrollY + homePosition;
  var i = 10;
  if (position > contactPosition) {
    var int = setInterval(function() {
      window.scrollTo(0,position-i);
      i += 10;
      //console.log(position-i);
      if ((position-i) < (contactPosition - homePosition)) clearInterval(int);
    }, 10);
  } else {
      var int = setInterval(function() {
      window.scrollTo(0,position+i);
      i += 10;
      //console.log(position-i);
      if ((position+i) > (contactPosition - homePosition)) clearInterval(int); /*(contactPosition - homePosition/2)*/
    }, 10);
  }
})
