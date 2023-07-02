// hamburger menu Functionality
// document.addEventListener('DOMContentLoaded', function() {
//   var hamburgerMenu = document.querySelector('.sidemenu-toggler');
//   var sidemenu = document.querySelector('.sidemenu');
//   var closeBtn = document.querySelector('.sidemenu .close');
//   var headerLinks = document.querySelectorAll('header .menu li a'); // Select all header links

//   hamburgerMenu.addEventListener('click', function() {
//     sidemenu.classList.add('open');
//     document.body.classList.add('menu-open');
//   });

//   closeBtn.addEventListener('click', function() {
//     sidemenu.classList.remove('open');
//     document.body.classList.remove('menu-open');
//   });

//   // Close side menu when clicking outside the side menu
//   document.addEventListener('click', function(event) {
//     if (!sidemenu.contains(event.target) && !hamburgerMenu.contains(event.target)) {
//       sidemenu.classList.remove('open');
//       document.body.classList.remove('menu-open');
//     }
//   });
// });

document.addEventListener('DOMContentLoaded', function() {
  var hamburgerMenu = document.querySelector('.sidemenu-toggler');
  var sidemenu = document.querySelector('.sidemenu');
  var closeBtn = document.querySelector('.sidemenu .close');
  var headerLinks = document.querySelectorAll('header .menu li a');

  hamburgerMenu.addEventListener('click', function() {
    sidemenu.classList.toggle('open');
    document.body.classList.toggle('menu-open');
    hamburgerMenu.classList.toggle('open');
  });

  closeBtn.addEventListener('click', function() {
    sidemenu.classList.remove('open');
    document.body.classList.remove('menu-open');
    hamburgerMenu.classList.remove('open');
  });

  // Close side menu when clicking outside the side menu
  document.addEventListener('click', function(event) {
    if (!sidemenu.contains(event.target) && !hamburgerMenu.contains(event.target)) {
      sidemenu.classList.remove('open');
      document.body.classList.remove('menu-open');
      hamburgerMenu.classList.remove('open');
    }
  });
});


  //  Fixed header Scroll Mobile View Functionality
  
  let prevScrollpos = window.pageYOffset;
  const header = document.querySelector("header");
  const logoImage = document.getElementById("logo-image");
  const hamburgerMenu = document.getElementById("hamburger-menu");

  window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;

    if (prevScrollpos > currentScrollPos) {
      // Scrolling up
      header.classList.add("sticky");
      logoImage.classList.remove("hide");
      hamburgerMenu.classList.add("hide");
    } else {
      // Scrolling down
      header.classList.remove("sticky");
      logoImage.classList.add("hide");
      hamburgerMenu.classList.remove("hide");
    }

    prevScrollpos = currentScrollPos;
  };


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
// Contact US Script!
function sendMessage() {
  // Get form input values
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var phone = document.getElementById('phone').value;
  var message = document.getElementById('message').value;

  // Check if all fields are filled
  if (name !== '' && email !== '' && phone !== '' && message !== '') {
    // Clear form fields
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('message').value = '';

    // Display success alert if all fields are filled
    Swal.fire({
      icon: 'success',
      text: "Hey there! Thanks for reaching out to me. We'll get back to you as soon as possible.",
      showConfirmButton: false,
      timer: 5000,
      customClass: {
        popup: 'custom-popup-class',
        title: 'custom-title-class',
        content: 'custom-content-class'
      }
    });

    // Open mail app or window
    var emailLink = 'mailto:siddheshgovalar1967@gmail.com?subject=Contact%20Form%20Submission&body=Name: ' + encodeURIComponent(name) + '%0D%0AEmail: ' + encodeURIComponent(email) + '%0D%0APhone: ' + encodeURIComponent(phone) + '%0D%0AMessage: ' + encodeURIComponent(message);
    window.open(emailLink, '_blank');
  } else {
    // Display error alert if any of the fields is empty
    Swal.fire({
      icon: 'error',
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