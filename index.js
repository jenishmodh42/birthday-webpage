/* ============================================
   HOME PAGE JAVASCRIPT
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {
    initializeHero();
    initializeMusic();
    initializeBalloons();
    initializeConfetti();
});

function initializeHero() {
    // Set hero image
    const heroImg = document.getElementById('hero-img');
    if (heroImg) {
        heroImg.src = encodeURI("images/photo 3.jpeg");
    }
    
    // Display current date
    const currentDate = document.getElementById('current-date');
    if (currentDate) {
        const today = new Date();
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        currentDate.textContent = today.toLocaleDateString('en-US', options);
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
        backgroundMusic.muted = false;
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
    backgroundMusic.preload = 'auto';
    backgroundMusic.load();
    playMusic();
    setTimeout(playMusic, 600);
    window.addEventListener('load', playMusic, { once: true });
    document.addEventListener('visibilitychange', function() {
        if (!document.hidden) {
            playMusic();
        }
    });

    ['click', 'touchstart', 'keydown', 'pointerdown', 'scroll'].forEach(function(eventName) {
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

function initializeConfetti() {
    const confettiContainer = document.getElementById('confetti');
    if (!confettiContainer) return;
    
    setTimeout(createConfetti, 3500);
    
    function createConfetti() {
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
}

// Add floating elements
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

addFloatingHearts();
addSparkles();
