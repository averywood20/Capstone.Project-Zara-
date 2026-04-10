"use strict";


function displayProducts(list) {
    const container = document.getElementById('productResults');
    const noResults = document.getElementById('noResults');

    container.innerHTML = "";

    if (list.length === 0) {
        noResults.style.display = "block";
        return;
    } else {
        noResults.style.display = "none";
    }

    list.forEach(product => {
        const card = document.createElement('div');
        card.classList.add('product-card');

        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <p>${product.name}</p>
            <p>${product.price}</p>
        `;

        card.addEventListener('click', () => {
            localStorage.setItem('selectedProduct', JSON.stringify(product));
            window.location.href = "productDetails.html";
        });

        container.appendChild(card);
    });
}

const params = new URLSearchParams(window.location.search);
const query = params.get("q")?.toLowerCase() || "";

document.getElementById('search-input').value = query;

const filtered = womensProducts.filter(p =>
  p.name.toLowerCase().includes(query)
);

displayProducts(filtered);
console.log(filtered);