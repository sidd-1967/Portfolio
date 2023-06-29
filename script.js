//  hamburger menu  Working
// document.addEventListener('DOMContentLoaded', function() {
//   const hamburgerMenu = document.querySelector('.hamburger-menu');
//   const menu = document.querySelector('.menu');
//   const overlay = document.querySelector('.blurred-background');
  
//   hamburgerMenu.addEventListener('click', function() {
//     menu.classList.toggle('show');
//     overlay.classList.toggle('show');
//   });
  
//   overlay.addEventListener('click', function() {
//     menu.classList.remove('show');
//     overlay.classList.remove('show');
//   });
// });

// Add auto Scroll Functionality for Project Images if they are Uploaded more than 3.
  function rotateImages() {
    const screenshotsInner = document.querySelector('.screenshots-inner');
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
  
  setInterval(rotateImages, 2000);



// Contact US Script!
function sendMessage() {
  // Get form input values
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var phone = document.getElementById('phone').value;
  var message = document.getElementById('message').value;

  // Check if all fields are filled
  if (name !== '' && email !== '' && phone !== '' && message !== '') {
    // Display success alert if all fields are filled
    Swal.fire({
      icon: 'success',
    //   title: 'Success',
      text: "Hey there! Thanks for reaching out to Me. We'll get back to you as soon as I can.",
      showConfirmButton: false,
      timer: 5000,
      customClass: {
        popup: 'custom-popup-class',
        title: 'custom-title-class',
        content: 'custom-content-class'
      }
    });

    // Clear form fields
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('message').value = '';
  } else {
    // Display error alert if any of the fields is empty
    Swal.fire({
      icon: 'error',
    //   title: 'Error',
      text: 'Please fill in all the required fields.',
      showConfirmButton: false,
      timer: 3000,
      customClass: {
        popup: 'custom-popup-class',
        title: 'custom-title-class',
        content: 'custom-content-class'
      }
    });
  }


  // Prevent the default form submission behavior
  event.preventDefault();
}
//  Contact us Script Ends Here

// Scroll to Top Button Fucntionality  Script starts here
window.addEventListener('scroll', function() {
  var scrollToTopButton = document.getElementById('scrollToTopButton');
  if (window.pageYOffset > 300) {
    scrollToTopButton.style.display = 'block';
  } else {
    scrollToTopButton.style.display = 'none';
  }
});

document.getElementById('scrollToTopButton').addEventListener('click', function(e) {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Scroll to Top Button Fucntionality  Script Ends Here