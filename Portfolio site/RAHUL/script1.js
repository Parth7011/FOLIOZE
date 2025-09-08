// Animate skills on scroll
const skillBars = document.querySelectorAll('.skill-fill');
const timelineItems = document.querySelectorAll('.timeline-item');

function animateSkills() {
  skillBars.forEach(bar => {
    const barTop = bar.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (barTop < windowHeight - 50) {
      bar.style.width = bar.dataset.skill;
    }
  });
}

function animateTimeline() {
  timelineItems.forEach(item => {
    const itemTop = item.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (itemTop < windowHeight - 100) {
      item.classList.add('show');
    }
  });
}

window.addEventListener('scroll', () => {
  animateSkills();
  animateTimeline();

  // Show/hide scroll-to-top button
  if (window.scrollY > 300) {
    scrollTopBtn.style.display = "flex";
  } else {
    scrollTopBtn.style.display = "none";
  }
});

// Initial check on page load
document.addEventListener('DOMContentLoaded', () => {
  animateSkills();
  animateTimeline();
});

// ---------------- Smooth Scroll for nav links ----------------
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function(e) {
    if (this.getAttribute('href').startsWith('#')) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    }
  });
});

// ---------------- Scroll-to-top button ----------------
const scrollTopBtn = document.createElement("button");
scrollTopBtn.id = "scrollTopBtn";
scrollTopBtn.innerText = "↑";
document.body.appendChild(scrollTopBtn);

// Style (optional if not already in CSS)
scrollTopBtn.style.position = "fixed";
scrollTopBtn.style.bottom = "30px";
scrollTopBtn.style.right = "30px";
scrollTopBtn.style.background = "#3a2f2f";
scrollTopBtn.style.color = "white";
scrollTopBtn.style.border = "none";
scrollTopBtn.style.borderRadius = "50%";
scrollTopBtn.style.width = "45px";
scrollTopBtn.style.height = "45px";
scrollTopBtn.style.fontSize = "1.2rem";
scrollTopBtn.style.cursor = "pointer";
scrollTopBtn.style.display = "none";
scrollTopBtn.style.justifyContent = "center";
scrollTopBtn.style.alignItems = "center";
scrollTopBtn.style.boxShadow = "0 4px 10px rgba(0,0,0,0.2)";
scrollTopBtn.style.zIndex = "1000";

scrollTopBtn.addEventListener("mouseover", () => {
  scrollTopBtn.style.background = "#5a4545";
});
scrollTopBtn.addEventListener("mouseout", () => {
  scrollTopBtn.style.background = "#3a2f2f";
});

// Scroll smoothly to top when clicked
scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
