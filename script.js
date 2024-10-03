function changeImage(imageUrl) {
    document.getElementById('main-image').src = imageUrl;
}

function increaseQuantity() {
    var quantity = document.getElementById('quantity');
    quantity.value = parseInt(quantity.value) + 1;
}

function decreaseQuantity() {
    var quantity = document.getElementById('quantity');
    if (quantity.value > 1) {
        quantity.value = parseInt(quantity.value) - 1;
    }
}

// Zoom in image
function zoomImage(imgElement) {
    const zoomedImgDiv = document.getElementById('zoomed-image');
    const zoomedImg = document.getElementById('zoomed-img');
    zoomedImg.src = imgElement.src;
    zoomedImgDiv.style.display = 'flex';
}

function closeZoom() {
    document.getElementById('zoomed-image').style.display = 'none';
}


// Array to store cart items
let cart = [];


function addToCart() {
    const productName = 'Fall Limited Edition Sneakers';  
    const productPrice = 125.00;  
    const quantity = parseInt(document.getElementById('quantity').value);

    
    let existingProduct = cart.find(item => item.name === productName);
    if (existingProduct) {
     
        existingProduct.quantity += quantity;
    } else {
   
        cart.push({ name: productName, price: productPrice, quantity: quantity });
    }

    updateCartDisplay();
}

//dropdown
function updateCartDisplay() {
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total');
    const cartCountElement = document.getElementById('cart-count');

    
    cartItemsContainer.innerHTML = '';

    
    let total = 0;
    let itemCount = 0;

   
    cart.forEach(item => {
        const itemTotalPrice = item.price * item.quantity;
        total += itemTotalPrice;
        itemCount += item.quantity;

        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <span>${item.name} (x${item.quantity})</span>
            <span>$${itemTotalPrice.toFixed(2)}</span>
        `;
        cartItemsContainer.appendChild(listItem);
    });

    // If the cart is empty, show "Your cart is empty."
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<li>Your cart is empty.</li>';
    }

   
    cartTotalElement.textContent = total.toFixed(2);
    cartCountElement.textContent = itemCount;
}

//toggle
function toggleCart() {
    const cartDropdown = document.getElementById('cart-dropdown');
    if (cartDropdown.style.display === 'none' || cartDropdown.style.display === '') {
        cartDropdown.style.display = 'block';
    } else {
        cartDropdown.style.display = 'none';
    }
}

// event listener to the "Add to Cart" button
document.querySelector('.add-to-cart').addEventListener('click', addToCart);
