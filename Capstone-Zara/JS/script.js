"use strict";

document.querySelector("#hamburgerMenu").addEventListener("click", event => { document.querySelector(".navmenu").classList.toggle("hidden") });

document.querySelector("#womenNavBtn").addEventListener("click", event => window.location.href = "women.html");

document.querySelector("#menNavBtn").addEventListener("click", event => window.location.href = "mens.html");

document.querySelector("#kidNavBtn").addEventListener("click", event => window.location.href = "kids.html");

document.querySelector("#beautyNavBtn").addEventListener("click", event => window.location.href = "beautySection.html");

document.querySelector("#travelNavBtn").addEventListener("click", event => window.location.href = "travel.html");

document.querySelector("#homeDecorNavBtn").addEventListener("click", event => window.location.href = "homeDecor.html");


// Get product from localStorage
const product = JSON.parse(localStorage.getItem('selectedProduct'));

// Display product info
if (product) {

    const img = document.getElementById('product-image');
    const name = document.getElementById('product-name');
    const price = document.getElementById('product-price');
    const desc = document.getElementById('product-description');

    if (img) img.src = product.image;
    if (name) name.textContent = product.name;
    if (price) price.textContent = product.price;
    if (desc) desc.textContent = product.description;

}

// Add to cart functionality
const addToCartBtn = document.getElementById('add-to-cart');

if (addToCartBtn && product) {
    addToCartBtn.addEventListener('click', () => {

        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push(product);

        localStorage.setItem('cart', JSON.stringify(cart));

        alert(`${product.name} added to cart!`);
    });
}

// FAKE DATA (NO BACKEND)
// const items = ["Home", "Explore", "About", "Contact"];

// const searchInput = document.getElementById("search");
// const results = document.getElementById("results");
// const loader = document.getElementById("loader");

// searchInput.addEventListener("input", () => {
//   // Clear old results immediately
//   results.innerHTML = "";

//   // Show loader
//   loader.classList.remove("hidden");

//   // Simulate loading delay
//   setTimeout(() => {
//     loader.classList.add("hidden");

//     const query = searchInput.value.toLowerCase();

//     const matches = items.filter(item =>
//       item.toLowerCase().includes(query)
//     );

//     // Show message if nothing matches
//     if (matches.length === 0 && query !== "") {
//       const li = document.createElement("li");
//       li.textContent = "No results found";
//       results.appendChild(li);
//     }

//     matches.forEach(match => {
//       const li = document.createElement("li");
//       li.textContent = match;
//       results.appendChild(li);
//     });

//   }, 1200); // long delay so spinner is visible
// });

document.addEventListener('DOMContentLoaded', () => {

    const searchInput = document.getElementById('search-input');
    const suggestionsBox = document.getElementById('suggestions');

    if (!searchInput || !suggestionsBox) return;

    searchInput.addEventListener('input', () => {
        const query = searchInput.value.toLowerCase();

        suggestionsBox.innerHTML = "";

        if (query === "") return;

        const filtered = womensProducts.filter(p =>
            p.name.toLowerCase().includes(query)
        );

        if (filtered.length === 0) {
            suggestionsBox.innerHTML = `<div class="suggestion-item">No results found</div>`;
            return;
        }

        filtered.slice(0, 5).forEach(product => {
            const div = document.createElement('div');
            div.classList.add('suggestion-item');
            div.textContent = product.name;

            div.addEventListener('click', () => {
                window.location.href = `searchResult.html?q=${product.name}`;
            });

            suggestionsBox.appendChild(div);
        });
    });

});