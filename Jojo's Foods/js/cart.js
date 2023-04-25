const cart = JSON.parse(localStorage.getItem('cart'));
const cartItemsWrapper = document.querySelector('#cart-items');
const myH3 =  document.querySelector('#myH3');

console.log(cart);

if (cart) {
  let total = 0;

  for (const item of cart) {
    const cartItem = document.createElement('div');
    cartItem.className = 'row';

    const imgWrapper = document.createElement('div');
    imgWrapper.className = 'pic';
    const img = document.createElement('img');
    img.src = item.image;
    img.alt = item.name;
    imgWrapper.appendChild(img);
    cartItem.appendChild(imgWrapper);

    const name = document.createElement('h4');
    name.textContent = item.name;
    cartItem.appendChild(name);

    const price = document.createElement('h4');
    price.textContent = `Price: #${item.price}`;
    cartItem.appendChild(price);

    const totalPrice = document.createElement('h4');
    totalPrice.textContent = `Total Price: #${item.price * item.quantity}`;
    cartItem.appendChild(totalPrice);

    const deleteButton = document.createElement('button');
    deleteButton.className = 'delete-button';
    deleteButton.textContent = 'Delete';
   deleteButton.addEventListener('click', () => {
  const updatedCart = cart.filter((cartItem) => cartItem.name !== item.name);
  localStorage.setItem('cart', JSON.stringify(updatedCart));
  cartItemsWrapper.removeChild(cartItem);
  total -= item.price * item.quantity;
  totalPrice.textContent = `Total Price: #${total}`;
  
  // Remove the item from local storage
  const cartFromStorage = JSON.parse(localStorage.getItem('cart'));
  const updatedCartFromStorage = cartFromStorage.filter((cartItem) => cartItem.name !== item.name);
  localStorage.setItem('cart', JSON.stringify(updatedCartFromStorage));
});

    cartItem.appendChild(deleteButton);

    cartItemsWrapper.appendChild(cartItem);

    total += item.price * item.quantity;
  }

  const totalPrice = document.createElement('h3');
  totalPrice.textContent = `Total Price: #${total}`;
  myH3.appendChild(totalPrice);
} else {
  const noItemsMessage = document.createElement('h3');
  noItemsMessage.textContent = 'No items in cart!';
  cartItemsWrapper.appendChild(noItemsMessage);
}


// localStorage.clear();