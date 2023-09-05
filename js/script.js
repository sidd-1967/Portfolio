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



// JavaScript for the scroll to top button
const scrollToTopButton = document.getElementById("scrollToTop");

// Function to check if the user has scrolled down enough to show the button
function checkScroll() {
    if (window.pageYOffset > 100) {
        scrollToTopButton.classList.add("active");
    } else {
        scrollToTopButton.classList.remove("active");
    }
}

// Function to scroll to the top of the page when the button is clicked
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

// Add a scroll event listener to check when to show the button
window.addEventListener("scroll", checkScroll);

// Add a click event listener to scroll to the top when the button is clicked
scrollToTopButton.addEventListener("click", scrollToTop);
