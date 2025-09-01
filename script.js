// Smooth scroll
const links = document.querySelectorAll(".nav-links a");
links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector(link.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Fade-in on scroll
const faders = document.querySelectorAll(".fade-in");
const appearOptions = { threshold: 0.2 };
const appearOnScroll = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.style.animation = "fadeInUp 1s forwards";
    observer.unobserve(entry.target);
  });
}, appearOptions);
faders.forEach((fader) => appearOnScroll.observe(fader));

// Lightbox functionality
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.querySelector(".lightbox-content");
const triggers = document.querySelectorAll(".lightbox-trigger");
const closeBtn = document.querySelector(".lightbox .close");

triggers.forEach((img) => {
  img.addEventListener("click", () => {
    lightbox.style.display = "flex";
    lightboxImg.src = img.src;
  });
});

closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
});

lightbox.addEventListener("click", (e) => {
  if (e.target !== lightboxImg) lightbox.style.display = "none";
});
