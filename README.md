# Premium Romantic Birthday Website

A beautiful, fully responsive romantic birthday website created with HTML, CSS, and JavaScript.

## 📁 Folder Structure

```
birthday-website/
│
├── index.html          # Main HTML file with all 15 sections
├── style.css           # Styling with luxury romantic theme
├── script.js           # All interactive functionality
├── README.md           # This file
├── images/             # Add your photos here
│   ├── hero.jpg        # Main hero image (circular)
│   ├── photo1.jpg      # Gallery photo 1
│   ├── photo2.jpg      # Gallery photo 2
│   ├── photo3.jpg      # Gallery photo 3
│   ├── photo4.jpg      # Gallery photo 4
│   ├── photo5.jpg      # Gallery photo 5
│   ├── photo6.jpg      # Gallery photo 6
│   ├── photo7.jpg      # Gallery photo 7
│   ├── photo8.jpg      # Gallery photo 8
│   ├── photo9.jpg      # Gallery photo 9
│   └── photo10.jpg     # Gallery photo 10
│
└── music/              # Add your music here
    └── birthday.mp3    # Background music file
```

## 🎨 Theme Colors

- **Dark Red**: #8B0000
- **Rose Pink**: #FF4F81
- **Gold**: #FFD700
- **White**: #FFFFFF

## 📝 How to Customize

### 1. Edit Personal Information (script.js)

Open `script.js` and edit these variables at the top:

```javascript
// Husband's name - used in hero and final message
const husbandName = "YOUR HUSBAND NAME";

// Your name - used in footer and letter signature
const yourName = "YOUR NAME";

// Birthday date - format: YYYY-MM-DD (for countdown timer)
const birthday = "2024-12-25";

// Background music file path
const backgroundMusic = "music/birthday.mp3";

// Hero image path
const heroImage = "images/hero.jpg";

// Photo gallery images - add your photo paths here
const photos = [
    "images/photo1.jpg",
    "images/photo2.jpg",
    // ... add all 10 photos
];

// 20 reasons why you love him - edit these messages
const loveReasons = [
    "Your beautiful smile brightens my every day",
    // ... add 20 reasons
];

// Love letter content - write your personalized letter
const loveLetter = `Happy Birthday My Love,
... your letter here ...`;
```

### 2. Add Your Photos

1. Place your photos in the `images/` folder
2. Name them exactly as shown in the folder structure:
   - `hero.jpg` - Main circular image in hero section
   - `photo1.jpg` through `photo10.jpg` - Gallery photos
3. Recommended image sizes:
   - Hero image: 500x500px (square for circular crop)
   - Gallery photos: 1200x800px (landscape)

### 3. Add Background Music

1. Place your music file in the `music/` folder
2. Name it `birthday.mp3`
3. Supported formats: MP3, WAV, OGG
4. Recommended duration: 3-5 minutes (will loop)

### 4. Edit Timeline Events (index.html)

Open `index.html` and find the timeline section (around line 130). Edit the timeline items:

```html
<div class="timeline-item">
    <div class="timeline-icon">❤️</div>
    <div class="timeline-content">
        <h3>Your Event Title</h3>
        <p>Your event description</p>
    </div>
</div>
```

## ✨ Features

1. **Animated Loading Screen** - Heart animation with fade out
2. **Hero Section** - Large circular image with animated button
3. **Floating Animations** - Hearts, sparkles, particles, rose petals
4. **Music Player** - Floating button with play/pause and volume control
5. **Photo Gallery** - 10-photo slider with fullscreen modal
6. **Timeline** - Animated memory milestones
7. **Reasons I Love You** - 20 beautiful cards with hover effects
8. **Birthday Cake** - 3D cake with blowable candles
9. **Balloon Animation** - Continuous floating balloons
10. **Fireworks** - Canvas fireworks after blowing candles
11. **Confetti** - Golden confetti on special moments
12. **Love Letter** - Typing animation with handwritten style
13. **Countdown Timer** - Days until next birthday
14. **Surprise Gift** - Gift box with heart explosion
15. **Final Message** - Romantic closing with floating hearts

## 🎯 Animations Included

- Glassmorphism effects
- Glow effects
- Fade in/out
- Slide animations
- Zoom effects
- Floating elements
- Bounce effects
- Pulse animations
- Typing animation
- Rotate effects
- Sparkle effects

## 📱 Responsive Design

The website is fully responsive and works on:
- Desktop computers
- Tablets
- Mobile phones
- All screen sizes

## 🚀 How to Use

1. Open `index.html` in a web browser
2. Or use a local server (recommended for best experience):
   - Using Python: `python -m http.server`
   - Using VS Code: Live Server extension
   - Using Node.js: `npx serve`

## 🎨 Customization Tips

### Change Colors (style.css)

Edit the CSS variables at the top of `style.css`:

```css
:root {
    --dark-red: #8B0000;
    --rose-pink: #FF4F81;
    --gold: #FFD700;
    --white: #FFFFFF;
}
```

### Change Fonts

The website uses Google Fonts:
- **Great Vibes** - Headings (romantic script)
- **Poppins** - Body text (clean sans-serif)

To change fonts, update the Google Fonts link in `index.html` and the font variables in `style.css`.

### Add More Photos

To add more than 10 photos:
1. Add more image paths to the `photos` array in `script.js`
2. The gallery will automatically accommodate any number of photos

### Add More Love Reasons

To add more than 20 reasons:
1. Add more strings to the `loveReasons` array in `script.js`
2. The grid will automatically adjust

## 🎵 Music Control

- Music does NOT autoplay (browser policy)
- Click the music button (🎵) in the bottom-right corner
- Use the play/pause buttons
- Adjust volume with the slider

## 🎂 Cake Interaction

- Click "Blow Candles" button
- Candles will turn off
- Confetti will appear
- Fireworks will launch
- Celebration sound will play (if added)

## 🎁 Gift Surprise

- Click "Open My Gift" button
- Gift box will open
- Confetti and fireworks will trigger
- Scroll to final message

## 📧 Browser Compatibility

Works on all modern browsers:
- Chrome
- Firefox
- Safari
- Edge
- Opera

## 🐛 Troubleshooting

**Images not showing?**
- Check that image files are in the `images/` folder
- Verify file names match exactly (case-sensitive)
- Ensure images are in supported formats (JPG, PNG, WebP)

**Music not playing?**
- Check that music file is in the `music/` folder
- Verify file name is `birthday.mp3`
- Click the music button to enable (no autoplay)
- Check browser permissions for audio

**Animations not smooth?**
- Ensure you're using a modern browser
- Try reducing the number of floating elements in script.js
- Check if hardware acceleration is enabled in browser

## 💡 Tips for Best Experience

1. Use high-quality images (at least 1000px wide)
2. Choose a romantic, upbeat song for background music
3. Personalize all text with your own messages
4. Test on mobile devices for responsiveness
5. Use a local server for the best performance

## 📄 License

This is a personal project. Feel free to customize and use for your loved one's birthday!

## ❤️ Made with Love

Created for celebrating the most special person in your life.

---

**Happy Birthday! ❤️**
