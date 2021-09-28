let sectionElement = document.querySelector(".shopSection");

fetch("./shopfrontpage.json")
.then((response) => response.json())
.then((result) => {
    result.shopfrontpage.forEach((categoryNumber) => {
        sectionElement.innerHTML += `
                <figure>
                    <img src="${categoryNumber.img}" alt="${categoryNumber.alt}">
                    <figcaption><a href="#">${categoryNumber.text}</a></figcaption>
                </figure>`
    })
})