const createSwiperSlide = (item, swiperWrapper, price) => {
  const swiperSlide = document.createElement('div');
  swiperSlide.className = 'swiper-slide item';

  const imgDiv = document.createElement('div');
  imgDiv.className = 'imgDiv';
  const img = document.createElement('img');
  img.src = item.strDrinkThumb || item.strMealThumb;
  img.alt = item.strDrink || item.strMeal;
  imgDiv.appendChild(img);
  swiperSlide.appendChild(imgDiv);

  const h4 = document.createElement('h4');
  if (item.strDrink && item.strDrink.length <= 15) {
    h4.textContent = item.strDrink;
  } else if (item.strMeal && item.strMeal.length <= 15) {
    h4.textContent = item.strMeal;
  } else {
    h4.textContent = (item.strDrink || item.strMeal).slice(0, 15) + '...';
  }
  swiperSlide.appendChild(h4);

  const h4_1 = document.createElement('h4');
  h4_1.textContent = 'Category: ' + (item.strCategory || item.strMeal);
  swiperSlide.appendChild(h4_1);

  
  const addToCartButton = document.createElement('i');
  addToCartButton.className = 'fas fa-cart-plus';
  swiperSlide.appendChild(addToCartButton);

  const h4_2 = document.createElement('h4');
  h4_2.textContent = 'Type: ' + (item.strCategory || item.strMealType || "N/A");
  swiperSlide.appendChild(h4_2);

  const h4_3 = document.createElement('h4');
  h4_3.textContent = 'Price: #' + price;
  swiperSlide.appendChild(h4_3);

  swiperWrapper.appendChild(swiperSlide);

  addToCartButton.addEventListener('click', () => {
    addToCart(item, price);
  });
};

const addToCart = (item, price) => {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const productIndex = cart.findIndex(p => p.name === item.strDrink || p.name === item.strMeal);
  if (productIndex !== -1) {
    // If the product already exists in the cart, update its quantity and price
    const quantity = prompt(`Enter the quantity of ${item.strDrink || item.strMeal} you want to add to cart:`);
    cart[productIndex].quantity += Number(quantity);
    cart[productIndex].price = price;
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`Added ${quantity} ${item.strDrink || item.strMeal} to cart!`);
  } else {
    // Otherwise, add a new product to the cart
    const quantity = prompt(`Enter the quantity of ${item.strDrink || item.strMeal} you want to add to cart:`);
    const product = {
      name: item.strDrink || item.strMeal,
      category: item.strCategory || item.strMeal,
      type: item.strCategory || item.strMealType || "N/A",
      price: price,
      quantity: Number(quantity),
      image: item.strDrinkThumb || item.strMealThumb
    };
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`Added ${quantity} ${item.strDrink || item.strMeal} to cart!`);
  }
  console.log(cart);
};


// localStorage.clear();