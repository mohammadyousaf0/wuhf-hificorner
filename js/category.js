let elementProducts = document.querySelector("#products");

fetch("./shopcategorypage.json")
.then((response) => response.json())
.then((result) => {
    result.shopcategorypage.forEach((categoryNumber) => {
        elementProducts.innerHTML += `
        <div class="theProduct">
        <img src="${categoryNumber.img}" alt="${categoryNumber.alt}">
        <h4>${categoryNumber.titel}</h4>
        <div class="flexPrices">
          <p class="discount">${categoryNumber.discount}</p>
          <p class="price">${categoryNumber.price}</p>
        </div>
        ${categoryNumber.button}
      </div>`
    })
})