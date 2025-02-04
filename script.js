
// button



var swiper = new Swiper(".swiper", {
  slidesPerView: 5, /* Show 3 logos at a time */
  spaceBetween: 10, /* Space between logos */
  loop: true, /* Infinite scrolling */
  autoplay: {
    delay: 2000, /* Auto-scroll every 2 seconds */
    disableOnInteraction: false
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});



// navbar 


const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
                    
       menuToggle.addEventListener("click", () => {
       navLinks.classList.toggle("active");
 });
                      