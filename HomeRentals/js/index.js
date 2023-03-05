 $(window).on('scroll load', function(){
    

         if($(window).scrollTop() > 0){
            $('.rocket').show();
         }else{
             $('.rocket').hide();
         }

    })

// scroll effect
const scrollElements = document.querySelectorAll(".js-scroll");

const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};

const elementOutofView = (el) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)
  );
};

const displayScrollElement = (element) => {
  element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
  element.classList.remove("scrolled");
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 1.25)) {
      displayScrollElement(el);
    } else if (elementOutofView(el)) {
      hideScrollElement(el)
    }
  })
}

window.addEventListener("scroll", () => { 
  handleScrollAnimation();
});






// image
 var loadFile = function(event) {
              var image = document.getElementById('output');
              image.src=URL.createObjectURL(event.target.files[0]);
          };

          // section2
 const inputDiv = document.querySelector(".input-div")
const input = document.querySelector("input")
const output = document.querySelector("output")
let imagesArray = [];

input.addEventListener("change", () => {
  const files = input.files
  for (let i = 0; i < files.length; i++) {
    imagesArray.push(files[i])
  }
  displayImages()
})


inputDiv.addEventListener("drop", () => {
  e.preventDefault()
  const files = e.dataTransfer.files
  for (let i = 0; i < files.length; i++) {
    if (!files[i].type.match("image")) continue;

    if (imagesArray.every(image => image.name !== files[i].name))
      imagesArray.push(files[i])
  }
  displayImages()
})


function displayImages() {
  let images = ""
  imagesArray.forEach((image, index) => {
    images += `<div class="image">
                <img src="${URL.createObjectURL(image)}" alt="image">
                <span onclick="deleteImage(${index})">&times;</span>
              </div>`
  })
  output.innerHTML = images
}



function deleteImage(index) {
  imagesArray.splice(index, 1)
  displayImages()
}


// play

var btn = document.getElementById('btn');
var play = false;

$(document).ready(function() {
  var ctrlVideo = document.getElementById("vid1");
  $('#btn').click(function() {
    play = !play;
    if (play) {
      var pl = "https://spng.pngfind.com/pngs/s/180-1803855_png-file-svg-play-button-svg-transparent-png.png";
      btn.innerHTML = '<img src="' + pl + '" alt="Pause">';
      ctrlVideo.play();
    } else {
      var ps = "https://www.freeiconspng.com/thumbs/pause-button-png/pause-button-png-24.png";
      btn.innerHTML = '<img src="' + ps + '" alt="Play">';
      ctrlVideo.pause();
    }
  });
});








// carousel
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}