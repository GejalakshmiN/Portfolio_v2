// Create animated stars
function createStars() {
    const starsContainer = document.getElementById('stars');
    const numStars = 100;
    
    for (let i = 0; i < numStars; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        
        // Random position
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        
        // Random size
        const size = Math.random() * 3 + 1;
        star.style.width = size + 'px';
        star.style.height = size + 'px';
        
        // Random animation delay
        star.style.animationDelay = Math.random() * 3 + 's';
        
        starsContainer.appendChild(star);
    }
}

// Navigation functions
function showSection(sectionId) {
    // Hide home
    document.getElementById('home').style.display = 'none';
    
    // Hide all sections
    const sections = document.querySelectorAll('.page-section');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    
    // Show selected section
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
    }
}

function showHome() {
    // Hide all sections
    const sections = document.querySelectorAll('.page-section');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    
    // Show home
    document.getElementById('home').style.display = 'flex';
}

// Theme toggle functionality
function toggleTheme() {
    const body = document.body;
    const themeToggle = document.getElementById('themeToggle');
    
    body.classList.toggle('light-mode');
    
    if (body.classList.contains('light-mode')) {
        themeToggle.innerHTML = '🌙';
    } else {
        themeToggle.innerHTML = '☀️';
    }
}

// Smooth scrolling for better UX
document.addEventListener('DOMContentLoaded', function() {
    createStars();
    
    // Add some interactive effects
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 5px 15px rgba(255, 255, 255, 0.3)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.boxShadow = 'none';
        });
    });
});

// Add parallax effect to stars
document.addEventListener('mousemove', function(e) {
    const stars = document.querySelectorAll('.star');
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    
    stars.forEach((star, index) => {
        const speed = (index % 3 + 1) * 0.5;
        const newX = x * speed;
        const newY = y * speed;
        star.style.transform = `translate(${newX}px, ${newY}px)`;
    });
});