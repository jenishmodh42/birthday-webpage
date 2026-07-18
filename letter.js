/* ============================================
   LETTER PAGE JAVASCRIPT
   ============================================ */

const yourName = "NIRAL";

const loveLetter = `Happy Birthday My Love,

Thank you for always making my life beautiful.
You are my happiness.
You are my peace.
You are my home.

I wish your every dream comes true.
I love you forever.

Love,
${yourName} ❤️`;

document.addEventListener('DOMContentLoaded', function() {
    initializeLoveLetter();
    initializeMusic();
    initializeFloatingElements();
});

function initializeLoveLetter() {
    const letterContent = document.getElementById('letter-content');
    const letterSignature = document.getElementById('letter-signature');
    
    if (!letterContent) return;
    
    // Set signature
    if (letterSignature) {
        letterSignature.textContent = yourName + ' ❤️';
    }
    
    // Typing animation
    let index = 0;
    const typingSpeed = 50;
    
    function typeLetter() {
        if (index < loveLetter.length) {
            letterContent.textContent += loveLetter.charAt(index);
            index++;
            setTimeout(typeLetter, typingSpeed);
        }
    }
    
    // Start typing immediately
    typeLetter();
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
