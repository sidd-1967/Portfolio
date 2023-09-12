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




