/* ============================================
   REASONS PAGE JAVASCRIPT
   ============================================ */

const loveReasons = [
    "Your beautiful smile brightens my every day",
    "The way you make me laugh until my stomach hurts",
    "Your kindness towards everyone you meet",
    "How you always know how to make me feel better",
    "The sound of your voice is my favorite melody",
    "Your strength and determination inspire me daily",
    "The way you look at me with so much love",
    "Your warm hugs that feel like home",
    "How you support my dreams unconditionally",
    "The little things you do to show you care",
    "Your intelligence and wisdom",
    "The way you make even ordinary moments special",
    "Your patience and understanding",
    "How you always put our family first",
    "Your sense of adventure and fun",
    "The way you love me flaws and all",
    "Your courage to face any challenge",
    "How you make me feel safe and protected",
    "Your generosity and big heart",
    "Simply because you are you - my everything"
];

document.addEventListener('DOMContentLoaded', function() {
    initializeReasons();
    initializeMusic();
    initializeFloatingElements();
});

function initializeReasons() {
    const reasonsGrid = document.getElementById('reasons-grid');
    if (!reasonsGrid) return;
    
    loveReasons.forEach((reason, index) => {
        const card = document.createElement('div');
        card.className = 'reason-card';
        
        const number = document.createElement('div');
        number.className = 'number';
        number.textContent = index + 1;
        
        const text = document.createElement('p');
        text.textContent = reason;
        
        card.appendChild(number);
        card.appendChild(text);
        reasonsGrid.appendChild(card);
    });
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
