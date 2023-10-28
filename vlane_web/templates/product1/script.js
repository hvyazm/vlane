let slideIndex = 1;

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

document.addEventListener("DOMContentLoaded", function() {
    showSlides(slideIndex);
});

function redirectToCheckout() {
    window.location.href = "../checkout/checkout.html";
}

function checkout(productName, productDescription) {
    localStorage.setItem('productName', productName);
    localStorage.setItem('productDescription', productDescription);
    window.location.href = "../checkout/checkout.html";
}

