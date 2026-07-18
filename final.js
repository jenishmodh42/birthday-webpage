/* ============================================
   FINAL PAGE JAVASCRIPT
   ============================================ */

const husbandName = "ANAND";
const yourName = "NIRAL";

document.addEventListener('DOMContentLoaded', function() {
    initializeFinalMessage();
    initializeMusic();
    initializeBalloons();
    initializeFireworks();
    initializeConfetti();
    initializeFloatingElements();
});

function initializeFinalMessage() {
    const finalSubtitle = document.getElementById('final-subtitle');
    const footerName = document.getElementById('footer-name');
    
    if (finalSubtitle) {
        finalSubtitle.textContent = `Happy Birthday My King ${husbandName} 👑`;
    }
    
    if (footerName) {
        footerName.textContent = yourName;
    }
}

function initializeMusic() {
    const musicToggle = document.getElementById('music-toggle');
    const musicControls = document.getElementById('music-controls');
    const playBtn = document.getElementById('play-btn');
    const volumeSlider = document.getElementById('volume-slider');
    const backgroundMusic = document.getElementById('background-music');
    
    if (!musicToggle || !backgroundMusic) return;

    const playMusic = function() {
        const playPromise = backgroundMusic.play();
        if (playPromise) {
            playPromise.catch(function() {});
        }
    };
    
    musicToggle.addEventListener('click', function() {
        musicControls.classList.toggle('active');
    });
    
    if (playBtn) {
        playBtn.addEventListener('click', function() {
            playMusic();
        });
    }
    
    if (volumeSlider) {
        volumeSlider.addEventListener('input', function() {
            backgroundMusic.volume = this.value / 100;
        });
        backgroundMusic.volume = 0.5;
    }

    backgroundMusic.autoplay = true;
    playMusic();

    ['click', 'touchstart', 'keydown'].forEach(function(eventName) {
        document.addEventListener(eventName, playMusic, { once: true });
    });
}

function initializeBalloons() {
    const balloonsContainer = document.getElementById('balloons');
    if (!balloonsContainer) return;
    
    const balloonColors = ['🎈', '🎈', '🎈', '🎈', '🎈'];
    
    function createBalloon() {
        const balloon = document.createElement('div');
        balloon.className = 'balloon';
        balloon.textContent = balloonColors[Math.floor(Math.random() * balloonColors.length)];
        balloon.style.left = Math.random() * 100 + '%';
        balloon.style.animationDuration = (Math.random() * 10 + 10) + 's';
        balloon.style.animationDelay = Math.random() * 5 + 's';
        
        balloonsContainer.appendChild(balloon);
        
        setTimeout(function() {
            balloon.remove();
        }, 20000);
    }
    
    setInterval(createBalloon, 2000);
    
    for (let i = 0; i < 5; i++) {
        setTimeout(createBalloon, i * 500);
    }
}

let fireworksActive = false;
let fireworks = [];

function initializeFireworks() {
    const fireworksCanvas = document.getElementById('fireworks-canvas');
    if (!fireworksCanvas) return;
    
    fireworksCanvas.width = window.innerWidth;
    fireworksCanvas.height = window.innerHeight;
    
    window.addEventListener('resize', function() {
        fireworksCanvas.width = window.innerWidth;
        fireworksCanvas.height = window.innerHeight;
    });
    
    // Start fireworks after a delay
    setTimeout(startFireworks, 2000);
}

function startFireworks() {
    const fireworksCanvas = document.getElementById('fireworks-canvas');
    if (!fireworksCanvas) return;
    
    fireworksActive = true;
    fireworksCanvas.classList.add('active');
    
    // Create fireworks
    for (let i = 0; i < 5; i++) {
        setTimeout(createFirework, i * 500);
    }
    
    // Animate
    animateFireworks();
    
    // Continue creating fireworks periodically
    setInterval(createFirework, 3000);
}

function createFirework() {
    const fireworksCanvas = document.getElementById('fireworks-canvas');
    if (!fireworksCanvas) return;
    
    const fireworksCtx = fireworksCanvas.getContext('2d');
    const x = Math.random() * fireworksCanvas.width;
    const y = Math.random() * (fireworksCanvas.height / 2);
    const colors = ['#FFD700', '#FF4F81', '#8B0000', '#FFFFFF', '#FF6B35'];
    
    for (let i = 0; i < 50; i++) {
        fireworks.push({
            x: x,
            y: y,
            vx: (Math.random() - 0.5) * 10,
            vy: (Math.random() - 0.5) * 10,
            color: colors[Math.floor(Math.random() * colors.length)],
            alpha: 1,
            life: 100
        });
    }
}

function animateFireworks() {
    const fireworksCanvas = document.getElementById('fireworks-canvas');
    if (!fireworksCanvas) return;
    
    if (!fireworksActive) return;
    
    const fireworksCtx = fireworksCanvas.getContext('2d');
    fireworksCtx.clearRect(0, 0, fireworksCanvas.width, fireworksCanvas.height);
    
    fireworks = fireworks.filter(particle => particle.life > 0);
    
    fireworks.forEach(particle => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.vy += 0.1;
        particle.alpha -= 0.01;
        particle.life--;
        
        fireworksCtx.beginPath();
        fireworksCtx.arc(particle.x, particle.y, 3, 0, Math.PI * 2);
        fireworksCtx.fillStyle = particle.color;
        fireworksCtx.globalAlpha = particle.alpha;
        fireworksCtx.fill();
    });
    
    fireworksCtx.globalAlpha = 1;
    
    requestAnimationFrame(animateFireworks);
}

function initializeConfetti() {
    const confettiContainer = document.getElementById('confetti');
    if (!confettiContainer) return;
    
    // Initial confetti
    setTimeout(createConfetti, 1000);
    
    // Continue confetti periodically
    setInterval(createConfetti, 10000);
}

function createConfetti() {
    const confettiContainer = document.getElementById('confetti');
    if (!confettiContainer) return;
    
    const colors = ['#FFD700', '#FF4F81', '#8B0000', '#FFFFFF', '#FF6B35'];
    
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';
        confetti.style.animationDelay = Math.random() * 2 + 's';
        
        confettiContainer.appendChild(confetti);
        
        setTimeout(function() {
            confetti.remove();
        }, 5000);
    }
}

function initializeFloatingElements() {
    addFloatingHearts();
    addSparkles();
    addParticles();
    addRosePetals();
}

function addFloatingHearts() {
    const heartsContainer = document.querySelector('.hearts');
    if (!heartsContainer) return;
    
    for (let i = 0; i < 10; i++) {
        const heart = document.createElement('div');
        heart.textContent = '❤️';
        heart.style.position = 'absolute';
        heart.style.left = Math.random() * 100 + '%';
        heart.style.fontSize = (Math.random() * 20 + 20) + 'px';
        heart.style.animation = `floatHeart ${Math.random() * 10 + 10}s linear infinite`;
        heart.style.animationDelay = Math.random() * 5 + 's';
        heart.style.opacity = '0.6';
        
        heartsContainer.appendChild(heart);
    }
}

function addSparkles() {
    const sparklesContainer = document.querySelector('.sparkles');
    if (!sparklesContainer) return;
    
    for (let i = 0; i < 10; i++) {
        const sparkle = document.createElement('div');
        sparkle.textContent = '✨';
        sparkle.style.position = 'absolute';
        sparkle.style.left = Math.random() * 100 + '%';
        sparkle.style.top = Math.random() * 100 + '%';
        sparkle.style.fontSize = (Math.random() * 15 + 15) + 'px';
        sparkle.style.animation = `sparkle ${Math.random() * 3 + 2}s linear infinite`;
        sparkle.style.animationDelay = Math.random() * 3 + 's';
        
        sparklesContainer.appendChild(sparkle);
    }
}

function addParticles() {
    const particlesContainer = document.querySelector('.particles');
    if (!particlesContainer) return;
    
    for (let i = 0; i < 10; i++) {
        const particle = document.createElement('div');
        particle.textContent = '';
        particle.style.position = 'absolute';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.width = '10px';
        particle.style.height = '10px';
        particle.style.background = '#FFD700';
        particle.style.borderRadius = '50%';
        particle.style.animation = `particle ${Math.random() * 12 + 10}s linear infinite`;
        particle.style.animationDelay = Math.random() * 5 + 's';
        particle.style.boxShadow = '0 0 10px #FFD700';
        
        particlesContainer.appendChild(particle);
    }
}

function addRosePetals() {
    const rosePetalsContainer = document.querySelector('.rose-petals');
    if (!rosePetalsContainer) return;
    
    for (let i = 0; i < 10; i++) {
        const petal = document.createElement('div');
        petal.textContent = '🌸';
        petal.style.position = 'absolute';
        petal.style.left = Math.random() * 100 + '%';
        petal.style.fontSize = '35px';
        petal.style.animation = `petal ${Math.random() * 20 + 15}s linear infinite`;
        petal.style.animationDelay = Math.random() * 7 + 's';
        petal.style.opacity = '0.5';
        
        rosePetalsContainer.appendChild(petal);
    }
}
