// get the header element
const header = document.getElementById('header-bar');

// add an event listener to each anchor link
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    

    // get the target element's top position and subtract the header height
    const target = document.querySelector(this.getAttribute('href'));
    const headerHeight = header.offsetHeight;
    const targetTop = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;

    // smoothly scroll to the target element
    window.scrollTo({
      top: targetTop,
      behavior: 'smooth'
    });
  });
});

// Get the modal for zoomed images
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "src" attribute as the content of the modal
var modalImg = document.getElementById("modalImg");
function openModal(imgSrc) {
  modal.style.display = "block";
  modalImg.src = imgSrc;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
modal.onclick = function() { 
  modal.style.display = "none";
}
