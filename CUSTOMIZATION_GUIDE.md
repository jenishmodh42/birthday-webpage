# Step-by-Step Customization Guide

## 📋 TABLE OF CONTENTS
1. [Prepare Your Files](#1-prepare-your-files)
2. [Edit Personal Information](#2-edit-personal-information)
3. [Add Your Photos](#3-add-your-photos)
4. [Add Background Music](#4-add-background-music)
5. [Customize Timeline](#5-customize-timeline)
6. [Customize Love Letter](#6-customize-love-letter)
7. [Test Your Website](#7-test-your-website)
8. [Deploy to Vercel](#8-deploy-to-vercel)

---

## 1. PREPARE YOUR FILES

### Step 1: Gather Your Materials
Before you start, collect:
- **1 hero photo** (square format recommended, 500x500px)
- **10 gallery photos** (landscape format recommended, 1200x800px)
- **1 romantic song** (MP3 format, 3-5 minutes)
- Your husband's name
- Your name
- Your husband's birthday date
- 20 reasons why you love him
- A personal love letter

### Step 2: Organize Your Photos
1. Resize your hero photo to 500x500px (square)
2. Resize gallery photos to 1200x800px (landscape)
3. Convert all photos to JPG format
4. Name them exactly:
   - `hero.jpg`
   - `photo1.jpg` through `photo10.jpg`

### Step 3: Prepare Your Music
1. Choose a romantic song (MP3 format)
2. Trim to 3-5 minutes if needed
3. Name it exactly: `birthday.mp3`

---

## 2. EDIT PERSONAL INFORMATION

### Step 1: Open script.js
- Right-click on `script.js`
- Select "Open" or "Edit"

### Step 2: Edit Basic Information (Lines 8-14)

Find these variables at the top of the file:

```javascript
const husbandName = "YOUR HUSBAND NAME";
const yourName = "YOUR NAME";
const birthday = "2024-12-25";
```

**Change to your information:**
```javascript
const husbandName = "John";  // Replace with your husband's name
const yourName = "Jane";     // Replace with your name
const birthday = "2024-06-15"; // Replace with his birthday (YYYY-MM-DD)
```

**Birthday Format:**
- Year: 4 digits (e.g., 2024)
- Month: 2 digits (e.g., 06 for June)
- Day: 2 digits (e.g., 15)
- Example: June 15, 2024 = `2024-06-15`

### Step 3: Edit File Paths (Lines 17-20)

```javascript
const backgroundMusic = "music/birthday.mp3";
const heroImage = "images/hero.jpg";
```

**Keep these as-is** if you followed the naming convention above.

### Step 4: Edit Photo Gallery (Lines 23-34)

```javascript
const photos = [
    "images/photo1.jpg",
    "images/photo2.jpg",
    "images/photo3.jpg",
    "images/photo4.jpg",
    "images/photo5.jpg",
    "images/photo6.jpg",
    "images/photo7.jpg",
    "images/photo8.jpg",
    "images/photo9.jpg",
    "images/photo10.jpg"
];
```

**Keep these as-is** if you named your photos correctly.

**To add more photos:**
```javascript
const photos = [
    "images/photo1.jpg",
    // ... existing photos ...
    "images/photo10.jpg",
    "images/photo11.jpg",  // Add more
    "images/photo12.jpg"
];
```

### Step 5: Edit Love Reasons (Lines 37-58)

Replace all 20 reasons with your own:

```javascript
const loveReasons = [
    "Your beautiful smile brightens my every day",
    "The way you make me laugh until my stomach hurts",
    // ... replace all 20 reasons ...
    "Simply because you are you - my everything"
];
```

**Tips for writing love reasons:**
- Be specific and personal
- Include inside jokes or shared memories
- Mix big and small reasons
- Keep each reason under 20 words
- Make them heartfelt and genuine

### Step 6: Edit Love Letter (Lines 61-72)

```javascript
const loveLetter = `Happy Birthday My Love,

Thank you for always making my life beautiful.
You are my happiness.
You are my peace.
You are my home.

I wish your every dream comes true.
I love you forever.

Love,
${yourName} ❤️`;
```

**Replace with your own letter:**
```javascript
const loveLetter = `My Dearest Husband,

Happy Birthday to the love of my life!

From the moment I met you, my world changed.
Your smile lights up my darkest days.
Your laugh is my favorite sound.
Your love is my greatest treasure.

Thank you for being my rock, my best friend,
and my everything. I can't imagine life without you.

May this year bring you all the happiness
you deserve and more.

I love you more than words can say.

Forever yours,
${yourName} ❤️`;
```

**Tips for writing the letter:**
- Write from your heart
- Include specific memories
- Be genuine and sincere
- Keep it under 300 words for best typing animation
- Use `${yourName}` to automatically insert your name

---

## 3. ADD YOUR PHOTOS

### Step 1: Open the images Folder
- Navigate to the `images/` folder
- You should see it's currently empty

### Step 2: Copy Your Photos
1. Copy your `hero.jpg` file
2. Paste it into the `images/` folder
3. Copy all 10 photo files (`photo1.jpg` through `photo10.jpg`)
4. Paste them into the `images/` folder

### Step 3: Verify File Names
Make sure the files are named exactly:
- ✅ `hero.jpg`
- ✅ `photo1.jpg`
- ✅ `photo2.jpg`
- ✅ `photo3.jpg`
- ✅ `photo4.jpg`
- ✅ `photo5.jpg`
- ✅ `photo6.jpg`
- ✅ `photo7.jpg`
- ✅ `photo8.jpg`
- ✅ `photo9.jpg`
- ✅ `photo10.jpg`

**Common mistakes to avoid:**
- ❌ `Hero.jpg` (capital H)
- ❌ `hero.JPG` (uppercase extension)
- ❌ `hero photo.jpg` (spaces in name)
- ❌ `photo-1.jpg` (hyphen instead of number)

---

## 4. ADD BACKGROUND MUSIC

### Step 1: Open the music Folder
- Navigate to the `music/` folder
- You should see it's currently empty

### Step 2: Copy Your Music File
1. Copy your `birthday.mp3` file
2. Paste it into the `music/` folder

### Step 3: Verify File Name
Make sure the file is named exactly:
- ✅ `birthday.mp3`

**Common mistakes to avoid:**
- ❌ `Birthday.mp3` (capital B)
- ❌ `birthday.MP3` (uppercase extension)
- ❌ `birthday song.mp3` (spaces in name)

---

## 5. CUSTOMIZE TIMELINE

### Step 1: Open index.html
- Right-click on `index.html`
- Select "Open" or "Edit"

### Step 2: Find the Timeline Section
Search for `<!-- 6. TIMELINE -->` (around line 130)

### Step 3: Edit Timeline Events

You'll see 5 timeline items. Edit each one:

```html
<div class="timeline-item">
    <div class="timeline-icon">❤️</div>
    <div class="timeline-content">
        <h3>First Meet</h3>
        <p>The day our hearts found each other</p>
    </div>
</div>
```

**Example customization:**
```html
<div class="timeline-item">
    <div class="timeline-icon">❤️</div>
    <div class="timeline-content">
        <h3>Our First Date</h3>
        <p>December 15, 2020 - Coffee at Starbucks</p>
    </div>
</div>
```

**Edit all 5 events:**
1. First Meet → Your first meeting
2. First Trip → Your first trip together
3. Engagement → Your engagement story
4. Wedding → Your wedding details
5. Best Memories → A favorite memory

**To add more timeline events:**
Copy and paste the timeline item code:

```html
<div class="timeline-item">
    <div class="timeline-icon">❤️</div>
    <div class="timeline-content">
        <h3>Your Event Title</h3>
        <p>Your event description</p>
    </div>
</div>
```

---

## 6. CUSTOMIZE LOVE LETTER

### Option 1: Edit in script.js (Recommended)
Follow Step 6 in Section 2 above.

### Option 2: Edit Directly in HTML
If you prefer not to use the typing animation:

1. Open `index.html`
2. Find the love letter section (search for `<!-- 12. LOVE LETTER -->`)
3. Replace the content inside `<div class="letter-content">`:

```html
<div class="letter-content" id="letter-content">
    Happy Birthday My Love,

    Thank you for always making my life beautiful.
    You are my happiness.
    You are my peace.
    You are my home.

    I wish your every dream comes true.
    I love you forever.
</div>
```

**Note:** If you edit directly in HTML, the typing animation won't work. The text will appear immediately.

---

## 7. TEST YOUR WEBSITE

### Step 1: Open in Browser
1. Double-click `index.html`
2. The website will open in your default browser

### Step 2: Test All Features
Go through each section:

**Loading Screen:**
- ✅ Loading animation appears
- ✅ Fades out after 3 seconds

**Hero Section:**
- ✅ Hero image displays correctly
- ✅ Your husband's name appears
- ✅ Today's date displays
- ✅ "Open My Surprise" button works

**Music Player:**
- ✅ Music button appears in bottom-right
- ✅ Click to show controls
- ✅ Play button works
- ✅ Pause button works
- ✅ Volume slider works

**Photo Gallery:**
- ✅ All 10 photos display
- ✅ Previous/Next buttons work
- ✅ Auto-slide works (every 4 seconds)
- ✅ Click photo opens fullscreen modal
- ✅ Close modal works

**Timeline:**
- ✅ All events display
- ✅ Scroll animation works
- ✅ Events animate when scrolling

**Reasons:**
- ✅ All 20 reasons display
- ✅ Hover animation works

**Cake:**
- ✅ Cake displays with candles
- ✅ "Blow Candles" button works
- ✅ Candles turn off
- ✅ Confetti appears
- ✅ Fireworks launch

**Love Letter:**
- ✅ Typing animation works
- ✅ Your signature appears

**Countdown:**
- ✅ Timer counts down correctly
- ✅ Displays days, hours, minutes, seconds

**Gift:**
- ✅ Gift box displays
- ✅ "Open My Gift" button works
- ✅ Gift opens
- ✅ Scrolls to final message

**Final Message:**
- ✅ Your husband's name appears
- ✅ Floating hearts animate

### Step 3: Fix Any Issues
If something doesn't work:
- Check file names (case-sensitive)
- Check file paths in script.js
- Clear browser cache and refresh
- Try a different browser

---

## 8. DEPLOY TO VERCEL

### Prerequisites
- A Vercel account (free)
- GitHub account (recommended) or GitLab/Bitbucket
- Your website files ready

### Step 1: Create a GitHub Repository

1. Go to [github.com](https://github.com)
2. Sign in or create an account
3. Click the "+" icon in top-right
4. Select "New repository"
5. Fill in:
   - **Repository name**: `birthday-website` (or any name)
   - **Description**: `Romantic birthday website`
   - **Public/Private**: Choose Private (recommended)
6. Click "Create repository"

### Step 2: Upload Your Files

**Option A: Using GitHub Web Interface (Easiest)**

1. On your new repository page, click "uploading an existing file"
2. Drag and drop these files:
   - `index.html`
   - `style.css`
   - `script.js`
   - `README.md`
3. Create folders:
   - Click "Create new file"
   - Name: `images/.gitkeep` (to create the folder)
   - Repeat for `music/.gitkeep`
4. Upload images:
   - Go to `images/` folder
   - Upload all your photo files
5. Upload music:
   - Go to `music/` folder
   - Upload your `birthday.mp3` file
6. Scroll to bottom
7. Enter commit message: "Initial commit"
8. Click "Commit changes"

**Option B: Using Git Command Line**

1. Open terminal/command prompt in your project folder
2. Run these commands:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/birthday-website.git
git push -u origin main
```

Replace `YOUR_USERNAME` with your GitHub username.

### Step 3: Deploy to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Sign up or sign in (you can use GitHub)
3. Click "Add New..." → "Project"
4. You'll see your GitHub repository
5. Click "Import" next to your repository
6. Configure project:
   - **Framework Preset**: Other
   - **Root Directory**: `./` (leave as-is)
   - **Build Command**: (leave empty)
   - **Output Directory**: (leave empty)
7. Click "Deploy"
8. Wait for deployment (usually 1-2 minutes)
9. Your website is now live!

### Step 4: Get Your URL

After deployment:
1. Vercel will show you your website URL
2. It will look like: `https://birthday-website.vercel.app`
3. Click to visit your live website
4. Copy the URL to share with your husband

### Step 5: Customize Domain (Optional)

If you want a custom domain:

1. Go to your Vercel project dashboard
2. Click "Settings" → "Domains"
3. Enter your custom domain (e.g., `love-story.yourdomain.com`)
4. Follow Vercel's instructions to verify ownership
5. Update DNS records as instructed

### Step 6: Update Your Website (Optional)

If you want to make changes after deployment:

1. Edit your files locally
2. Commit changes to GitHub:
   ```bash
   git add .
   git commit -m "Update website"
   git push
   ```
3. Vercel will automatically redeploy
4. Changes will be live in 1-2 minutes

---

## 🎉 QUICK REFERENCE

### Files to Edit:
- **script.js** - Names, dates, photos, reasons, letter
- **index.html** - Timeline events
- **style.css** - Colors, fonts (optional)

### Files to Add:
- **images/hero.jpg** - Main photo
- **images/photo1-10.jpg** - Gallery photos
- **music/birthday.mp3** - Background music

### Deployment Steps:
1. Create GitHub repository
2. Upload files
3. Import to Vercel
4. Deploy
5. Share URL!

---

## 💡 TIPS

**For Best Results:**
- Use high-quality photos (at least 1000px wide)
- Choose a romantic, upbeat song
- Personalize all text
- Test on mobile before sharing
- Deploy a few days early to test

**Common Issues:**
- Images not showing → Check file names (case-sensitive)
- Music not playing → Click music button (no autoplay)
- Animations slow → Use fewer photos or smaller file sizes
- Mobile issues → Test on actual phone, not just browser resize

**Security:**
- Keep repository private on GitHub
- Don't include personal addresses or phone numbers
- Use a fake name if you want extra privacy

---

## 📞 NEED HELP?

If you encounter issues:
1. Check the README.md file
2. Verify file names match exactly
3. Clear browser cache
4. Try a different browser
5. Check Vercel deployment logs

---

**Happy Birthday to your husband! ❤️**
