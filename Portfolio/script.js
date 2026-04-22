const words = [
  "Aspiring Software Developer",
  "Frontend Enthusiast",
  "Responsive Web Designer",
  "Fresher Ready for IT Jobs"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;
const typingText = document.getElementById("typing-text");

function typeEffect() {
  const currentWord = words[wordIndex];
  if (!deleting) {
    typingText.textContent = currentWord.substring(0, charIndex + 1);
    charIndex++;
    if (charIndex === currentWord.length) {
      deleting = true;
      setTimeout(typeEffect, 1200);
      return;
    }
  } else {
    typingText.textContent = currentWord.substring(0, charIndex - 1);
    charIndex--;
    if (charIndex === 0) {
      deleting = false;
      wordIndex = (wordIndex + 1) % words.length;
    }
  }
  setTimeout(typeEffect, deleting ? 45 : 85);
}
typeEffect();

const reveals = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    }
  });
}, { threshold: 0.15 });

reveals.forEach((item) => observer.observe(item));

const glow = document.querySelector(".cursor-glow");
document.addEventListener("mousemove", (e) => {
  if (!glow) return;
  glow.style.left = e.clientX + "px";
  glow.style.top = e.clientY + "px";
});

const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  const body = document.body;
  const isDark = body.classList.contains("dark-theme");
  body.classList.toggle("dark-theme", !isDark);
  body.classList.toggle("light-theme", isDark);
  themeToggle.textContent = isDark ? "🌙 Dark" : "☀️ Light";
});
