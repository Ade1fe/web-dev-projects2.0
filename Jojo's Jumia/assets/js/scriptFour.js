const API_KEY = "34748321-56ec586673804760cca13f7f6";
const NUM_IMAGES = 3;
const URL = `https://pixabay.com/api/?key=${API_KEY}&q=old+books&image_type=photo&per_page=${NUM_IMAGES}`;

fetch(URL)
    .then(response => response.json())
    .then(data => {
        const imageUrls = data.hits.map(hit => hit.webformatURL);
        const swiperSlides = imageUrls.map(url => {
            return `<div class="swiper-slide"><img src="${url}" /></div>`;
        });
        const swiperContainer = document.querySelector("#swiper-container");
        swiperContainer.innerHTML = `<div class="swiper-wrapper">${swiperSlides.join("")}</div><div class="swiper-pagination"></div>`;
        const swiper = new Swiper(".swiper-container", {
            direction: "vertical",
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
        });
    })
    .catch(error => console.error(error));


// ---------------------------------------
const swiper = new Swiper('.swiper-containerTwo', {
    slidesPerView: 7,
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 1500,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        1200: {
            slidesPerView: 6.30,
        },
        992: {
            slidesPerView: 5.30,
        },
        768: {
            slidesPerView: 4.30,
        },
        576: {
            slidesPerView: 3.16,
        },
        0: {
            slidesPerView: 2,
        },
    },
});

const categories = ["purse", "television", "pan", "table", "perfume", "cups", "shirts", "shoes", "refrigerator", "fan"];

const swiperWrapper = document.querySelector('#adverts');

const NUM_IMAGES2 = 3;
const textNum = 15;
categories.forEach(category => {
    const URL = `https://pixabay.com/api/?key=${API_KEY}&q=${category}&image_type=photo&per_page=3`;
    fetch(URL)
        .then(response => response.json())
        .then(data => {
            data.hits.forEach(hit => {
                const cardElement = document.createElement('div');
                cardElement.classList.add('swiper-slide', 'item');
                const imageElement = document.createElement('img');
                imageElement.src = hit.webformatURL;
                imageElement.alt = hit.tags;
                const linkElement = document.createElement('a');

                if (hit.tags.length < 25) {
                    linkElement.textContent = hit.tags;
                } else {
                    const truncatedTags = hit.tags.substring(0, 25) + "...";
                    linkElement.textContent = truncatedTags;
                }

                cardElement.appendChild(imageElement);
                cardElement.appendChild(linkElement);
                swiperWrapper.appendChild(cardElement);

            });
        })
        .catch(error => {
            console.log(error);
        });
});


// ---------------------------------------
const swiperSell = new Swiper('.swiper-containerThree', {
    slidesPerView: 5,
    spaceBetween: 20,
    loop: true,
    speed: 2000,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
        enabled: true,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        1200: {
            slidesPerView: 5.30,
        },
        992: {
            slidesPerView: 4.10,
        },
        768: {
            slidesPerView: 3.30,
        },
        576: {
            slidesPerView: 3.16,
        },
        0: {
            slidesPerView: 2,
        },
    },
});


// -----------------------
function createSwiperWrapper(categories, prices, pricesCross, containerId) {

    function addtocart(itemName, itemImage, itemPrice, itemPriceCross) {
        // Ask the user how many they want to buy
        const quantity = parseInt(prompt(`How many ${itemName} do you want to buy?`));

        // Get the existing cart items from localStorage, or create an empty array if it doesn't exist
        let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

        // Add the new item to the cart
        cartItems.push({
            name: itemName,
            image: itemImage,
            price: itemPrice,
            priceCross: itemPriceCross,
            quantity: quantity
        });

        // Store the updated cart items in localStorage
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }


    const swiperWrapper = document.querySelector(`#${containerId}`);

    categories.forEach((category) => {
        const URL = `https://pixabay.com/api/?key=${API_KEY}&q=${category}&image_type=photo&per_page=4`;
        fetch(URL)
            .then(response => response.json())
            .then(data => {
                data.hits.forEach((hit, index) => {
                    const cardElement = document.createElement('div');
                    cardElement.classList.add('swiper-slide', 'items');
                    const imageWrapperElement = document.createElement('div');
                    imageWrapperElement.classList.add('image-wrapper');
                    const imageElement = document.createElement('img');
                    imageElement.src = hit.webformatURL;
                    imageElement.alt = hit.tags;
                    imageWrapperElement.appendChild(imageElement);
                    const linkElement = document.createElement('h4');

                    if (hit.tags.length < 25) {
                        linkElement.textContent = hit.tags;
                    } else {
                        const truncatedTags = hit.tags.substring(0, 15) + "...";
                        linkElement.textContent = truncatedTags;
                    }

                    const priceElement = document.createElement('h5');
                    priceElement.textContent = "$" +
                        prices[(index + categories.indexOf(category)) % prices.length];

                    const cart = document.createElement('a')
                    cart.innerHTML = `<i class='bx bx-cart-alt'></i>`
                    cart.href = '#'

                    const cartIcon = cart.querySelector('.bx-cart-alt');
                    cartIcon.addEventListener('click', () => {
                        addtocart(hit.tags, hit.webformatURL, prices[(index + categories.indexOf(category)) % prices.length], pricesCross[(index + categories.indexOf(category)) % pricesCross.length]);
                    });


                    const priceCrossElement = document.createElement('h5');
                    priceCrossElement.classList.add('cross')
                    priceCrossElement.textContent = "$" + pricesCross[(index + categories.indexOf(category)) % pricesCross.length];

                    cardElement.appendChild(imageWrapperElement);
                    cardElement.appendChild(linkElement);
                    cardElement.appendChild(priceElement);
                    imageWrapperElement.appendChild(cart);
                    cardElement.appendChild(priceCrossElement);
                    swiperWrapper.appendChild(cardElement);
                });
            })
            .catch(error => {
                console.log(error);
            });
    });

    return swiperWrapper;
}




// Example usage:
const categoriesSell = ["bag", "shirt", "coke", "table", "baby", "phone", "shirts", "shoes", "refrigerator", "fan"];
const sellPrice = [2000, 2500, 4000, 3400, 14000, 1400, 6200, 5400, 3400, 7600];
const sellPriceCross = [1500, 2400, 3800, 2400, 12000, 1100, 6150, 5000, 3100, 7500];
createSwiperWrapper(categoriesSell, sellPrice, sellPriceCross, 'selling');

const categoriesFlash = ["socket", "plastic", "teddy", "table", "nylon", "bottle", "spoon", "mirror", "slippers", "robe"];
const flashPrice = [2000, 2500, 4000, 3400, 14000, 1400, 6200, 5400, 3400, 7600];
const flashPriceCross = [1500, 2400, 3800, 2400, 12000, 1100, 6150, 5000, 3100, 7500];
createSwiperWrapper(categoriesFlash, flashPrice, flashPriceCross, 'flash');

const categoriesStock = ["handglove", "trouser", "sweater", "heater", "hat", "glove", "raincoat", "balls", "towel", "broom"];
const stockPrice = [2000, 2500, 4000, 3400, 14000, 1400, 6200, 5400, 3400, 7600];
const stockPriceCross = [1500, 2400, 3800, 2400, 12000, 1100, 6150, 5000, 3100, 7500];
createSwiperWrapper(categoriesStock, stockPrice, stockPriceCross, 'stock');


// ------------philip
const categoriesPhilip = ["mircophone", "wood", "nylon", "pack", "matches", "smoke", "lighter", "shoes", "shovel", "milk"];
const philipPrice = [2000, 2500, 4000, 3400, 14000, 1400, 6200, 5400, 3400, 7600];
const philipPriceCross = [1500, 2400, 3800, 2400, 12000, 1100, 6150, 5000, 3100, 7500];
createSwiperWrapper(categoriesPhilip, philipPrice, philipPriceCross, 'philip');

// large
const categoriesLarge = ["textbooks", "radio", "pot", "cup", "sticker", "mouse", "keyboard", "nails", "polish", "rainboots"];
const largePrice = [2000, 2500, 4000, 3400, 14000, 1400, 6200, 5400, 3400, 7600];
const largePriceCross = [1500, 2400, 3800, 2400, 12000, 1100, 6150, 5000, 3100, 7500];
createSwiperWrapper(categoriesLarge, largePrice, largePriceCross, 'large');

//bestPrice
const categoriesBestPrice = ["grain", "volleyball", "pants", "carton", "basket", "flower+pots", "bluetooth", "toothpaste", "toothbrush", "makeup"];
const bestPrice = [2000.3, 2500, 4000, 3400, 14000, 1400, 6200, 5400, 3400, 7600];
const bestPriceCross = [1500, 2400, 3800, 2400, 12000, 1100, 6150, 5000, 3100, 7500];
createSwiperWrapper(categoriesBestPrice, bestPrice, bestPriceCross, 'bestPrice');


//bestSeller
const categoriesBestSeller = ["bra", "singlets", "swim+pants", "wig", "scarf", "sponge", "soap", "mushroom", "snacks", "fan"];
const bestSellerPrice = [2000, 2500, 4000, 3400, 14000, 1400, 6200, 5400, 3400, 7600];
const bestSellerPriceCross = [1500, 2400, 3800, 2400, 12000, 1100, 6150, 5000, 3100, 7500]
createSwiperWrapper(categoriesBestSeller, bestSellerPrice, bestSellerPriceCross, 'bestSeller');


// eld sales
const categoriesEld = ["quran", "hijab", "mosque", "bead", "muslim+prayer", "dubai", "mosque", "hijab", "quran", "bead"];
const eldPrice = [2000, 2500, 4000, 3400, 14000, 1400, 6200, 5400, 3400, 7600];
const eldPriceCross = [1500, 2400, 3800, 2400, 12000, 1100, 6150, 5000, 3100, 7500];
createSwiperWrapper(categoriesEld, eldPrice, eldPriceCross, 'eld');


// phone sales
const categoriesPhones = ["phone+case", "phone+charger", "phone+colors", "apple+keyboard", "apple+watch", "apple+phone", "apple+logo", "smart+watch", "smart+television", "smart+glasses"];
const phonesPrice = [2000, 2500, 4000, 3400, 14000, 1400, 6200, 5400, 3400, 7600];
const phonesPriceCross = [1500, 2400, 3800, 2400, 12000, 1100, 6150, 5000, 3100, 7500];
createSwiperWrapper(categoriesPhones, phonesPrice, phonesPriceCross, 'phones');



// nivea offical
const categoriesNivea = ["nivea+cream", "body+cream", "hair+cream", "cream", "body+cream", "nivea+cream", "body+cream", "hair+cream", "sun+cream", "lotion"];
const niveaPrice = [2000, 2500, 4000, 3400, 14000, 1400, 6200, 5400, 3400, 7600];
const niveaPriceCross = [1500, 2400, 3800, 2400, 12000, 1100, 6150, 5000, 3100, 7500];
createSwiperWrapper(categoriesNivea, niveaPrice, niveaPriceCross, 'nivea');

// health
const categoriesHealth = ["drugs", "capsule", "drip", "medicine", "body+cream", "lotion", "drugs", "medicine", "lotion", "drugs"];
const healthPrice = [2000, 2500, 4000, 3400, 14000, 1400, 6200, 5400, 3400, 7600];
const healthPriceCross = [1500, 2400, 3800, 2400, 12000, 1100, 6150, 5000, 3100, 7500];
createSwiperWrapper(categoriesHealth, healthPrice, healthPriceCross, 'health');

// fashion
const categoriesFashion = ["nose+ring", "hat", "silver+ring", "lipstick", "powder", "sun+glass", "wallet", "gold", "rings", "earrings"];
const fashionPrice = [2000, 2500, 4000, 3400, 14000, 1400, 6200, 5400, 3400, 7600];
const fashionPriceCross = [1500, 2400, 3800, 2400, 12000, 1100, 6150, 5000, 3100, 7500];
createSwiperWrapper(categoriesFashion, fashionPrice, fashionPriceCross, 'Fashion');

// Oraimo offical
const categoriesOraimo = ["earpod", "airpod", "speaker", "earpod", "airpod", "speaker", "bluetooth", "airpod", "earpod", "speaker"];
const oraimoPrice = [2000, 2500, 4000, 3400, 14000, 1400, 6200, 5400, 3400, 7600];
const oraimoPriceCross = [1500, 2400, 3800, 2400, 12000, 1100, 6150, 5000, 3100, 7500];
createSwiperWrapper(categoriesOraimo, oraimoPrice, oraimoPriceCross, 'oraimo');

// grocery
const categoriesGrocery = ["bread", "milk", "eggs", "rice", "pasta", "juice", "vegetables", "fruits", "snacks", "water"];
const groceryPrice = [2000, 2500, 4000, 3400, 14000, 1400, 6200, 5400, 3400, 7600];
const groceryPriceCross = [1500, 2400, 3800, 2400, 12000, 1100, 6150, 5000, 3100, 7500];
createSwiperWrapper(categoriesGrocery, groceryPrice, groceryPriceCross, 'grocery');






// -----------------------------


// shop from
var swiper1 = new Swiper(".containerFive .swiper", {
    slidesPerView: 6,
    grid: {
        rows: 2,
        fill: 'row'
    },
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 2.47,
            spaceBetween: 20,
            grid: {
                rows: 2,
                fill: 'row'
            }
        },
        576: {
            slidesPerView: 3,
            spaceBetween: 20,
            grid: {
                rows: 2,
                fill: 'row'
            }
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 30,
            grid: {
                rows: 2,
                fill: 'row'
            }
        },
        992: {
            slidesPerView: 6,
            spaceBetween: 40,
            grid: {
                rows: 2,
                fill: 'row'
            }
        }
    }
});




// 
var swiper3 = new Swiper(".containerSix", {
    spaceBetween: 30,
    speed: 2000,
    autoplay: {
        delay: 3000,
    },
    loop: true,
});




// official store 
var swiper4 = new Swiper(".containerSeven .swiper", {
    slidesPerView: 6,
    grid: {
        rows: 3, // set rows to 3
        fill: 'row'
    },
    spaceBetween: 10,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 2.47,
            spaceBetween: 10,
            grid: {
                rows: 3,
                fill: 'row'
            }
        },
        576: {
            slidesPerView: 3,
            spaceBetween: 10,
            grid: {
                rows: 3,
                fill: 'row'
            }
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 10,
            grid: {
                rows: 3,
                fill: 'row'
            }
        },
        992: {
            slidesPerView: 6,
            spaceBetween: 10,
            grid: {
                rows: 3,
                fill: 'row'
            }
        }
    }
});



// notification
// Array of notifications
let notifications = [{
    message: 'I didnt use an e-commerce api',
    timeout: 0 // No timeout
}, {
    message: 'No e-commerce api was used',
    timeout: 60000 // 1 minute in milliseconds 
}, {
    message: 'No e-commerce api used to build this project',
    timeout: 90000 // 1.5 minutes in milliseconds 
}];

// Function to create a notification
function createNotification(message, timeout) {
    // Create the notification element
    let notification = document.createElement('div');
    notification.classList.add('notification');
    notification.innerHTML = `
    <p>${message}</p>
    <span class="close-btn">&times;</span>
  `;

    // Add the notification to the page
    document.getElementById('notifications').appendChild(notification);

    // Set the timeout to close the notification
    if (timeout > 0) {
        setTimeout(() => {
            notification.remove();
        }, timeout);
    }

    // Add an event listener to the close button
    notification.querySelector('.close-btn').addEventListener('click', () => {
        notification.remove();
    });
}

// Function to show the notifications one after the other
function showNotifications() {
    notifications.forEach((notification, index) => {
        setTimeout(() => {
            createNotification(notification.message, notification.timeout);
        }, index * 1500); // Delay between notifications is 1.5 seconds
    });
}

// Show the first notification immediately when the page loads
createNotification(notifications[0].message, notifications[0].timeout);

// Show the remaining notifications with a delay
setTimeout(() => {
    showNotifications();
}, notifications[1].timeout); // Delay between first and second notifications is 1 minute