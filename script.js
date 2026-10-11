
"use strict";

/* =========================================================
   PART ONE LINK
========================================================= */

const PART_ONE_URL =
    "https://drive.google.com/file/d/1s23eMkyuoLK5lnpJSc9X2dvYjDy5Tkgf/view?usp=drivesdk";

const partOneLink = document.getElementById("partOneLink");

if (partOneLink) {
    partOneLink.href = PART_ONE_URL;
    partOneLink.target = "_blank";
    partOneLink.rel = "noopener noreferrer";
}

/* =========================================================
   81 FAIRYTALE MOMENTS
========================================================= */

const moments = [
    {
        image: "images/moment01.jpg",
        title: "Our Little Home",
        message: "One day, I want to turn an ordinary house into our own little kingdom, filled with love and laughter. 🏡💜"
    },
    {
        image: "images/moment02.jpg",
        title: "Cooking Together",
        message: "Our kitchen may become messy, but cooking beside you will always be one of my favourite adventures. 🍳❤️"
    },
    {
        image: "images/moment03.jpg",
        title: "The Vessel-Washing Adventure",
        message: "Even washing dishes can become a funny little memory when my favourite person is standing beside me. 🫧😂"
    },
    {
        image: "images/moment04.jpg",
        title: "The Vegetable Market",
        message: "A simple trip to buy vegetables becomes a royal adventure when I get to walk beside you. 🥕💜"
    },
    {
        image: "images/moment05.jpg",
        title: "Waiting For Our Little One",
        message: "One day, I hope we get to pick up our little treasure from school and listen to every story on the way home. 🎒❤️"
    },
    {
        image: "images/moment06.jpg",
        title: "Cutting Vegetables Together",
        message: "You chop, I help, and somehow we turn the simplest kitchen task into another chapter of our story. 🥦✨"
    },
    {
        image: "images/moment07.jpg",
        title: "Our Family Car Ride",
        message: "Favourite songs, silly conversations, and my favourite people beside me. That is my kind of journey. 🚗💜"
    },
    {
        image: "images/moment08.jpg",
        title: "Our Royal Bike Ride",
        message: "A quiet ride with my princess holding me close might become one of my sweetest memories. 🏍️❤️"
    },
    {
        image: "images/moment09.jpg",
        title: "Cleaning Our Castle",
        message: "We may argue about who should clean, but I hope we always end up laughing and doing it together. 🧹😂"
    },
    {
        image: "images/moment10.jpg",
        title: "Painting Our Dream Home",
        message: "A little paint on our hands, a thousand dreams in our hearts, and a home we build together. 🎨🏡"
    },
    {
        image: "images/moment11.jpg",
        title: "The Great Water Splash",
        message: "I hope we never lose the childlike joy of splashing around and laughing until our cheeks hurt. 💦😂"
    },
    {
        image: "images/moment12.jpg",
        title: "When My Princess Feels Unwell",
        message: "When you feel weak, you don't have to pretend to be strong. Your prince will be right there beside you. 🤍"
    },
    {
        image: "images/moment13.jpg",
        title: "When Your Prince Needs Care",
        message: "Even a prince needs comfort sometimes. I hope we always take care of each other through every storm. 💜"
    },
    {
        image: "images/moment14.jpg",
        title: "Dinner Beneath The Moon",
        message: "A candlelit terrace, a beautiful moon, and you sitting across from me. Nothing else could make the night more perfect. 🌙🕯️"
    },
    {
        image: "images/moment15.jpg",
        title: "Little Paper Boats",
        message: "When rain fills the streets with puddles, let's make little paper boats and let our imaginations sail. ⛵🌧️"
    },
    {
        image: "images/moment16.jpg",
        title: "Playing In The Rain",
        message: "Let the rain soak our clothes and our laughter fill the air. Some memories are worth getting wet for. 🌧️❤️"
    },
    {
        image: "images/moment17.jpg",
        title: "A Peaceful Evening",
        message: "After a long day, I only need a quiet evening with you to feel that everything is right in my world. 🌆💜"
    },
    {
        image: "images/moment18.jpg",
        title: "Our Family Walk",
        message: "Hand in hand, with little footsteps beside us, we will make ordinary walks feel like magical adventures. 👨‍👩‍👧‍👦✨"
    },
    {
        image: "images/moment19.jpg",
        title: "Coming Home To You",
        message: "No matter how far the day takes me, I hope the best part will always be coming home to you. 🏡❤️"
    },
    {
        image: "images/moment20.jpg",
        title: "Our Little Family",
        message: "Two hearts, two little ones, and a home full of love. This is the kind of happily ever after I dream about. 👨‍👩‍👧‍👦💜"
    },
    {
        image: "images/moment21.jpg",
        title: "Breakfast In Bed",
        message: "One lazy morning, I want to surprise my princess with breakfast in bed and a thousand little kisses. 🍓☕"
    },
    {
        image: "images/moment22.jpg",
        title: "Dancing In Our Living Room",
        message: "No grand ballroom needed. Just our favourite song, your hand in mine, and a little dancing at home. 💃❤️"
    },
    {
        image: "images/moment23.jpg",
        title: "Flowers For My Princess",
        message: "Even a tiny bunch of flowers can say what my heart has been trying to tell you all day. 💐💜"
    },
    {
        image: "images/moment24.jpg",
        title: "Planting Our First Tree",
        message: "Let's plant a little tree and watch it grow alongside the beautiful life we are building together. 🌱🏡"
    },
    {
        image: "images/moment25.jpg",
        title: "Stargazing On The Terrace",
        message: "Under a sky full of stars, I want to dream with you about every beautiful tomorrow waiting for us. ⭐🌙"
    },
  
    {
        image: "images/moment27.jpg",
        title: "Our Family Selfie",
        message: "One silly picture, four happy faces, and a memory we will smile at for years to come. 📸💜"
    },

    {
        image: "images/moment30.jpg",
        title: "Decorating For The Festival",
        message: "Let's fill our home with lights, colours, decorations, and the kind of happiness that brings everyone together. 🪔✨"
    },
    {
        image: "images/moment31.jpg",
        title: "Our Ferris Wheel Adventure",
        message: "High above the world, with your hand in mine, even the brightest city will feel like our own kingdom. 🎡💜"
    },
    {
        image: "images/moment32.jpg",
        title: "Dancing Through Falling Leaves",
        message: "Let's walk through golden leaves, laugh at silly things, and collect little memories wherever we go. 🍂❤️"
    },
    {
        image: "images/moment33.jpg",
        title: "Looking Through Old Memories",
        message: "One day, we'll look at our old pictures and laugh about how our little fairytale began. 📸🥹"
    },
    {
        image: "images/moment34.jpg",
        title: "Our Surprise Train Journey",
        message: "A surprise destination, a window full of changing scenery, and my favourite travel companion beside me. 🚆✨"
    },
    {
        image: "images/moment35.jpg",
        title: "Flying Kites Together",
        message: "Let's run beneath the open sky, fly colourful kites, and remember that growing up doesn't mean stopping the fun. 🪁💜"
    },
    {
        image: "images/moment36.jpg",
        title: "Our Blanket Fort",
        message: "A few blankets, tiny fairy lights, and our own secret hideaway where the outside world can wait. 🏰🤍"
    },
    {
        image: "images/moment37.jpg",
        title: "The Secret Birthday Surprise",
        message: "I want to see your eyes light up when you discover a little surprise prepared especially for you. 🎂🎁"
    },
    {
        image: "images/moment38.jpg",
        title: "A Peaceful Date By The Lake",
        message: "A quiet lake, gentle ripples, and the kind of conversation that makes hours feel like minutes. 🌅💜"
    },
    {
        image: "images/moment39.jpg",
        title: "Our Festival Morning",
        message: "A beautiful morning, festive clothes, delicious food, and the people who make our kingdom feel complete. ✨❤️"
    },
    {
        image: "images/moment40.jpg",
        title: "Our Sunrise Promise",
        message: "As the sun rises on another day, I promise to keep learning, growing, and choosing you. 🌄💜"
    },
    {
        image: "images/moment41.jpg",
        title: "Holding Our Newborn For The First Time",
        message: "The moment our little miracle rests in our arms, I know our hearts will discover a whole new kind of love. 👶❤️"
    },
    {
        image: "images/moment42.jpg",
        title: "Daddy's First Night Duty",
        message: "Sleepy eyes, tiny cries, and our baby resting in my arms. I will do my best to be the daddy our little one deserves. 🌙🍼"
    },

    {
        image: "images/moment44.jpg",
        title: "Little Hugs For Mummy's Belly",
        message: "Watching our little ones hug your belly and wait for their baby sibling will be a moment I treasure forever. 🤰❤️"
    },
    {
        image: "images/moment45.jpg",
        title: "Sleepy After Our Family Outing",
        message: "After a day full of adventures, our little treasures fall asleep while we smile at the memories we made. 🥹💜"
    },
    {
        image: "images/moment46.jpg",
        title: "Bedtime Stories With Mummy And Daddy",
        message: "We will make silly voices, act out magical stories, and watch our little ones drift into beautiful dreams. 📖✨"
    },
    {
        image: "images/moment48.jpg",
        title: "Rainy-Day Family Cuddles",
        message: "While rain taps against the windows, let's cuddle beneath one blanket and be thankful for our little family. 🌧️🤍"
    },
    {
        image: "images/moment49.jpg",
        title: "When Thunder Scares My Princess",
        message: "When thunder shakes the night, pull me close. You never have to face your fears alone, my love. ⛈️❤️"
    },

    
    {
        image: "images/moment50.jpg",
        title: "The Beach Cinema",
        message: "A giant screen, a beach full of people, the sound of waves, and my favourite person sitting beside me. 🎬🌊"
    },
    {
        image: "images/moment51.jpg",
        title: "The Great Bedroom Slide",
        message: "Who needs a royal staircase when our castle can have a slide? Growing up is optional in our kingdom. 😂🏰"
    },
    {
        image: "images/moment52.jpg",
        title: "The Royal Pizza Kitchen",
        message: "A little flour on your nose, cheese everywhere, and a homemade pizza made with twice as much love. 🍕❤️"
    },
    {
        image: "images/moment53.jpg",
        title: "Our Little Puppy",
        message: "One tiny puppy, four excited hearts, and a brand-new member of our little kingdom. 🐶🏡"
    },
  
    {
        image: "images/moment54.jpg",
        title: "Our Family Happily Ever After",
        message: "From two hearts with one dream to a home filled with little footsteps, our fairytale will be written in love, patience, and countless memories. 👑❤️"
    }
];

/* =========================================================
   SINGLE SONG — REPEAT FOREVER
========================================================= */

const music = document.getElementById("bgMusic");
const musicButton = document.getElementById("musicControl");
const SONG_PATH = "music/song.mp3";

if (music) {
    music.src = SONG_PATH;
    music.loop = true;
}

function playCurrentSong() {
    if (!music) return;

    music.loop = true;

    music.play()
        .then(() => {
            if (musicButton) musicButton.textContent = "🎵";
        })
        .catch(error => {
            console.log("Music playback error:", error);
        });
}

function toggleMusic() {
    if (!music) return;

    if (music.paused) {
        playCurrentSong();
    } else {
        music.pause();
        if (musicButton) musicButton.textContent = "🔇";
    }
}

/* =========================================================
   SCREEN CONTROL
========================================================= */

function hideAllScreens() {
    [
        "introScreen",
        "chapterScreen",
        "musicScreen",
        "storyScreen",
        "endingScreen"
    ].forEach(id => {
        const screen = document.getElementById(id);
        if (screen) screen.style.display = "none";
    });
}

function showScreen(id) {
    hideAllScreens();

    const screen = document.getElementById(id);
    if (!screen) {
        console.error("Screen not found:", id);
        return;
    }

    screen.style.display = "flex";
    screen.classList.remove("fade-in");

    void screen.offsetWidth;

    screen.classList.add("fade-in");
}

function showChapterReveal() {
    showScreen("chapterScreen");
}

function showMusicGate() {
    showScreen("musicScreen");
}

/* =========================================================
   OPEN FAIRYTALE
========================================================= */

function openFairytale() {
    if (!music) {
        console.error('Audio element "#bgMusic" was not found.');
    } else {
        playCurrentSong();
    }

    showScreen("storyScreen");
    loadMoment(0);
}

/* =========================================================
   SLIDESHOW
========================================================= */

let currentMoment = 0;
let momentTimer = null;

function loadMoment(index) {
    if (index < 0 || index >= moments.length) return;

    const frame = document.getElementById("imageFrame");
    const image = document.getElementById("momentImage");
    const title = document.getElementById("momentTitle");
    const message = document.getElementById("momentMessage");
    const progress = document.getElementById("progress");

    if (!frame || !image || !title || !message || !progress) {
        console.error("One or more slideshow HTML elements are missing.");
        return;
    }

    currentMoment = index;

    if (momentTimer !== null) {
        clearTimeout(momentTimer);
    }

    frame.classList.add("page-turn");

    momentTimer = setTimeout(() => {
        const data = moments[currentMoment];

        image.src = data.image;
        image.alt = data.title;
        title.textContent = data.title;
        message.textContent = data.message;

        progress.textContent =
            `✨ Chapter ${String(currentMoment + 1).padStart(2, "0")} / ${moments.length} ✨`;

        frame.classList.remove("page-turn");
        momentTimer = null;
    }, 200);

    updateNavigation();
}

/* =========================================================
   NEXT / PREVIOUS
========================================================= */

function nextMoment() {
    if (currentMoment < moments.length - 1) {
        loadMoment(currentMoment + 1);
    } else {
        showEnding();
    }
}

function previousMoment() {
    if (currentMoment > 0) {
        loadMoment(currentMoment - 1);
    }
}

function updateNavigation() {
    const previousButton = document.getElementById("previousButton");
    const nextButton = document.getElementById("nextButton");

    if (previousButton) {
        previousButton.disabled = currentMoment === 0;
    }

    if (nextButton) {
        nextButton.disabled = false;
    }
}

/* =========================================================
   ENDING
========================================================= */

function showEnding() {
    showScreen("endingScreen");
}

/* =========================================================
   SWIPE NAVIGATION
========================================================= */

let touchStartX = 0;
let touchStartY = 0;

const storyScreen = document.getElementById("storyScreen");

if (storyScreen) {
    storyScreen.addEventListener("touchstart", event => {
        const touch = event.changedTouches[0];
        touchStartX = touch.screenX;
        touchStartY = touch.screenY;
    }, { passive: true });

    storyScreen.addEventListener("touchend", event => {
        const touch = event.changedTouches[0];
        const distanceX = touch.screenX - touchStartX;
        const distanceY = touch.screenY - touchStartY;

        // Ignore vertical scrolling gestures.
        if (Math.abs(distanceX) < 50 ||
            Math.abs(distanceX) < Math.abs(distanceY)) {
            return;
        }

        if (distanceX < 0) {
            nextMoment();
        } else {
            previousMoment();
        }
    }, { passive: true });
}

/* =========================================================
   KEYBOARD NAVIGATION
========================================================= */

document.addEventListener("keydown", event => {
    const screen = document.getElementById("storyScreen");

    if (!screen || screen.style.display === "none") return;

    if (event.key === "ArrowRight") {
        nextMoment();
    } else if (event.key === "ArrowLeft") {
        previousMoment();
    }
});

/* =========================================================
   MAGIC PARTICLES
========================================================= */

function createParticles() {
    const container = document.getElementById("particles");

    if (!container || container.dataset.created === "true") return;

    container.dataset.created = "true";

    const fragment = document.createDocumentFragment();

    for (let i = 0; i < 35; i++) {
        const particle = document.createElement("div");

        particle.className = "magic-particle";
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.animationDuration = `${8 + Math.random() * 15}s`;
        particle.style.animationDelay = `${Math.random() * 10}s`;
        particle.style.opacity = String(Math.random());

        fragment.appendChild(particle);
    }

    container.appendChild(fragment);
}

/* =========================================================
   PRELOAD IMAGES
========================================================= */

function preloadImages() {
    moments.forEach(moment => {
        const image = new Image();
        image.src = moment.image;
    });
}

/* =========================================================
   INITIALISE
========================================================= */

createParticles();
preloadImages();

console.log(`Fairytale loaded: ${moments.length} moments.`);
