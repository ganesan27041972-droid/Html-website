/**
 * Premium Personal Website Dashboard Interaction System
 * Handles custom audio player widgets, smooth scrolling, floating glassmorphic nav active states,
 * and a premium glowing cursor aura.
 */

document.addEventListener("DOMContentLoaded", () => {
  initCustomAudioPlayers();
  initNavbarScrollEffects();
  initGlowingCursor();
  initScrollReveal();
});

/**
 * 1. Custom Glassmorphic Audio Players
 * Binds hidden HTML5 <audio> elements to beautifully styled custom control widgets.
 */
function initCustomAudioPlayers() {
  const players = document.querySelectorAll(".custom-audio-card");

  players.forEach((player) => {
    const audio = player.querySelector("audio");
    const playBtn = player.querySelector(".play-btn");
    const progressTrack = player.querySelector(".audio-progress-track");
    const progressFill = player.querySelector(".audio-progress-fill");
    const progressHandle = player.querySelector(".audio-progress-handle");
    const timeDisplay = player.querySelector(".audio-time-display");

    if (!audio || !playBtn) return;

    // Toggle Play/Pause
    playBtn.addEventListener("click", () => {
      // Pause all other players first
      document.querySelectorAll("audio").forEach((otherAudio) => {
        if (otherAudio !== audio && !otherAudio.paused) {
          otherAudio.pause();
          const otherPlayer = otherAudio.closest(".custom-audio-card");
          if (otherPlayer) {
            const otherBtn = otherPlayer.querySelector(".play-btn i");
            if (otherBtn) {
              otherBtn.className = "fa-solid fa-play";
            }
            otherPlayer.classList.remove("playing");
          }
        }
      });

      if (audio.paused) {
        audio.play();
        playBtn.querySelector("i").className = "fa-solid fa-pause";
        player.classList.add("playing");
      } else {
        audio.pause();
        playBtn.querySelector("i").className = "fa-solid fa-play";
        player.classList.remove("playing");
      }
    });

    // Time & Progress Update
    audio.addEventListener("timeupdate", () => {
      const pct = (audio.currentTime / audio.duration) * 100 || 0;
      progressFill.style.width = `${pct}%`;
      progressHandle.style.left = `${pct}%`;
      timeDisplay.textContent = `${formatTime(audio.currentTime)} / ${formatTime(audio.duration || 0)}`;
    });

    // Handle Metadata Loaded (duration display)
    audio.addEventListener("loadedmetadata", () => {
      timeDisplay.textContent = `0:00 / ${formatTime(audio.duration)}`;
    });

    // Audio Ended Reset
    audio.addEventListener("ended", () => {
      playBtn.querySelector("i").className = "fa-solid fa-play";
      player.classList.remove("playing");
      progressFill.style.width = "0%";
      progressHandle.style.left = "0%";
      timeDisplay.textContent = `0:00 / ${formatTime(audio.duration)}`;
    });

    // Click & Drag seeking
    let isSeeking = false;

    const seek = (e) => {
      const rect = progressTrack.getBoundingClientRect();
      const clickX = (e.clientX || (e.touches && e.touches[0].clientX)) - rect.left;
      const width = rect.width;
      let pct = clickX / width;
      if (pct < 0) pct = 0;
      if (pct > 1) pct = 1;

      progressFill.style.width = `${pct * 100}%`;
      progressHandle.style.left = `${pct * 100}%`;
      audio.currentTime = pct * audio.duration;
    };

    progressTrack.addEventListener("mousedown", (e) => {
      isSeeking = true;
      seek(e);
    });

    window.addEventListener("mousemove", (e) => {
      if (isSeeking) seek(e);
    });

    window.addEventListener("mouseup", () => {
      isSeeking = false;
    });

    // Touch support for mobile
    progressTrack.addEventListener("touchstart", (e) => {
      isSeeking = true;
      seek(e);
    });

    window.addEventListener("touchmove", (e) => {
      if (isSeeking) seek(e);
    });

    window.addEventListener("touchend", () => {
      isSeeking = false;
    });
  });
}

function formatTime(seconds) {
  if (isNaN(seconds)) return "0:00";
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s < 10 ? "0" : ""}${s}`;
}

/**
 * 2. Navbar Scrolling Effects
 * Adds dynamic styling shifts on page scroll and highlights active sections.
 */
function initNavbarScrollEffects() {
  const navbar = document.querySelector(".nav-container");
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll("section[id], div[id]");

  window.addEventListener("scroll", () => {
    // Header styling shift
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }

    // Active Section Link Highlight
    let currentId = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 140;
      const sectionHeight = section.offsetHeight;
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        currentId = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href").substring(1) === currentId) {
        link.classList.add("active");
      }
    });
  });

  // Soft smooth scroll to target
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href");
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        const offsetPosition = targetElement.offsetTop - 100;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    });
  });
}

/**
 * 3. Premium Glowing Cursor Aura
 * Generates an elegant ambient tracking flare that follows the mouse cursor on desktops.
 */
function initGlowingCursor() {
  // Disable cursor follow on touch devices
  if (window.matchMedia("(pointer: coarse)").matches) return;

  const cursorGlow = document.createElement("div");
  cursorGlow.className = "ambient-cursor-glow";
  document.body.appendChild(cursorGlow);

  let mouseX = 0;
  let mouseY = 0;
  let glowX = 0;
  let glowY = 0;

  window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursorGlow.style.opacity = "1";
  });

  document.addEventListener("mouseleave", () => {
    cursorGlow.style.opacity = "0";
  });

  // Fluid interpolation
  const animateGlow = () => {
    const dx = mouseX - glowX;
    const dy = mouseY - glowY;

    // Apply friction to create a lag-behind fluid drag
    glowX += dx * 0.15;
    glowY += dy * 0.15;

    cursorGlow.style.transform = `translate3d(${glowX - 100}px, ${glowY - 100}px, 0)`;
    requestAnimationFrame(animateGlow);
  };

  animateGlow();
}

/**
 * 4. Scroll Reveal Animations
 * Gracefully fades sections in as they appear in the viewport.
 */
function initScrollReveal() {
  const revealElements = document.querySelectorAll(".reveal-element");

  const revealOnScroll = () => {
    const triggerBottom = (window.innerHeight / 10) * 9.2;

    revealElements.forEach((el) => {
      const elTop = el.getBoundingClientRect().top;
      if (elTop < triggerBottom) {
        el.classList.add("revealed");
      }
    });
  };

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll(); // Trigger once on load
}
