let imageIndex = 0;
let quantity = 0;
const images = [
  { src: "images/image-product-1.jpg", alt: "shoes" },
  { src: "images/image-product-2.jpg", alt: "shoes" },
  { src: "images/image-product-3.jpg", alt: "shoes" },
  { src: "images/image-product-4.jpg", alt: "shoes" },
];
const currentImage = document.querySelector(".current-image");
const leftArrow = document.querySelector(".left");
const rightArrow = document.querySelector(".right");
const original = 250;
const discount = 0.5;
let total = original * (1 - discount);
const totalParagraph = document.querySelector(".total");
const discountParagraph = document.querySelector(".discount");
const originalParagraph = document.querySelector(".original");
const quantityParagraph = document.querySelector(".quantity");
const minus = document.querySelector(".minus");
const plus = document.querySelector(".plus");
const addBtn = document.querySelector(".add-cart");
const cartQuantity = document.querySelector(".cart-quantity");

totalParagraph.textContent = `$${total}`;
discountParagraph.textContent = `${discount * 100}%`;
originalParagraph.textContent = `$${original}`;

rightArrow.addEventListener("click", () => {
  if (imageIndex < images.length - 1) {
    imageIndex++;
  } else {
    imageIndex = 0;
  }
  currentImage.setAttribute("src", images[imageIndex].src);
});

leftArrow.addEventListener("click", () => {
  if (imageIndex === 0) {
    imageIndex = images.length - 1;
  } else {
    imageIndex--;
  }
  currentImage.setAttribute("src", images[imageIndex].src);
});

minus.addEventListener("click", () => {
  if (quantity !== 0) {
    quantityParagraph.textContent = --quantity;
  }
});
plus.addEventListener("click", () => {
  quantityParagraph.textContent = ++quantity;
});

addBtn.addEventListener("click", () => {
  cartQuantity.textContent = quantity;
});
