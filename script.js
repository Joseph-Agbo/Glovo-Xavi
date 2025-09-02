const paragraph = document.querySelector('#your-address');
const locationDiv = document.querySelector('.none');
const overlay = document.querySelector('.overlay');

paragraph.addEventListener('click', () => {
  if (locationDiv.style.display === 'none' || !locationDiv.style.display) {
    locationDiv.style.display = 'block';
    overlay.style.display = 'block';
  } else {
    locationDiv.style.display = 'none';
    overlay.style.display = 'none';
  }
});

const closeBtn = document.getElementById("close-location");

// When "X" is clicked, hide the location and overlay
closeBtn.addEventListener("click", function() {
  locationDiv.style.display = "none";
  document.querySelector(".overlay").style.display = "none";
});


    const fixedDiv = document.querySelector('.fixed');
    const header = document.querySelector('.headerdiv');
    const address = document.getElementById('your-address');

    window.addEventListener('scroll', () => {
      const headerRect = header.getBoundingClientRect();
      const addressRect = address.getBoundingClientRect();

      // Check if the address is overlapping the header
      const isTouching =
        addressRect.top <= headerRect.bottom &&
        addressRect.bottom >= headerRect.top;

      if (isTouching) {
        fixedDiv.style.display = 'block'; // Show when first touching
      }

      // Hide only when address completely leaves header area (above or below)
      if (addressRect.top > headerRect.bottom) {
        fixedDiv.style.display = 'none';
      }
    });

    // Event listener for the P tag inside the fixed div
const fixedP = fixedDiv.querySelector('#yourfont');

fixedP.addEventListener('click', () => {
  locationDiv.style.display = 'block'; // Show the location div when clicked
  overlay.style.display = 'block';
});





  