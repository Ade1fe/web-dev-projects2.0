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
    price.textContent = `Quantity: ${item.quantity}`;
    cartItem.appendChild(price);

    const itemTotalPrice = document.createElement('h4');
    itemTotalPrice.textContent = `Total Price: #${item.price * item.quantity}`;
    cartItem.appendChild(itemTotalPrice);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
      // Remove item from local storage
      const itemIndex = cart.findIndex((cartItem) => cartItem.id === item.id);
      cart.splice(itemIndex, 1);
      localStorage.setItem('cart', JSON.stringify(cart));

      // Remove item from cart display
      cartItem.remove();

      // Update total price
      total -= item.quantity * item.price;
      totalPrice.textContent = `#${total.toFixed(2)}`;
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
