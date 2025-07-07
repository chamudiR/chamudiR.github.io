// Legacy JavaScript for older browsers
(function() {
    'use strict';

    // Initialize AOS for older browsers
    if (typeof AOS !== 'undefined') {
        AOS.init({
            once: true,
            duration: 800,
            easing: "ease-out-cubic",
        });
    }

    // Mobile Menu Toggle
    var menuToggle = document.getElementById("menu-toggle");
    var mobileMenu = document.getElementById("mobile-menu");

    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener("click", function() {
            mobileMenu.classList.toggle("hidden");
        });
    }

    // Current Year
    var currentYearElement = document.getElementById("current-year");
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }

    // Preloader
    window.addEventListener("load", function() {
        var preloader = document.querySelector(".preloader");
        if (preloader) {
            setTimeout(function() {
                preloader.classList.add("fade-out");
            }, 500);
        }
    });

    // Custom Cursor
    var cursor = document.querySelector(".custom-cursor");
    var cursorDot = document.querySelector(".cursor-dot");

    if (cursor && cursorDot) {
        document.addEventListener("mousemove", function(e) {
            cursor.style.left = e.clientX + "px";
            cursor.style.top = e.clientY + "px";

            cursorDot.style.left = e.clientX + "px";
            cursorDot.style.top = e.clientY + "px";
        });

        document.addEventListener("mousedown", function() {
            cursor.style.width = "15px";
            cursor.style.height = "15px";
            cursor.style.backgroundColor = "rgba(236, 72, 153, 0.6)";
        });

        document.addEventListener("mouseup", function() {
            cursor.style.width = "20px";
            cursor.style.height = "20px";
            cursor.style.backgroundColor = "rgba(236, 72, 153, 0.3)";
        });
    }

    // Animate skill bars when in viewport
    var skillBars = document.querySelectorAll(".skill-progress");

    function animateSkillBars() {
        skillBars.forEach(function(bar, index) {
            var targetWidth = bar.getAttribute("data-width");
            // Add a delay for each bar to create a staggered effect
            setTimeout(function() {
                bar.style.width = targetWidth;
            }, index * 150); // Stagger animation by 150ms for each bar
        });
    }

    // Trigger skill bar animation when skills section is in view
    var skillsSection = document.getElementById("skills");

    if (skillsSection && 'IntersectionObserver' in window) {
        var observer = new IntersectionObserver(
            function(entries) {
                entries.forEach(function(entry) {
                    if (entry.isIntersecting) {
                        animateSkillBars();
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.5 }
        );

        observer.observe(skillsSection);
    } else {
        // Fallback for older browsers
        setTimeout(animateSkillBars, 500);
    }

    // Typing animation for electronics-related text
    var texts = [
        "Electronics Engineering Student",
        "Circuit Designer",
        "IoT Developer",
        "Embedded Systems Engineer",
    ];
    var count = 0;
    var index = 0;
    var isDeleting = false;
    var currentText = "";
    var displayText = "";

    function type() {
        currentText = texts[count];

        if (isDeleting) {
            displayText = currentText.slice(0, --index);
        } else {
            displayText = currentText.slice(0, ++index);
        }

        var typingElement = document.getElementById("typing-text");
        if (typingElement) {
            typingElement.textContent = displayText;
        }

        var speed = isDeleting ? 50 : 100;

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

    window.onload = function() {
        setTimeout(type, 1000);
    };

    // Load project cards dynamically
    document.addEventListener("DOMContentLoaded", function() {
        var projects = [
            {
                id: 1,
                title: "Smart Home IoT System",
                short_description: "Designed and implemented a comprehensive IoT system for home automation using ESP32 microcontrollers and various sensors.",
                image: "./resources/projects/smart-home.jpg",
                client: { type: "Academic Project" },
                technologies_used: { tech_stack: ["ESP32", "Arduino", "MQTT", "Node.js", "React"] }
            },
            {
                id: 2,
                title: "PCB Design for Audio Amplifier",
                short_description: "Created a custom PCB design for a high-fidelity audio amplifier with advanced filtering and power management.",
                image: "./resources/projects/audio-amp.jpg",
                client: { type: "Personal Project" },
                technologies_used: { tech_stack: ["KiCad", "Analog Design", "PCB Layout", "Audio Electronics"] }
            },
            {
                id: 3,
                title: "Solar Panel Monitoring System",
                short_description: "Developed a real-time monitoring system for solar panels with data logging and performance analytics.",
                image: "./resources/projects/solar-monitor.jpg",
                client: { type: "Research Project" },
                technologies_used: { tech_stack: ["Raspberry Pi", "Python", "SQLite", "Data Visualization"] }
            },
            {
                id: 4,
                title: "Gesture Control Robot",
                short_description: "Built a robot that responds to hand gestures using computer vision and Arduino-based motor control.",
                image: "./resources/projects/gesture-robot.jpg",
                client: { type: "Competition Entry" },
                technologies_used: { tech_stack: ["Arduino", "OpenCV", "Python", "Motor Control", "Sensors"] }
            },
            {
                id: 5,
                title: "Wireless Sensor Network",
                short_description: "Implemented a mesh network of wireless sensors for environmental monitoring in remote locations.",
                image: "./resources/projects/sensor-network.jpg",
                client: { type: "Research Project" },
                technologies_used: { tech_stack: ["LoRa", "Mesh Networking", "C++", "Low Power Design"] }
            },
            {
                id: 6,
                title: "Digital Signal Processing Module",
                short_description: "Designed a DSP module for real-time audio processing with FPGA implementation and custom algorithms.",
                image: "./resources/projects/dsp-module.jpg",
                client: { type: "Academic Project" },
                technologies_used: { tech_stack: ["FPGA", "VHDL", "DSP Algorithms", "MATLAB", "Verilog"] }
            }
        ];

        var container = document.querySelector("#project-container");
        if (container) {
            container.innerHTML = ""; // Clear any default content
            
            projects.forEach(function(project) {
                var tagSpans = project.technologies_used.tech_stack
                    .map(function(tag) {
                        return '<span class="bg-pink-50 text-pink-700 text-xs px-2 py-1 rounded">' + tag + '</span>';
                    })
                    .join("");

                var card = '<div class="project-card bg-white rounded-xl overflow-hidden shadow-md" data-aos="fade-up" data-aos-delay="100">' +
                    '<div class="h-48 bg-gray-200 relative overflow-hidden img-hover-zoom">' +
                    '<img src="' + project.image + '" alt="' + project.title + '" class="w-full h-full object-cover" onerror="this.src=\'./resources/img/default-project.jpg\'" />' +
                    '<div class="absolute top-4 left-4 bg-rose-600 text-white text-xs px-2 py-1 rounded">' + project.client.type + '</div>' +
                    '</div>' +
                    '<div class="p-6">' +
                    '<h3 class="font-bold text-xl mb-2 font-playfair">' + project.title + '</h3>' +
                    '<p class="text-gray-600 mb-4">' + project.short_description + '</p>' +
                    '<div class="flex flex-wrap gap-2 mb-4">' + tagSpans + '</div>' +
                    '<a href="#" class="text-rose-600 hover:text-rose-700 flex items-center text-sm font-medium group">' +
                    'View Details' +
                    '<i class="fas fa-arrow-right ml-2 transform group-hover:translate-x-1 transition-transform"></i>' +
                    '</a>' +
                    '</div>' +
                    '</div>';
                container.insertAdjacentHTML("beforeend", card);
            });
        }
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            var target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add glow effect to electronics-related elements
    function addGlowEffects() {
        var glowElements = document.querySelectorAll('.glow-effect');
        glowElements.forEach(function(element) {
            element.addEventListener('mouseenter', function() {
                element.style.boxShadow = '0 0 30px rgba(236, 72, 153, 0.5)';
            });
            element.addEventListener('mouseleave', function() {
                element.style.boxShadow = '0 0 20px rgba(236, 72, 153, 0.3)';
            });
        });
    }

    // Initialize glow effects
    document.addEventListener('DOMContentLoaded', addGlowEffects);

})(); 