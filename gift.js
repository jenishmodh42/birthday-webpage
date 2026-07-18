/* ============================================
   GIFT PAGE JAVASCRIPT
   ============================================ */

let giftOpened = false;
let fireworksActive = false;
let fireworks = [];
let voiceMusicVolume = null;
let giftSlideIndex = 0;
let giftSlideTimer = null;
let birthdayVoiceRequest = 0;
const femaleVoicePattern = /female|zira|samantha|aria|jenny|natasha|heera|susan|karen|serena|sonia|tessa|veena|moira|fiona/i;
const birthdayVoiceMessage = [
    "Happy Birthday, My Love.",
    "Today is all about celebrating the most amazing person in my life.",
    "Thank you for filling my world with love, happiness, and beautiful memories.",
    "Every moment with you is a gift, and every day I thank God for bringing you into my life.",
    "I promise to stand by your side, support you, make you smile, and love you through every chapter of our journey.",
    "You are my heart, my home, my happiness, and my forever.",
    "I hope all your dreams come true, because you deserve every happiness in the world.",
    "Happy Birthday once again, my love.",
    "I love you today, tomorrow, and forever."
].join(" ");

document.addEventListener('DOMContentLoaded', function() {
    initializeGift();
    initializeMusic();
    initializeFloatingElements();
    initializeFireworks();
    warmUpSpeechVoices();
});

function warmUpSpeechVoices() {
    if ('speechSynthesis' in window) {
        window.speechSynthesis.getVoices();
    }
}

function initializeGift() {
    const giftBtn = document.getElementById('gift-btn');
    const giftBox = document.getElementById('gift-box');
    const voiceReplayBtn = document.getElementById('voice-replay-btn');
    if (!giftBtn) return;
    
    giftBtn.addEventListener('click', function() {
        if (!giftOpened) {
            openGift();
        }
    });

    if (giftBox) {
        giftBox.addEventListener('click', function() {
            if (!giftOpened) {
                openGift();
            }
        });
    }

    if (voiceReplayBtn) {
        voiceReplayBtn.addEventListener('click', speakBirthdayMessage);
    }
}

function openGift() {
    giftOpened = true;
    
    const giftBox = document.getElementById('gift-box');
    const giftBtn = document.getElementById('gift-btn');
    const nextToFinal = document.getElementById('next-to-final');
    const surprisePanel = document.getElementById('gift-surprise-panel');
    
    // Open gift box
    if (giftBox) {
        giftBox.classList.add('opened');
    }
    
    // Change button text
    if (giftBtn) {
        giftBtn.innerHTML = '<span>❤️ Surprise Opened!</span>';
    }
    
    // Trigger confetti
    createConfetti();
    
    // Trigger fireworks
    startFireworks();

    if (surprisePanel) {
        surprisePanel.hidden = false;
        void surprisePanel.offsetHeight;
        surprisePanel.classList.add('active');
        setTimeout(function() {
            surprisePanel.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 350);
    }

    startGiftPhotoSlider();
    speakBirthdayMessage();
    
    // Show next button
    if (nextToFinal) {
        nextToFinal.style.display = 'inline-block';
    }
}

function startGiftPhotoSlider() {
    const slides = document.querySelectorAll('#gift-photo-slider .gift-slide');
    if (!slides.length || giftSlideTimer) return;

    slides.forEach(function(slide, index) {
        slide.classList.toggle('active', index === giftSlideIndex);
    });

    giftSlideTimer = setInterval(function() {
        slides[giftSlideIndex].classList.remove('active');
        giftSlideIndex = (giftSlideIndex + 1) % slides.length;
        slides[giftSlideIndex].classList.add('active');
    }, 2500);
}

function speakBirthdayMessage() {
    if (!('speechSynthesis' in window) || !('SpeechSynthesisUtterance' in window)) return;

    const requestId = ++birthdayVoiceRequest;
    window.speechSynthesis.cancel();

    waitForFemaleVoice(requestId, 0);
}

function waitForFemaleVoice(requestId, attempt) {
    if (requestId !== birthdayVoiceRequest) return;

    const voices = window.speechSynthesis.getVoices();
    const preferredVoice = getPreferredFemaleVoice(voices);

    if (preferredVoice || attempt >= 20) {
        playBirthdayVoice(preferredVoice, voices);
        return;
    }

    setTimeout(function() {
        waitForFemaleVoice(requestId, attempt + 1);
    }, 150);
}

function getPreferredFemaleVoice(voices) {
    return voices.find(function(voice) {
        return voice.lang === 'en-IN' && femaleVoicePattern.test(voice.name);
    }) || voices.find(function(voice) {
        return voice.lang && voice.lang.indexOf('en') === 0 && femaleVoicePattern.test(voice.name);
    });
}

function playBirthdayVoice(preferredVoice, voices) {
    const fallbackVoice = voices.find(function(voice) {
        return voice.lang === 'en-IN';
    }) || voices.find(function(voice) {
        return voice.lang && voice.lang.indexOf('en') === 0;
    });

    const backgroundMusic = document.getElementById('background-music');
    if (backgroundMusic && voiceMusicVolume === null) {
        voiceMusicVolume = backgroundMusic.volume;
    }

    const utterance = new SpeechSynthesisUtterance(birthdayVoiceMessage);

    if (preferredVoice) {
        utterance.voice = preferredVoice;
    } else if (fallbackVoice) {
        utterance.voice = fallbackVoice;
    }

    utterance.lang = preferredVoice ? preferredVoice.lang : (fallbackVoice ? fallbackVoice.lang : 'en-IN');
    utterance.rate = 0.88;
    utterance.pitch = preferredVoice ? 1.08 : 1.45;
    utterance.volume = 1;

    function restoreMusicVolume() {
        if (backgroundMusic && voiceMusicVolume !== null) {
            backgroundMusic.volume = voiceMusicVolume;
            voiceMusicVolume = null;
        }
    }

    if (backgroundMusic) {
        backgroundMusic.volume = Math.min(backgroundMusic.volume || 0.5, 0.18);
    }

    utterance.onend = restoreMusicVolume;
    utterance.onerror = restoreMusicVolume;
    window.speechSynthesis.speak(utterance);
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
