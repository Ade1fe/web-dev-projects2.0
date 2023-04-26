var firstSwipper = new Swiper(".firstSwipper", {
    spaceBetween: 10,
    slidesPerView: 1.30,
    // Responsive breakpoints
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 2,
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 3,
        },
        // when window width is >= 640px
        640: {
            slidesPerView: 4,
        },
        // when window width is >= 768px
        768: {
            slidesPerView: 5,
        },
        // when window width is >= 1024px
        1024: {
            slidesPerView: 6,
        },
        // when window width is >= 1200px
        1200: {
            slidesPerView: 7,
        },
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});


console.log("hello");
const elements = document.querySelectorAll('.nav__link');

elements.forEach(element => {
    element.addEventListener('click', () => {
        const id = element.id;
        window.location.href = `/assets/pages/mySingle.html?id=${id}`;
    });
});



const fans = document.getElementById("fans");
fans.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent the default action of the link
    console.log("clicked", event.target); // Log the clicked element
    const id = "fans";
    window.location.href = `/assets/pages/mySingle.html?id=${id}`;
});


const shoes = document.getElementById("Refrigerator");
shoes.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent the default action of the link
    console.log("clicked", event.target); // Log the clicked element
    const id = "Refrigerator";
    window.location.href = `/assets/pages/mySingle.html?id=${id}`;
});

const heels = document.getElementById("heels");
heels.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent the default action of the link
    console.log("clicked", event.target); // Log the clicked element
    const id = "heels";
    window.location.href = `/assets/pages/mySingle.html?id=${id}`;
});