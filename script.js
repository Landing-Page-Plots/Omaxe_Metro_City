// // let currentSlide = 0;

// // function showSlides() {
// //   const slides = document.querySelector('.slides-wrapper');
// //   const totalSlides = document.querySelectorAll('.slide').length;
// //   slides.style.transform = `translateX(${-100 * currentSlide}%)`;
// // }

// // function moveSlide(n) {
// //   const totalSlides = document.querySelectorAll('.slide').length;
// //   currentSlide = (currentSlide + n + totalSlides) % totalSlides;
// //   showSlides();
// // }

// // // Automatic slide change every 3 seconds
// // setInterval(() => {
// //   moveSlide(1);
// // }, 7000);

// // showSlides();

// // let currentIndex = 0;

// // function slideLeft() {
// //     const sliderWrapper = document.querySelector('.slider-wrapper');
// //     const items = document.querySelectorAll('.slider-item');
// //     const itemsToShow = 3;
// //     const itemWidth = 300;

// //     currentIndex = Math.max(currentIndex - 1, 0);
// //     sliderWrapper.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
// // }

// // function slideRight() {
// //     const sliderWrapper = document.querySelector('.slider-wrapper');
// //     const items = document.querySelectorAll('.slider-item');
// //     const itemsToShow = 3;
// //     const itemWidth = 300;

// //     currentIndex = Math.min(currentIndex + 1, items.length - itemsToShow);
// //     sliderWrapper.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
// // }

// let isSubmitted = false; // Flag to check if the form is submitted

// // Function to show the popup after a delay
// function showPopup() {
//   if (!isSubmitted) { // Show the popup only if the form is not submitted
//     document.getElementById("popupForm").style.display = "flex";
//   }
// }

// // Function to close the popup
// function closePopup() {
//   document.getElementById("popupForm").style.display = "none";
// }

// // Show the popup every few seconds
// setInterval(showPopup, 6000); // 10000 milliseconds = 10 seconds

// // Close popup on form submission and set the isSubmitted flag
// document.getElementById("contactForm").onsubmit = function(event) {
//   event.preventDefault(); // Prevent form from submitting to server
//   alert("Form submitted successfully!");
//   closePopup(); // Close the popup after submission
//   isSubmitted = true; // Set the flag to true to prevent popup from showing again
// };

// // function handlePopupSubmit(event) {
// //   // Optional: Add custom validation or other logic if needed
// //   closePopup(); // Close the popup after submission
// //   isSubmitted = true; // Set the flag to prevent future popups
// // }

// // Handle form submission
// document.getElementById("contactForm").onsubmit = function () {
//   closePopup(); // Close the popup after submission
//   isSubmitted = true; // Set the flag to prevent popup from showing again
// };


// // Check if the popup has been shown or the form is submitted
// // let isPopupShown = sessionStorage.getItem('popupShown');
// // let isFormSubmitted = sessionStorage.getItem('formSubmitted');
// // let popupInterval;

// // // Function to show the popup if it hasn't been shown and form not submitted
// // function showPopup() {
// //   if (!isPopupShown && !isFormSubmitted) {  // Only show the popup if form is not submitted yet
// //     document.getElementById("popupForm").style.display = "flex";
// //   }
// // }

// // // Function to close the popup and set 'popupShown' flag in sessionStorage
// // function closePopup() {
// //   document.getElementById("popupForm").style.display = "none";
// //   sessionStorage.setItem('popupShown', 'true');  // Mark popup as shown
  
// //   // Start the interval to show the popup again after every 5 seconds if the popup is closed
// //   popupInterval = setInterval(showPopup, 5000); // Show popup every 5 seconds
// // }

// // // Function to handle form submission (Formspree)
// // document.getElementById("contactForm").onsubmit = function(event) {
// //   event.preventDefault();  // Prevent normal form submission
  
// //   // Mark the form as submitted in sessionStorage
// //   sessionStorage.setItem('formSubmitted', 'true');
  
// //   // Close the popup after form submission
// //   document.getElementById("popupForm").style.display = "none";
  
// //   // Proceed with Formspree form submission
// //   this.submit();  // Submit the form to Formspree
// // };

// // // Function to stop popup from showing after form submission
// // function stopPopup() {
// //   clearInterval(popupInterval);  // Stop the popup interval after form is submitted
// // }

// // // Show the popup on page load if not already shown
// // setTimeout(showPopup, 5000);  // Delay for 5 seconds to show the popup after page load

// // // Check if the user reloads or revisits the page, reset popupShown
// // window.onbeforeunload = function() {
// //   sessionStorage.removeItem('popupShown');  // Reset popup flag when page/tab is closed
// // };






// // Initialize intl-tel-input 
// //  const phoneInputField = document.querySelector("#phone");
// //   window.intlTelInput(phoneInputField, {
// //     initialCountry: "in",
// //     separateDialCode: true,
// //     utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js" // for formatting and validation
// //   });



//   // const phoneInputField = document.querySelector("#phone");
//   // const iti = window.intlTelInput(phoneInputField, {
//   //   initialCountry: "in", // Set initial country to India (or any country of your choice)
//   //   separateDialCode: true, // Optional: Separate country code and phone number in the input
//   //   utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js" // For formatting and validation
//   // });

//   // document.getElementById("contactForm2").onsubmit = function(event) {
//   //   // Prevent default form submission
//   //   event.preventDefault();

//   //   if (!iti.isValidNumber()) {
//   //     alert("Please enter a valid phone number.");
//   //     return;
//   //   }
//   //   // Get the formatted phone number
//   //   const phoneNumber = iti.getNumber(); // This gives the phone number with country code

//   //   // Set the phone number field to the formatted phone number before submission
//   //   document.querySelector("#phone").value = phoneNumber;

//   //   // Submit the form after updating the phone field
//   //   this.submit();
//   // };



  // const phoneInputField = document.querySelector("#phone");
  // const iti = window.intlTelInput(phoneInputField, {
  //   initialCountry: "in", // Set initial country to India (or any country of your choice)
  //   separateDialCode: true, // Optional: Separate country code and phone number in the input
  //   utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js" // For formatting and validation
  // });

//   document.getElementById("contactForm2").onsubmit = function(event) {
//     event.preventDefault();  // Prevent normal form submission

//     // Validate phone number
//     if (!iti.isValidNumber()) {
//       alert("Please enter a valid phone number.");
//       return;
//     }

//     // Get the formatted phone number
//     const phoneNumber = iti.getNumber(); 
//     document.querySelector("#phone").value = phoneNumber; // Set the formatted phone number in the input

//     // Prepare form data
//     const formData = new FormData(this);

//     // Use fetch to submit the form data via POST
//     fetch('https://script.google.com/macros/s/AKfycbzxrr7MTnVRNcOArrV5yW7KwiTpXkUEgb7DCu4xZVrxsIN-qP0SF-NI3gEo_8Js7dV61w/exec', {
//       method: 'POST',
//       body: formData
//     })
//     .then(response => response.json())
//     .then(data => {
//       alert('Form submitted successfully');  // Show success alert
//       closePopup();  // Close the popup if needed
//       // Optionally reset the form if you want to clear the fields after submission
//       document.getElementById("contactForm2").reset();
//     })
//     .catch(error => {
//       alert('Error submitting form: ' + error);  // Show error if the submission fails
//     });
//   };

let isFormSubmitted = false; // Track if any form has been submitted

// Function to show successful submission message and close after 4 seconds
function showSuccessPopup(message) {
  const successPopup = document.getElementById("successPopup");
  successPopup.textContent = message;
  successPopup.style.display = "flex";  // Show success popup
  setTimeout(() => {
    successPopup.style.display = "none"; // Hide success popup after 4 seconds
  }, 6000);
}

// Function to handle form submission
function handleFormSubmission(event, formId) {
  event.preventDefault(); // Prevent default form submission

  // Check if the form is already submitted
  if (isFormSubmitted) {
    showSuccessPopup("Aapka form already submit ho chuka hai. Hum aap se jaldi sampark karenge.");
    return;
  }

  const form = document.getElementById(formId);
  const formData = new FormData(form);

  // Submit the form data to Google Sheets
  fetch("https://script.google.com/macros/s/AKfycbzxrr7MTnVRNcOArrV5yW7KwiTpXkUEgb7DCu4xZVrxsIN-qP0SF-NI3gEo_8Js7dV61w/exec", {
    method: "POST",
    body: formData,
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.result === "success") {
        showSuccessPopup("Aapka form successfully submit ho chuka hai! Hum aap se jaldi sampark karenge.");
        isFormSubmitted = true; // Mark as submitted
        disableForms(); // Disable all forms
        closePopup(); // Close the popup after submission
      } else {
        throw new Error("Form submission failed.");
      }
    })
    .catch((error) => {
      alert("Form submit karte waqt error aaya: " + error.message);
    });
}

// Function to disable all forms after submission
function disableForms() {
  const forms = document.querySelectorAll("form");
  forms.forEach((form) => {
    const inputs = form.querySelectorAll("input, textarea");
    inputs.forEach((input) => {
      input.disabled = true; // Disable all inputs and buttons
      showSuccessPopup("From Submitted We Will Contact you Soon !")
      document.getElementById("contactForm2").reset();
    });
  });
}

// Popup Management for Regular Popup
let popupInterval = false;

// Function to show the regular popup every 5 seconds (if not submitted)
function showPopup() {
  if (!isFormSubmitted) {
    document.getElementById("popupForm").style.display = "flex";
  }
}

// Function to close the popup manually and reset the interval to show again
function closePopup() {
  document.getElementById("popupForm").style.display = "none";
  // Reset the popup interval so it shows again after 5 seconds if not submitted
  popupInterval = setInterval(showPopup, 6000); 
}

// Start the popup interval (only if form is not submitted)
popupInterval = setInterval(showPopup, 9500); // Show popup every 5 seconds

// Attach form submission handlers
document.getElementById("contactForm").onsubmit = function (event) {
  handleFormSubmission(event, "contactForm");
};

document.getElementById("contactForm2").onsubmit = function (event) {
  handleFormSubmission(event, "contactForm2");
};


  
