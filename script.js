console.log("Я учу JavaScript!");

const galleryImg = document.getElementById("galleryImg");

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

// Решение для 2 картинок
// prevBtn.onclick = function () {
//   galleryImg.src = "images/img1.jpg";
// };

// nextBtn.onclick = function () {
//   galleryImg.src = "images/img2.jpg";
// };

const images = [
  "images/img1.jpg",
  "images/img2.jpg",
  "images/img3.jpg",
  "images/img4.jpg",
  "images/img5.jpg",
];

let currentIndex = 0;

function updateImage() {
  galleryImg.src = images[currentIndex];
}

prevBtn.onclick = function () {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateImage();
};

nextBtn.onclick = function () {
  currentIndex = (currentIndex + 1) % images.length;
  updateImage();
};

// Задание со звёздочкой
const result = document.getElementById("result");

function calculateTotalPrice(quantity = 2, price = 15000000) {
  const totalPrice = quantity * price;
  result.textContent = `Стоимость покупки: ${totalPrice.toLocaleString(
    "ru-RU"
  )} рублей`;
}
