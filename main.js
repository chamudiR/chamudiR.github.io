// Initialize AOS
AOS.init({
  once: true,
  duration: 800,
  easing: "ease-out-cubic",
});

// Mobile Menu Toggle
const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");

menuToggle.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// Current Year
document.getElementById("current-year").textContent = new Date().getFullYear();

// Preloader
window.addEventListener("load", () => {
  const preloader = document.querySelector(".preloader");
  setTimeout(() => {
    preloader.classList.add("fade-out");
  }, 500);
});

// Custom Cursor
const cursor = document.querySelector(".custom-cursor");
const cursorDot = document.querySelector(".cursor-dot");

document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";

  cursorDot.style.left = e.clientX + "px";
  cursorDot.style.top = e.clientY + "px";
});

document.addEventListener("mousedown", () => {
  cursor.style.width = "15px";
  cursor.style.height = "15px";
  cursor.style.backgroundColor = "rgba(236, 72, 153, 0.6)";
});

document.addEventListener("mouseup", () => {
  cursor.style.width = "20px";
  cursor.style.height = "20px";
  cursor.style.backgroundColor = "rgba(236, 72, 153, 0.3)";
});

// Animate skill bars when in viewport
const skillBars = document.querySelectorAll(".skill-progress");

const animateSkillBars = () => {
  skillBars.forEach((bar, index) => {
    const targetWidth = bar.getAttribute("data-width");
    // Add a delay for each bar to create a staggered effect
    setTimeout(() => {
        bar.style.width = targetWidth;
    }, index * 150); // Stagger animation by 150ms for each bar
  });
};

// Trigger skill bar animation when skills section is in view
const skillsSection = document.getElementById("skills");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateSkillBars();
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.5 }
);

observer.observe(skillsSection);

// Typing animation for electronics-related text
const texts = [
  "Electronics Engineering Student",
  "Circuit Designer",
  "IoT Developer",
  "Embedded Systems Engineer",
];
let count = 0;
let index = 0;
let isDeleting = false;
let currentText = "";
let displayText = "";

function type() {
  currentText = texts[count];

  if (isDeleting) {
    displayText = currentText.slice(0, --index);
  } else {
    displayText = currentText.slice(0, ++index);
  }

  document.getElementById("typing-text").textContent = displayText;

  let speed = isDeleting ? 50 : 100;

  if (!isDeleting && displayText === currentText) {
    speed = 2000; // pause before deleting
    isDeleting = true;
  } else if (isDeleting && displayText === "") {
    isDeleting = false;
    count = (count + 1) % texts.length;
    speed = 500; // pause before typing next
  }

  setTimeout(type, speed);
}

window.onload = () => {
  setTimeout(type, 1000);
};

// Load project cards dynamically from JSON file
document.addEventListener("DOMContentLoaded", function () {
  fetch("project-details.json")
    .then((response) => response.json())
    .then((data) => {
      const container = document.querySelector("#project-container");
      container.innerHTML = ""; // Clear any default content
      
      data.projects.forEach((project) => {
        const tagSpans = project.technologies_used.tech_stack
          .map((tag) => `<span class="bg-pink-50 text-pink-700 text-xs px-2 py-1 rounded">${tag}</span>`)
          .join("");

        const card = `
          <div class="project-card bg-white rounded-xl overflow-hidden shadow-md" data-aos="fade-up" data-aos-delay="100">
            <div class="h-48 bg-gray-200 relative overflow-hidden img-hover-zoom">
              <img src="${project.image}" alt="${project.title}" class="w-full h-full object-cover" onerror="this.src='https://picsum.photos/800/600'" />
              <div class="absolute top-4 left-4 bg-rose-600 text-white text-xs px-2 py-1 rounded">${project.client.type}</div>
            </div>
            <div class="p-6">
              <h3 class="font-bold text-xl mb-2 font-playfair">${project.title}</h3>
              <p class="text-gray-600 mb-4">${project.short_description}</p>
              <div class="flex flex-wrap gap-2 mb-4">${tagSpans}</div>
              <a href="project-details.html?id=${project.id}" class="text-rose-600 hover:text-rose-700 flex items-center text-sm font-medium group">
                View Details
                <i class="fas fa-arrow-right ml-2 transform group-hover:translate-x-1 transition-transform"></i>
              </a>
            </div>
          </div>`;
        container.insertAdjacentHTML("beforeend", card);
      });
    })
    .catch((error) => {
      console.error("Error loading projects:", error);
      // Fallback to default content if JSON fails to load
      const container = document.querySelector("#project-container");
      container.innerHTML = `
        <div class="col-span-full text-center py-12">
          <i class="fas fa-exclamation-triangle text-4xl text-rose-600 mb-4"></i>
          <h3 class="text-xl font-semibold mb-2">Projects Loading</h3>
          <p class="text-gray-600">Please check your internet connection and refresh the page.</p>
        </div>
      `;
    });
});

// Add glow effect to electronics-related elements
const addGlowEffects = () => {
  const glowElements = document.querySelectorAll('.glow-effect');
  glowElements.forEach(element => {
    element.addEventListener('mouseenter', () => {
      element.style.boxShadow = '0 0 30px rgba(236, 72, 153, 0.5)';
    });
    element.addEventListener('mouseleave', () => {
      element.style.boxShadow = '0 0 20px rgba(236, 72, 153, 0.3)';
    });
  });
};

// Initialize glow effects
document.addEventListener('DOMContentLoaded', addGlowEffects);

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
}); 