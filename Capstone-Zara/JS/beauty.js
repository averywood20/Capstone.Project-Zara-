"use strict";

const beautyProducts = [
    {
        "id": 21,
        "name": "Black Eyeliner",
        "image": "images/eyeliner.jpg",
        "price": 12.99,
        "category": "eyes",
        "department": "beauty"
    },
    {
        "id": 22,
        "name": "Jelly Blush - BubbleGum ",
        "image": "images/jellyBlush.jpg",
        "price": 15.99,
        "category": "face",
        "department": "beauty"
    },
    {
        "id": 23,
        "name": "Lip Stain - Mauve",
        "image": "images/lipstain.jpg",
        "price": 12.99,
        "category": "lips",
        "department": "beauty"
    },
    {
        "id": 24,
        "name": "Lip Gloss - Peaches ",
        "image": "images/lipgloss.jpg",
        "price": 10.99,
        "category": "lips",
        "department": "beauty"
    },
    {
        "id": 25,
        "name": "Liquid Bronzer- Dark",
        "image": "images/liquidBronzer.jpg",
        "price": 19.99,
        "category": "face",
        "department": "beauty"
    },
    {
        "id": 26,
        "name": "Liquid Eyeshadow - Pink",
        "image": "images/liquidEyeshadow.jpg",
        "price": 24.99,
        "category": "eyes",
        "department": "beauty"
    },
    {
        "id": 27,
        "name": "Liquid Highlighter - Golden",
        "image": "images/liquidHighlighter.jpg",
        "price": 19.99,
        "category": "face",
        "department": "beauty"
    }
];

function displayProducts(list) {
    const container = document.getElementById('productResults');
    container.innerHTML = container.innerHTML = `<div class="loading-spinner"><i class="fa-solid fa-spinner fa-spin"></i></div>`;
    
    setTimeout(() => {
        container.innerHTML = "";
        list.forEach(product => {
    
        const card = document.createElement('div');
        card.classList.add('product-card');

        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <p>${product.name}</p>
            <p>${product.price}</p>
        `;

        // click → go to product page
        card.addEventListener('click', () => {
            localStorage.setItem('selectedProduct', JSON.stringify(product));
            window.location.href = "productDetails.html";
        });

        container.appendChild(card);
    });
 }, 500);
}

// show all initially
displayProducts(beautyProducts);

// Filter by Category 
document.getElementById('filter').addEventListener('change', (e) => {
    const value = e.target.value;

    if (value === "all") {
        displayProducts(beautyProducts);
    } else {
        const filtered = beautyProducts.filter(product => 
            product.category === value
        );
        displayProducts(filtered);
    }
});
