fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(products => products.products.forEach(element => {
        console.log(element);
        document.querySelector('.products-wrapper').innerHTML += `
    <div class="product" id='${element.id}'>
        <div class="product-image">
        <img
            src="${element.images[0]}"
            alt="Product image"
        />
    </div>

    <div class="product-body">
        <p class="product-title">${element.title}</p>

        <p class="product-rating">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"> ${element.rating}</i>
        </p>

        <p class="product-desc">${element.description}.</p>
        <p class="product-price">${element.price} $</p>

        <button class="add-favorite" id="${element.id}" onclick="addLocal()">
            <i class="fa-regular fa-heart"></i>
        </button>
    </div>
    `
    }))


button.addEventListener('click', ()=>{
    
})