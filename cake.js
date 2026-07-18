/* ============================================
   CAKE PAGE JAVASCRIPT
   ============================================ */

let candlesBlown = false;
let fireworksActive = false;
let fireworks = [];
let cakeSlideIndex = 0;
let cakeSlideTimer = null;

document.addEventListener('DOMContentLoaded', function() {
    initializeCake();
    initializeMusic();
    initializeFloatingElements();
    initializeFireworks();
});

function initializeCake() {
    const blowBtn = document.getElementById('blow-btn');
    if (!blowBtn) return;
    
    blowBtn.addEventListener('click', function() {
        if (!candlesBlown) {
            blowCandles();
        }
    });
}

function blowCandles() {
    candlesBlown = true;
    
    const flames = [
        document.getElementById('flame1'),
        document.getElementById('flame2'),
        document.getElementById('flame3')
    ];
    
    // Turn off flames
    flames.forEach(flame => {
        if (flame) {
            flame.classList.add('off');
        }
    });
    
    // Change button text
    const blowBtn = document.getElementById('blow-btn');
    if (blowBtn) {
        blowBtn.innerHTML = '<span>✨ Wish Made!</span>';
    }
    
    // Trigger confetti
    createConfetti();
    
    // Trigger fireworks
    startFireworks();

    revealCakeMemories();
    
    // Show next button
    const nextToLetter = document.getElementById('next-to-letter');
    if (nextToLetter) {
        nextToLetter.style.display = 'inline-block';
    }
}

function revealCakeMemories() {
    const memoryPanel = document.getElementById('cake-memory-panel');

    if (memoryPanel) {
        memoryPanel.hidden = false;
        void memoryPanel.offsetHeight;
        memoryPanel.classList.add('active');
        setTimeout(function() {
            memoryPanel.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 350);
    }

    startCakePhotoSlider();
}

function startCakePhotoSlider() {
    const slides = document.querySelectorAll('#cake-photo-slider .cake-slide');
    if (!slides.length || cakeSlideTimer) return;

    slides.forEach(function(slide, index) {
        slide.classList.toggle('active', index === cakeSlideIndex);
    });

    cakeSlideTimer = setInterval(function() {
        slides[cakeSlideIndex].classList.remove('active');
        cakeSlideIndex = (cakeSlideIndex + 1) % slides.length;
        slides[cakeSlideIndex].classList.add('active');
    }, 2500);
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

function initializeFloatingElements() {
    addFloatingHearts();
    addSparkles();
}

function addFloatingHearts() {
    const heartsContainer = document.querySelector('.hearts');
    if (!heartsContainer) return;
    
    for (let i = 0; i < 5; i++) {
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
    
    for (let i = 0; i < 5; i++) {
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

function initializeFireworks() {
    const fireworksCanvas = document.getElementById('fireworks-canvas');
    if (!fireworksCanvas) return;
    
    fireworksCanvas.width = window.innerWidth;
    fireworksCanvas.height = window.innerHeight;
    
    window.addEventListener('resize', function() {
        fireworksCanvas.width = window.innerWidth;
        fireworksCanvas.height = window.innerHeight;
    });
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
    
    // Stop after 10 seconds
    setTimeout(stopFireworks, 10000);
}

function stopFireworks() {
    const fireworksCanvas = document.getElementById('fireworks-canvas');
    if (!fireworksCanvas) return;
    
    fireworksActive = false;
    fireworksCanvas.classList.remove('active');
    fireworks = [];
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
    
    if (Math.random() < 0.05) {
        createFirework();
    }
    
    requestAnimationFrame(animateFireworks);
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
