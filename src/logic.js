//
//
//
// document.addEventListener("mouseover", function (e){
//     let currentProductCard = e.target.closest(".product-card")
//
//     if (currentProductCard.classList.contains("product-card_selected")){
//         currentProductCard.classList.add("product-card_selected-hover")
//     }else {
//         currentProductCard.classList.add("product-card_default-hover")
//     }
// })
//
// document.addEventListener("click", function (e){
//     let currentProductCard = e.target.closest(".product-card")
//     if (currentProductCard.classList.contains("product-card_selected")){
//         currentProductCard.classList.remove("product-card_selected")
//     }else {
//         currentProductCard.classList.add("product-card_selected")
//     }
// })

let productCardSection = document.querySelector(".product-section__cards");
productCardSection.addEventListener("mouseenter", function (e) {
    let currentCard = e.target.closest(".product-card-custom-checkbox-block");
    if (currentCard) {
        let currentInput = currentCard.querySelector(".product-card__input");
        let currentProduct = currentCard.querySelector(".product-card");
        if (currentInput.checked && e.relatedTarget === currentProduct) {
            currentProduct.style.background = "linear-gradient(135deg, transparent 42px, #E52E7A 0) top left";
            currentCard.querySelector(".product-card__weight-label").style.background = "#E52E7A";
        }
    }
})
productCardSection.addEventListener("mouseleave", function (e){

    let currentCard = e.target.closest(".product-card-custom-checkbox-block");

    if (currentCard){
        console.log("ddd")
        currentCard.querySelector(".product-card").style.background = undefined;
        currentCard.querySelector(".product-card__weight-label").style.background = undefined;
    }
})