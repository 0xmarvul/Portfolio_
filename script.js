// Matrix Rain Effect - MORE VISIBLE BUT STILL CALM
const canvas = document.getElementById('matrix-canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const matrixChars = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const fontSize = 14;
const columns = canvas.width / fontSize;
const drops = [];

for (let i = 0; i < columns; i++) {
    drops[i] = Math.random() * -100;
}

function drawMatrix() {
    ctx.fillStyle = 'rgba(10, 10, 10, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Made it more visible - added some transparency variation
    ctx.fillStyle = 'rgba(77, 184, 184, 0.8)'; // More visible cyan with 80% opacity
    ctx.font = fontSize + 'px monospace';
    
    for (let i = 0; i < drops.length; i++) {
        const char = matrixChars[Math.floor(Math.random() * matrixChars.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;
        
        // Add gradient effect - brighter at the head
        const gradient = ctx.createLinearGradient(x, y - 20, x, y);
        gradient.addColorStop(0, 'rgba(77, 184, 184, 0)');
        gradient.addColorStop(0.5, 'rgba(77, 184, 184, 0.8)');
        gradient.addColorStop(1, 'rgba(77, 184, 184, 1)');
        ctx.fillStyle = gradient;
        
        ctx.fillText(char, x, y);
        
        if (y > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }
        drops[i]++;
    }
}

setInterval(drawMatrix, 50);

// Resize canvas on window resize
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    // Reinitialize drops array
    drops.length = 0;
    const newColumns = canvas.width / fontSize;
    for (let i = 0; i < newColumns; i++) {
        drops[i] = Math.random() * -100;
    }
});

// Smooth Scroll Navigation
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

// Glitch Effect on Hero Title
const glitchText = document.querySelector('.glitch-text');
let glitchInterval;

function triggerGlitch() {
    let iterations = 0;
    const maxIterations = 10;
    
    glitchInterval = setInterval(() => {
        if (iterations >= maxIterations) {
            clearInterval(glitchInterval);
            return;
        }
        
        const offset = Math.random() * 4 - 2;
        glitchText.style.transform = `translate(${offset}px, ${offset}px)`;
        
        setTimeout(() => {
            glitchText.style.transform = 'translate(0, 0)';
        }, 50);
        
        iterations++;
    }, 100);
}

// Trigger glitch effect every 5 seconds
setInterval(triggerGlitch, 5000);

// Calculate Bug Bounty Duration
function calculateDuration() {
    const startDate = new Date('2025-08-01');
    const currentDate = new Date();
    
    const diffTime = Math.abs(currentDate - startDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    const months = Math.floor(diffDays / 30);
    const days = diffDays % 30;
    
    let durationText = '';
    if (months > 0) {
        durationText = `${months} Month${months > 1 ? 's' : ''}`;
        if (days > 0) {
            durationText += ` ${days} Day${days > 1 ? 's' : ''}`;
        }
    } else {
        durationText = `${days} Day${days > 1 ? 's' : ''}`;
    }
    
    const durationElement = document.getElementById('hunting-duration');
    if (durationElement) {
        durationElement.textContent = durationText;
    }
}

// Calculate duration on page load
calculateDuration();

// Update duration every hour
setInterval(calculateDuration, 3600000);

// Fade-in Animation on Scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all fade-in elements
document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});

// Typing Effect for Subtitle
const typingText = document.querySelector('.typing-text');
if (typingText) {
    const originalText = typingText.textContent;
    typingText.textContent = '';
    let charIndex = 0;
    
    function typeChar() {
        if (charIndex < originalText.length) {
            typingText.textContent += originalText.charAt(charIndex);
            charIndex++;
            setTimeout(typeChar, 100);
        }
    }
    
    // Start typing after a short delay
    setTimeout(typeChar, 500);
}

// Add glitch effect to section titles on hover
document.querySelectorAll('.section-title').forEach(title => {
    title.addEventListener('mouseenter', () => {
        let iterations = 0;
        const interval = setInterval(() => {
            if (iterations >= 5) {
                clearInterval(interval);
                return;
            }
            
            const offset = Math.random() * 3 - 1.5;
            title.style.transform = `translate(${offset}px, ${offset}px)`;
            
            setTimeout(() => {
                title.style.transform = 'translate(0, 0)';
            }, 50);
            
            iterations++;
        }, 80);
    });
});

// Random glitch effect on stat cards - WITH CALMER COLORS
const statCards = document.querySelectorAll('.stat-card');
setInterval(() => {
    const randomCard = statCards[Math.floor(Math.random() * statCards.length)];
    if (randomCard) {
        randomCard.style.borderColor = '#b84db8';
        setTimeout(() => {
            randomCard.style.borderColor = '#4db8b8';
        }, 200);
    }
}, 3000);

// Add CRT flicker effect
let flickerTimeout;
function flickerScreen() {
    const crtEffect = document.querySelector('.crt-effect');
    if (crtEffect && Math.random() > 0.95) {
        crtEffect.style.opacity = '0.8';
        setTimeout(() => {
            crtEffect.style.opacity = '1';
        }, 50);
    }
}

setInterval(flickerScreen, 100);

// Console Easter Egg - WITH CALMER COLORS
console.log('%c' + `
╔══════════════════════════════════════╗
║                                      ║
║     Welcome to 0xmarvul's Domain    ║
║                                      ║
║   Cybersecurity & Bug Bounty Hunter  ║
║                                      ║
║   "Hack the planet, secure the web"  ║
║                                      ║
╚══════════════════════════════════════╝
`, 'color: #4db8b8; font-family: monospace; font-size: 14px;');

console.log('%cLooking for something? 👀', 'color: #b84db8; font-size: 16px; font-weight: bold;');
console.log('%cLet\'s connect: marwankhodair0@gmail.com', 'color: #4db84d; font-size: 14px;');
