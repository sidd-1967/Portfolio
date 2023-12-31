// Function to make the header sticky
function makeHeaderSticky() {
  const header = document.querySelector("header");
  const sticky = header.offsetTop;

  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

// Add a scroll event listener to call the function
window.addEventListener("scroll", makeHeaderSticky);


// Add auto Scroll Functionality for Project Images if they are Uploaded more than 3.
function rotateImages(containerId) {
  const screenshotsInner = document.querySelector(`#${containerId} .screenshots-inner`);
  const screenshotWidth = screenshotsInner.firstElementChild.clientWidth;
  const scrollAmount = screenshotWidth + 10; // Adjust this value to change the scroll distance
  
  const currentPosition = Math.abs(parseInt(screenshotsInner.style.transform.split('(')[1])) || 0;
  
  if (currentPosition >= screenshotsInner.scrollWidth - screenshotsInner.clientWidth) {
    screenshotsInner.style.transform = 'translateX(0)';
  } else {
    screenshotsInner.style.transform = `translateX(-${currentPosition + scrollAmount}px)`;
  }
  
  // Check if the entire images have scrolled out of the container
  if (currentPosition >= screenshotsInner.scrollWidth) {
    screenshotsInner.style.transform = 'translateX(0)';
  }
}

setInterval(() => rotateImages('carrental-project'), 2000);
setInterval(() => rotateImages('technomarket-project'), 2000);

// Add auto Scroll Functionality for Certificates Images if they are Uploaded more than 3.
function rotateCertificateImages(containerId) {
  const screenshotsInner = document.querySelector(`#${containerId} .certificate-screenshots-inner`);
  const screenshotWidth = screenshotsInner.firstElementChild.clientWidth;
  const scrollAmount = screenshotWidth + 10; // Adjust this value to change the scroll distance
  
  const currentPosition = Math.abs(parseInt(screenshotsInner.style.transform.split('(')[1])) || 0;
  
  if (currentPosition >= screenshotsInner.scrollWidth - screenshotsInner.clientWidth) {
    screenshotsInner.style.transform = 'translateX(0)';
  } else {
    screenshotsInner.style.transform = `translateX(-${currentPosition + scrollAmount}px)`;
  }
  
  // Check if the entire images have scrolled out of the container
  if (currentPosition >= screenshotsInner.scrollWidth) {
    screenshotsInner.style.transform = 'translateX(0)';
  }
}

// Enable this script with a unique function name
setInterval(() => rotateCertificateImages('certificate'), 2000);

// Thank you pop-up
function showThankYouPopup() {
  document.getElementById('thankYouPopup').style.display = 'block';
}

function closeThankYouPopup() {
  document.getElementById('thankYouPopup').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('contactForm').addEventListener('submit', function (event) {
      event.preventDefault();

      // Your validation logic here
      if (validateForm()) {
          showThankYouPopup();

          // Clear the form after 5 seconds
          setTimeout(function () {
              document.getElementById('contactForm').reset();
              closeThankYouPopup();
          }, 5000);
      }
  });
});

function validateForm() {
  // Your validation logic here
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var phone = document.getElementById('phone').value;
  var message = document.getElementById('message').value;

  // Reset error messages
  document.getElementById('nameError').innerHTML = '';
  document.getElementById('emailError').innerHTML = '';
  document.getElementById('phoneError').innerHTML = '';
  document.getElementById('messageError').innerHTML = '';

  // Name validation
  if (name.trim() === '') {
      document.getElementById('nameError').innerHTML = 'Full Name cannot be blank';
  } else if (/[^a-zA-Z\s]/.test(name)) {
      document.getElementById('nameError').innerHTML = 'Full Name cannot contain Numbers & Special Characters';
  } else if (name.length > 25) {
      document.getElementById('nameError').innerHTML = 'Full Name Cannot exceed more than 25 chars';
  }

  // Email validation
  if (email.trim() === '') {
      document.getElementById('emailError').innerHTML = 'Email cannot be blank';
  } else if (!isValidEmail(email)) {
      document.getElementById('emailError').innerHTML = 'Invalid Email';
  }

  // Phone validation
  if (phone.trim() === '') {
      document.getElementById('phoneError').innerHTML = 'Phone Number cannot be blank';
  } else if (/[^0-9]/.test(phone)) {
      document.getElementById('phoneError').innerHTML = 'Phone number Cannot contain Alphabets & Special Characters';
  } else if (/^[0-5]/.test(phone)) {
      document.getElementById('phoneError').innerHTML = 'Invalid Phone Number';
  }

  // Message validation
  if (message.trim() === '') {
      document.getElementById('messageError').innerHTML = 'Message Field cannot be blank';
  } else if (message.length > 350) {
      document.getElementById('messageError').innerHTML = 'Message Field Cannot exceed 350 Chars';
  }

  // Check if there are any validation errors
  var errors = document.querySelectorAll('.error-message');
  for (var i = 0; i < errors.length; i++) {
      if (errors[i].innerHTML !== '') {
          return false; // Validation failed
      }
  }

  return true; // Validation passed
}

function isValidEmail(email) {
  // Basic email validation regex
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function clearForm() {
  // Clear form fields
  document.getElementById('name').value = '';
  document.getElementById('email').value = '';
  document.getElementById('phone').value = '';
  document.getElementById('message').value = '';

  // Clear error messages
  document.querySelectorAll('.error-message').forEach(function (element) {
      element.textContent = '';
  });
}

// document.addEventListener('contextmenu', function (e) {
//   e.preventDefault();
// });