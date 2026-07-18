/* ============================================
   GALLERY PAGE JAVASCRIPT
   ============================================ */

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

let currentSlide = 0;
let slideInterval;

document.addEventListener('DOMContentLoaded', function() {
    initializeGallery();
    initializeMusic();
    initializeFloatingElements();
});

function initializeGallery() {
    const gallerySlider = document.getElementById('gallery-slider');
    const galleryPrev = document.getElementById('gallery-prev');
    const galleryNext = document.getElementById('gallery-next');
    const galleryDots = document.getElementById('gallery-dots');
    const photoModal = document.getElementById('photo-modal');
    const modalImage = document.getElementById('modal-image');
    const modalClose = document.getElementById('modal-close');
    
    if (!gallerySlider) return;
    
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
        if (galleryDots) {
            const dot = document.createElement('div');
            dot.className = 'dot' + (index === 0 ? ' active' : '');
            dot.addEventListener('click', function() {
                goToSlide(index);
            });
            galleryDots.appendChild(dot);
        }
    });
    
    // Navigation buttons
    if (galleryPrev) {
        galleryPrev.addEventListener('click', function() {
            goToSlide(currentSlide - 1);
        });
    }
    
    if (galleryNext) {
        galleryNext.addEventListener('click', function() {
            goToSlide(currentSlide + 1);
        });
    }
    
    // Auto slide
    startSlideShow();
    
    // Pause on hover
    gallerySlider.addEventListener('mouseenter', stopSlideShow);
    gallerySlider.addEventListener('mouseleave', startSlideShow);
    
    // Modal close
    if (modalClose) {
        modalClose.addEventListener('click', closeModal);
    }
    
    if (photoModal) {
        photoModal.addEventListener('click', function(e) {
            if (e.target === photoModal) {
                closeModal();
            }
        });
    }
}

function goToSlide(index) {
    const slides = document.querySelectorAll('.gallery-slide');
    const dots = document.querySelectorAll('.dot');
    
    if (slides.length === 0) return;
    
    // Remove active class
    slides[currentSlide].classList.remove('active');
    if (dots[currentSlide]) {
        dots[currentSlide].classList.remove('active');
    }
    
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
    if (dots[currentSlide]) {
        dots[currentSlide].classList.add('active');
    }
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
    const modalImage = document.getElementById('modal-image');
    const photoModal = document.getElementById('photo-modal');
    
    if (modalImage && photoModal) {
        modalImage.src = src;
        photoModal.classList.add('active');
    }
}

function closeModal() {
    const photoModal = document.getElementById('photo-modal');
    if (photoModal) {
        photoModal.classList.remove('active');
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

// Keyboard navigation
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeModal();
    }
    
    if (e.key === 'ArrowLeft') {
        goToSlide(currentSlide - 1);
    }
    
    if (e.key === 'ArrowRight') {
        goToSlide(currentSlide + 1);
    }
});
