/* ============================================
   PREMIUM ROMANTIC BIRTHDAY WEBSITE
   JavaScript - All Interactive Functionality
   ============================================ */

/* ============================================
   EDITABLE VARIABLES
   Change these values to customize the website
   ============================================ */

// Husband's name - used in hero and final message
const husbandName = "ANAND";

// Your name - used in footer and letter signature
const yourName = "NIRAL";

// Birthday date - format: YYYY-MM-DD (for countdown timer)
const birthday = "2026-07-19";

// Background music file path
const backgroundMusic = "music/Tum Ho Toh Subah Nayi Hai - Tum Ho Toh _ Saiyaara.mp3";

// Hero image path
const heroImage = encodeURI("images/photo 3.jpeg");

// Photo gallery images - add your photo paths here
const photos = [
    encodeURI("images/photo 1.jpeg"),
    encodeURI("images/photo 2.jpeg"),
    encodeURI("images/photo 3.jpeg"),
    encodeURI("images/photo 4.jpeg"),
    encodeURI("images/photo 5.jpeg"),
    encodeURI("images/photo 6.jpeg"),
    encodeURI("images/photo 7.jpeg"),
    encodeURI("images/photo 8.jpeg"),
    encodeURI("images/photo 9.jpeg"),
    encodeURI("images/photo 10.jpeg")
];

// 20 reasons why you love him - edit these messages
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

// Love letter content - write your personalized letter
const loveLetter = `Happy Birthday My Love,

Thank you for always making my life beautiful.
You are my happiness.
You are my peace.
You are my home.

I wish your every dream comes true.
I love you forever.

Love,
${yourName} ❤️`;

/* ============================================
   DOM ELEMENTS
   ============================================ */

// Loading screen
const loadingScreen = document.getElementById('loading-screen');

// Hero section
const heroImg = document.getElementById('hero-img');
const surpriseBtn = document.getElementById('surprise-btn');
const currentDate = document.getElementById('current-date');

// Music player
const musicPlayer = document.getElementById('music-player');
const musicToggle = document.getElementById('music-toggle');
const musicControls = document.getElementById('music-controls');
const playBtn = document.getElementById('play-btn');
const volumeSlider = document.getElementById('volume-slider');
const backgroundMusicElement = document.getElementById('background-music');

// Gallery
const gallerySlider = document.getElementById('gallery-slider');
const galleryPrev = document.getElementById('gallery-prev');
const galleryNext = document.getElementById('gallery-next');
const galleryDots = document.getElementById('gallery-dots');
const photoModal = document.getElementById('photo-modal');
const modalImage = document.getElementById('modal-image');
const modalClose = document.getElementById('modal-close');

// Timeline
const timelineItems = document.querySelectorAll('.timeline-item');

// Reasons
const reasonsGrid = document.getElementById('reasons-grid');

// Cake
const blowBtn = document.getElementById('blow-btn');
const flames = [
    document.getElementById('flame1'),
    document.getElementById('flame2'),
    document.getElementById('flame3')
];

// Balloons
const balloonsContainer = document.getElementById('balloons');

// Fireworks
const fireworksCanvas = document.getElementById('fireworks-canvas');
const fireworksCtx = fireworksCanvas.getContext('2d');

// Confetti
const confettiContainer = document.getElementById('confetti');

// Love letter
const letterContent = document.getElementById('letter-content');
const letterSignature = document.getElementById('letter-signature');

// Countdown
const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');

// Gift
const giftBox = document.getElementById('gift-box');
const giftBtn = document.getElementById('gift-btn');

// Final message
const finalTitle = document.getElementById('final-title');
const finalSubtitle = document.getElementById('final-subtitle');
const footerName = document.getElementById('footer-name');

/* ============================================
   INITIALIZATION
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all features
    initializeHero();
    initializeMusic();
    initializeGallery();
    initializeTimeline();
    initializeReasons();
    initializeCake();
    initializeBalloons();
    initializeFireworks();
    initializeConfetti();
    initializeLoveLetter();
    initializeCountdown();
    initializeGift();
    initializeFinalMessage();
});

/* ============================================
   1. HERO SECTION
   ============================================ */

function initializeHero() {
    // Set hero image
    heroImg.src = heroImage;
    
    // Display current date
    const today = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    currentDate.textContent = today.toLocaleDateString('en-US', options);
    
    // Surprise button scroll
    surpriseBtn.addEventListener('click', function() {
        document.getElementById('gallery').scrollIntoView({ behavior: 'smooth' });
    });
}

/* ============================================
   2. MUSIC PLAYER
   ============================================ */

function initializeMusic() {
    let isPlaying = false;

    const playMusic = function() {
        const playPromise = backgroundMusicElement.play();
        if (playPromise) {
            playPromise.catch(function() {});
        }
    };
    
    // Toggle music controls
    musicToggle.addEventListener('click', function() {
        musicControls.classList.toggle('active');
    });
    
    // Play button
    playBtn.addEventListener('click', function() {
        playMusic();
        isPlaying = true;
    });
    
    // Volume slider
    volumeSlider.addEventListener('input', function() {
        backgroundMusicElement.volume = this.value / 100;
    });
    
    // Set initial volume
    backgroundMusicElement.volume = 0.5;

    backgroundMusicElement.autoplay = true;
    playMusic();

    ['click', 'touchstart', 'keydown'].forEach(function(eventName) {
        document.addEventListener(eventName, function() {
            playMusic();
            isPlaying = true;
        }, { once: true });
    });
}

/* ============================================
   3. PHOTO GALLERY
   ============================================ */

let currentSlide = 0;
let slideInterval;

function initializeGallery() {
    // Create slides
    photos.forEach((photo, index) => {
        const slide = document.createElement('div');
        slide.className = 'gallery-slide' + (index === 0 ? ' active' : '');
        
        const img = document.createElement('img');
        img.src = photo;
        img.alt = `Photo ${index + 1}`;
        img.addEventListener('click', function() {
            openModal(photo);
        });
        
        slide.appendChild(img);
        gallerySlider.appendChild(slide);
        
        // Create dot
        const dot = document.createElement('div');
        dot.className = 'dot' + (index === 0 ? ' active' : '');
        dot.addEventListener('click', function() {
            goToSlide(index);
        });
        galleryDots.appendChild(dot);
    });
    
    // Navigation buttons
    galleryPrev.addEventListener('click', function() {
        goToSlide(currentSlide - 1);
    });
    
    galleryNext.addEventListener('click', function() {
        goToSlide(currentSlide + 1);
    });
    
    // Auto slide
    startSlideShow();
    
    // Pause on hover
    gallerySlider.addEventListener('mouseenter', stopSlideShow);
    gallerySlider.addEventListener('mouseleave', startSlideShow);
    
    // Modal close
    modalClose.addEventListener('click', closeModal);
    photoModal.addEventListener('click', function(e) {
        if (e.target === photoModal) {
            closeModal();
        }
    });
}

function goToSlide(index) {
    const slides = document.querySelectorAll('.gallery-slide');
    const dots = document.querySelectorAll('.dot');
    
    // Remove active class
    slides[currentSlide].classList.remove('active');
    dots[currentSlide].classList.remove('active');
    
    // Update index
    if (index < 0) {
        currentSlide = slides.length - 1;
    } else if (index >= slides.length) {
        currentSlide = 0;
    } else {
        currentSlide = index;
    }
    
    // Add active class
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
}

function startSlideShow() {
    slideInterval = setInterval(function() {
        goToSlide(currentSlide + 1);
    }, 4000);
}

function stopSlideShow() {
    clearInterval(slideInterval);
}

function openModal(src) {
    modalImage.src = src;
    photoModal.classList.add('active');
}

function closeModal() {
    photoModal.classList.remove('active');
}

/* ============================================
   4. TIMELINE ANIMATION
   ============================================ */

function initializeTimeline() {
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.2 });
    
    timelineItems.forEach(item => {
        observer.observe(item);
    });
}

/* ============================================
   5. REASONS I LOVE YOU
   ============================================ */

function initializeReasons() {
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

/* ============================================
   6. BIRTHDAY CAKE
   ============================================ */

let candlesBlown = false;

function initializeCake() {
    blowBtn.addEventListener('click', function() {
        if (!candlesBlown) {
            blowCandles();
        }
    });
}

function blowCandles() {
    candlesBlown = true;
    
    // Turn off flames
    flames.forEach(flame => {
        flame.classList.add('off');
    });
    
    // Change button text
    blowBtn.innerHTML = '<span>✨ Wish Made!</span>';
    
    // Trigger confetti
    createConfetti();
    
    // Trigger fireworks
    startFireworks();
    
    // Play celebration sound (optional - add your sound file)
    // const celebrationSound = new Audio('music/celebration.mp3');
    // celebrationSound.play();
}

/* ============================================
   7. BALLOONS
   ============================================ */

function initializeBalloons() {
    const balloonColors = ['🎈', '🎈', '🎈', '🎈', '🎈'];
    
    function createBalloon() {
        const balloon = document.createElement('div');
        balloon.className = 'balloon';
        balloon.textContent = balloonColors[Math.floor(Math.random() * balloonColors.length)];
        balloon.style.left = Math.random() * 100 + '%';
        balloon.style.animationDuration = (Math.random() * 10 + 10) + 's';
        balloon.style.animationDelay = Math.random() * 5 + 's';
        
        balloonsContainer.appendChild(balloon);
        
        // Remove balloon after animation
        setTimeout(function() {
            balloon.remove();
        }, 20000);
    }
    
    // Create balloons periodically
    setInterval(createBalloon, 2000);
    
    // Create initial balloons
    for (let i = 0; i < 5; i++) {
        setTimeout(createBalloon, i * 500);
    }
}

/* ============================================
   8. FIREWORKS
   ============================================ */

let fireworksActive = false;
let fireworks = [];

function initializeFireworks() {
    fireworksCanvas.width = window.innerWidth;
    fireworksCanvas.height = window.innerHeight;
    
    window.addEventListener('resize', function() {
        fireworksCanvas.width = window.innerWidth;
        fireworksCanvas.height = window.innerHeight;
    });
}

function startFireworks() {
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
    fireworksActive = false;
    fireworksCanvas.classList.remove('active');
    fireworks = [];
}

function createFirework() {
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
    if (!fireworksActive) return;
    
    fireworksCtx.clearRect(0, 0, fireworksCanvas.width, fireworksCanvas.height);
    
    fireworks = fireworks.filter(particle => particle.life > 0);
    
    fireworks.forEach(particle => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.vy += 0.1; // gravity
        particle.alpha -= 0.01;
        particle.life--;
        
        fireworksCtx.beginPath();
        fireworksCtx.arc(particle.x, particle.y, 3, 0, Math.PI * 2);
        fireworksCtx.fillStyle = particle.color;
        fireworksCtx.globalAlpha = particle.alpha;
        fireworksCtx.fill();
    });
    
    fireworksCtx.globalAlpha = 1;
    
    // Continue creating fireworks
    if (Math.random() < 0.05) {
        createFirework();
    }
    
    requestAnimationFrame(animateFireworks);
}

/* ============================================
   9. CONFETTI
   ============================================ */

function initializeConfetti() {
    // Initial confetti on page load
    setTimeout(createConfetti, 3500);
}

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
        
        // Remove confetti after animation
        setTimeout(function() {
            confetti.remove();
        }, 5000);
    }
}

/* ============================================
   10. LOVE LETTER
   ============================================ */

function initializeLoveLetter() {
    // Set signature
    letterSignature.textContent = yourName + ' ❤️';
    
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
    
    // Start typing when letter section is visible
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting && index === 0) {
                typeLetter();
            }
        });
    }, { threshold: 0.5 });
    
    observer.observe(document.getElementById('love-letter'));
}

/* ============================================
   11. COUNTDOWN TIMER
   ============================================ */

function initializeCountdown() {
    updateCountdown();
    setInterval(updateCountdown, 1000);
}

function updateCountdown() {
    const now = new Date();
    const currentYear = now.getFullYear();
    let birthdayDate = new Date(birthday);
    
    // If birthday has passed this year, count to next year
    if (birthdayDate < now) {
        birthdayDate.setFullYear(currentYear + 1);
    }
    
    const diff = birthdayDate - now;
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    
    daysElement.textContent = String(days).padStart(2, '0');
    hoursElement.textContent = String(hours).padStart(2, '0');
    minutesElement.textContent = String(minutes).padStart(2, '0');
    secondsElement.textContent = String(seconds).padStart(2, '0');
}

/* ============================================
   12. SURPRISE GIFT
   ============================================ */

let giftOpened = false;

function initializeGift() {
    giftBtn.addEventListener('click', function() {
        if (!giftOpened) {
            openGift();
        }
    });
}

function openGift() {
    giftOpened = true;
    
    // Open gift box
    giftBox.classList.add('opened');
    
    // Change button text
    giftBtn.innerHTML = '<span>❤️ Surprise Opened!</span>';
    
    // Trigger confetti
    createConfetti();
    
    // Trigger fireworks
    startFireworks();
    
    // Scroll to final message
    setTimeout(function() {
        document.getElementById('final-message').scrollIntoView({ behavior: 'smooth' });
    }, 1000);
}

/* ============================================
   13. FINAL MESSAGE
   ============================================ */

function initializeFinalMessage() {
    // Set husband's name in final message
    finalSubtitle.textContent = `Happy Birthday My King ${husbandName} 👑`;
    
    // Set your name in footer
    footerName.textContent = yourName;
}

/* ============================================
   ADDITIONAL FLOATING ELEMENTS
   ============================================ */

// Add more floating hearts dynamically
function addFloatingHearts() {
    const heartsContainer = document.querySelector('.hearts');
    
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

// Add more sparkles dynamically
function addSparkles() {
    const sparklesContainer = document.querySelector('.sparkles');
    
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

// Initialize additional floating elements
addFloatingHearts();
addSparkles();

/* ============================================
   SMOOTH SCROLL FOR ALL SECTIONS
   ============================================ */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

/* ============================================
   KEYBOARD NAVIGATION
   ============================================ */

document.addEventListener('keydown', function(e) {
    // Escape key to close modal
    if (e.key === 'Escape') {
        closeModal();
    }
    
    // Arrow keys for gallery
    if (e.key === 'ArrowLeft') {
        goToSlide(currentSlide - 1);
    }
    
    if (e.key === 'ArrowRight') {
        goToSlide(currentSlide + 1);
    }
});

/* ============================================
   END OF SCRIPT
   ============================================ */
