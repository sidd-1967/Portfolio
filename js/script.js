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

setInterval(() => rotateImages('carrental-project'), 3000);
setInterval(() => rotateImages('technomarket-project'), 3000);
setInterval(() => rotateImages('professional-project'), 3000);


// Formspree Contact Valdiation Start here 

var form = document.getElementById("my-form");

async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("my-form-status");
  var data = new FormData(event.target);

  try {
    var response = await fetch(event.target.action, {
      method: form.method,
      body: data,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      status.innerHTML = "Thanks for your submission!";
      clearForm(); // Clear form fields on successful submission
    } else {
      var responseData = await response.json();
      if (Object.hasOwnProperty.call(responseData, "errors")) {
        status.innerHTML = responseData["errors"].map(
          (error) => error["message"]
        ).join(", ");
      } else {
        status.innerHTML = "Oops! There was a problem submitting your form";
      }
    }
  } catch (error) {
    status.innerHTML = "Oops! There was a problem submitting your form";
  }
  // Attach the submit event listener
  form.addEventListener("submit", handleSubmit);
}

function validateForm() {
  // Reset error messages
  document.getElementById("emailError").innerHTML = "";
  document.getElementById("messageError").innerHTML = "";

  // Get form values
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  // Email validation
  if (email.trim() === "") {
    document.getElementById("emailError").innerHTML = "Email cannot be blank";
    return false;
  } else if (!isValidEmail(email)) {
    document.getElementById("emailError").innerHTML = "Invalid Email";
    return false;
  }

  // Message validation
  if (message.trim() === "") {
    document.getElementById("messageError").innerHTML =
      "Message Field cannot be blank";
    return false;
  } else if (message.length > 350) {
    document.getElementById("messageError").innerHTML =
      "Message Field Cannot exceed 350 Chars";
    return false;
  }

  // Form is valid, allow submission
  return true;
}

// Function to clear form fields
function clearForm() {
  document.getElementById("email").value = "";
  document.getElementById("message").value = "";
}

// Function to check valid email format
function isValidEmail(email) {
  var emailRegex = /\S+@\S+\.\S+/;
  return emailRegex.test(email);
}


// Formspree Contact Valdiation Ends here


// Mobile Hamburger menu
document.addEventListener("DOMContentLoaded", function () {
  var hamburgerMenu = document.querySelector('.hamburger-menu');
  var mobileMenu = document.querySelector('.mobile-menu');
  var menuItems = document.querySelectorAll('.mobile-menu nav a');

  hamburgerMenu.addEventListener('click', function () {
    toggleMenu();
  });

  // Add event listeners to each menu item to close the menu when clicked
  menuItems.forEach(function (menuItem) {
    menuItem.addEventListener('click', function () {
      toggleMenu();
    });
  });

  function toggleMenu() {
    hamburgerMenu.classList.toggle('opened');
    mobileMenu.classList.toggle('opened');

    if (mobileMenu.classList.contains('opened')) {
      disableScroll(); // Disable page scroll when the menu is opened
    } else {
      enableScroll(); // Enable page scroll when the menu is closed
    }
  }

  function disableScroll() {
    document.body.style.overflow = 'hidden';
  }

  function enableScroll() {
    document.body.style.overflow = ''; // Revert to the default scroll behavior
  }
});

document.addEventListener('gesturestart', function (e) {
  e.preventDefault();
});
document.addEventListener('touchmove', function (e) {
  e.preventDefault();
});
