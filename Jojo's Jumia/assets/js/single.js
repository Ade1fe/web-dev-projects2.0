const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.anything');
const dropdownMenu = document.querySelector('.dropdown-menu');

burger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

var sideContainer = document.querySelector('.anything');
var productItems = document.querySelector('.productItems');
var copyCart = document.querySelector('.copyCart');
var copyAcc = document.querySelector('.copyAcc');
var navLinksList = document.querySelectorAll('.nav__link');
var cartItem = document.querySelector('.cartItem');
var AccItem = document.querySelector('.AccItem');

navLinksList.forEach(function(navLink) {
  var li = document.createElement('li');
  li.classList.add('copyNav');
  li.innerHTML = navLink.innerHTML;
  productItems.appendChild(li);
});

var li1 = document.createElement('li');
li1.classList.add('copyCart');
li1.innerHTML = cartItem.innerHTML;
productItems.appendChild(li1);

var li2 = document.createElement('li');
li2.classList.add('copyAcc');
li2.innerHTML = AccItem.innerHTML;
productItems.appendChild(li2);
