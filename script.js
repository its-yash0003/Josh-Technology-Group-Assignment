  const video = document.getElementById("featureVideo");
  const playIcon = document.getElementById("playIcon");

  function togglePlay() {
    if (video.paused) {
      video.play();
      playIcon.style.opacity = "0";
    } else {
      video.pause();
      playIcon.style.opacity = "1";
    }
  }

  video.addEventListener("click", togglePlay);

  video.addEventListener("ended", () => {
    playIcon.style.opacity = "1";
  });




$(document).ready(function(){
    $('.testimonial-slider').slick({
      dots: true,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 5000,
      speed: 600,
      infinite: true,
      // pauseOnHover: true,
      adaptiveHeight: true
   });
});



  const form = document.getElementById('contactForm');
  const modal = document.getElementById('successModal');
  const closeBtn = document.querySelector('.close-btn');

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (form.checkValidity()) {
      modal.style.display = 'flex';
      form.reset(); 
    }
  });

  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  window.addEventListener('click', (e) => {
    if (e.target == modal) {
      modal.style.display = 'none';
    }
  });


  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navItems = document.querySelector('.nav-items');
  
  if (mobileMenuBtn && navItems) {
    mobileMenuBtn.addEventListener('click', function() {
      this.classList.toggle('change');
      navItems.classList.toggle('show');
    });
    
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        mobileMenuBtn.classList.remove('change');
        navItems.classList.remove('show');
      });
    });
  }