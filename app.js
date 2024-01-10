let currentSlide = 0;

function showSlide(index) {
  const slides = document.getElementsByClassName("slide");

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[index].style.display = "block";
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % 3;
  showSlide(currentSlide);
}

// Initial setup
showSlide(currentSlide);

// Change slide every 3 seconds
setInterval(nextSlide, 3000);

//

gsap.fromTo(
  ".nav-container",
  { yPercent: -50, opacity: 0 },
  { yPercent: 0, opacity: 1, duration: 1, ease: "bounce.out" },
  ">"
);

gsap.fromTo(
  ".showcase",
  { opacity: 0, scale: 2 },
  {
    opacity: 1,
    stagger: 1,
    duration: 0.5,

    scale: 1,
  },
  ">"
);

gsap.fromTo(
  ".btn",
  { opacity: 0, scale: 2 },
  {
    opacity: 1,
    stagger: 1,
    duration: 0.5,

    scale: 1,
  },
  ">"
);
