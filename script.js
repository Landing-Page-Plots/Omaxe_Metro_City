// Check if the popup has already been shown or form is submitted
let isPopupShown = sessionStorage.getItem('popupShown');
let isFormSubmitted = sessionStorage.getItem('formSubmitted');

// Function to show the popup if it hasn't been shown already
function showPopup() {
  if (!isPopupShown && !isFormSubmitted) {  // Show popup only if form is not submitted
    document.getElementById("popupForm").style.display = "flex";
  }
}

// Function to close the popup and mark it as shown in sessionStorage
function closePopup() {
  document.getElementById("popupForm").style.display = "none";
  sessionStorage.setItem('popupShown', 'true'); // Mark the popup as shown
}

// Handle form submission (Formspree integration)
document.getElementById("contactForm").onsubmit = function(event) {
  event.preventDefault(); // Prevent normal form submission

  // Mark form as submitted in sessionStorage
  sessionStorage.setItem('formSubmitted', 'true');
  
  // Close the popup after form submission
  closePopup();
  
  // Submit the form via Formspree
  this.submit(); // You can trigger Formspree here or your form's submission method
};

// Reset sessionStorage only when the page is reloaded or tab is closed
window.onbeforeunload = function() {
  sessionStorage.removeItem('popupShown'); // Reset popup shown flag when tab is closed
};






// Initialize intl-tel-input 
//  const phoneInputField = document.querySelector("#phone");
//   window.intlTelInput(phoneInputField, {
//     initialCountry: "in",
//     separateDialCode: true,
//     utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js" // for formatting and validation
//   });
  const phoneInputField = document.querySelector("#phone");
  const iti = window.intlTelInput(phoneInputField, {
    initialCountry: "in", // Set initial country to India (or any country of your choice)
    separateDialCode: true, // Optional: Separate country code and phone number in the input
    utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js" // For formatting and validation
  });

  document.getElementById("contactForm2").onsubmit = function(event) {
    // Prevent default form submission
    event.preventDefault();

    // Get the formatted phone number
    const phoneNumber = iti.getNumber(); // This gives the phone number with country code

    // Set the phone number field to the formatted phone number before submission
    document.querySelector("#phone").value = phoneNumber;

    // Submit the form after updating the phone field
    this.submit();
  };
