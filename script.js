// let currentSlide = 0;

// function showSlides() {
//   const slides = document.querySelector('.slides-wrapper');
//   const totalSlides = document.querySelectorAll('.slide').length;
//   slides.style.transform = `translateX(${-100 * currentSlide}%)`;
// }

// function moveSlide(n) {
//   const totalSlides = document.querySelectorAll('.slide').length;
//   currentSlide = (currentSlide + n + totalSlides) % totalSlides;
//   showSlides();
// }

// // Automatic slide change every 3 seconds
// setInterval(() => {
//   moveSlide(1);
// }, 7000);

// showSlides();

// let currentIndex = 0;

// function slideLeft() {
//     const sliderWrapper = document.querySelector('.slider-wrapper');
//     const items = document.querySelectorAll('.slider-item');
//     const itemsToShow = 3;
//     const itemWidth = 300;

//     currentIndex = Math.max(currentIndex - 1, 0);
//     sliderWrapper.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
// }

// function slideRight() {
//     const sliderWrapper = document.querySelector('.slider-wrapper');
//     const items = document.querySelectorAll('.slider-item');
//     const itemsToShow = 3;
//     const itemWidth = 300;

//     currentIndex = Math.min(currentIndex + 1, items.length - itemsToShow);
//     sliderWrapper.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
// }

let isSubmitted = false; // Flag to check if the form is submitted

// Function to show the popup after a delay
function showPopup() {
  if (!isSubmitted) { // Show the popup only if the form is not submitted
    document.getElementById("popupForm").style.display = "flex";
  }
}

// Function to close the popup
function closePopup() {
  document.getElementById("popupForm").style.display = "none";
}

// Show the popup every few seconds
setInterval(showPopup, 15000); // 10000 milliseconds = 10 seconds

// Close popup on form submission and set the isSubmitted flag
// document.getElementById("contactForm").onsubmit = function(event) {
//   event.preventDefault(); // Prevent form from submitting to server
//   alert("Form submitted successfully!");
//   closePopup(); // Close the popup after submission
//   isSubmitted = true; // Set the flag to true to prevent popup from showing again
// };

// function handlePopupSubmit(event) {
//   // Optional: Add custom validation or other logic if needed
//   closePopup(); // Close the popup after submission
//   isSubmitted = true; // Set the flag to prevent future popups
// }

// Handle form submission
document.getElementById("contactForm").onsubmit = function () {
  closePopup(); // Close the popup after submission
  isSubmitted = true; // Set the flag to prevent popup from showing again
};

// Initialize intl-tel-input 
 const phoneInputField = document.querySelector("#phone");
  window.intlTelInput(phoneInputField, {
    initialCountry: "in",
    separateDialCode: true,
    utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js" // for formatting and validation
  });