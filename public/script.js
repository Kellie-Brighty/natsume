// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Add water ripple effect on hippo profiles
  const hippoProfiles = document.querySelectorAll(".hippo-profile");

  hippoProfiles.forEach((profile) => {
    profile.addEventListener("mouseenter", function () {
      // Create ripple effect
      createRipple(this);
    });
  });

  // Add subtle animation to the wooden signs
  const woodenSigns = document.querySelectorAll(".wooden-sign");

  woodenSigns.forEach((sign) => {
    sign.addEventListener("mouseenter", function () {
      this.style.transform = "rotate(0.5deg)";
    });

    sign.addEventListener("mouseleave", function () {
      this.style.transform = "rotate(0deg)";
    });
  });

  // Enhance bamboo frames with subtle hover effect
  const bambooFrames = document.querySelectorAll(".bamboo-frame");

  bambooFrames.forEach((frame) => {
    frame.addEventListener("mouseenter", function () {
      this.style.boxShadow = "0 8px 20px rgba(0, 0, 0, 0.3)";
    });

    frame.addEventListener("mouseleave", function () {
      this.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.2)";
    });
  });

  // Hero image parallax effect
  const heroImage = document.querySelector(".hero-image img");

  if (heroImage) {
    window.addEventListener("scroll", function () {
      const scrollPosition = window.scrollY;
      if (scrollPosition < 600) {
        heroImage.style.transform = `translateY(${scrollPosition * 0.1}px)`;
      }
    });
  }

  // Add dynamic date counter for birthday celebration
  addDaysCounter();

  // Add random animal sounds that occasionally play
  setInterval(playRandomSound, 30000); // Every 30 seconds

  // Create falling leaves
  createFallingLeaves();

  // Create fireflies at night (based on time)
  const currentHour = new Date().getHours();
  if (currentHour < 6 || currentHour > 18) {
    createFireflies();
  }

  // Add parallax effect to background elements
  addParallaxEffect();

  // Add copy functionality to the contract address
  setupContractCopier();

  // Setup video modal
  setupVideoModal();
});

// Function to create water ripple effect
function createRipple(element) {
  const ripple = document.createElement("div");
  ripple.className = "ripple";

  // Randomly position the ripple within the element
  const size = Math.random() * 50 + 20;
  const posX = Math.random() * element.offsetWidth;
  const posY = Math.random() * element.offsetHeight;

  ripple.style.width = `${size}px`;
  ripple.style.height = `${size}px`;
  ripple.style.left = `${posX}px`;
  ripple.style.top = `${posY}px`;

  // Add ripple styles
  ripple.style.position = "absolute";
  ripple.style.backgroundColor = "rgba(255, 255, 255, 0.7)";
  ripple.style.borderRadius = "50%";
  ripple.style.pointerEvents = "none";
  ripple.style.transform = "scale(0)";
  ripple.style.animation = "ripple-effect 1s ease-out forwards";

  // Add keyframes for the ripple effect
  if (!document.querySelector("#ripple-animation")) {
    const style = document.createElement("style");
    style.id = "ripple-animation";
    style.textContent = `
            @keyframes ripple-effect {
                0% { transform: scale(0); opacity: 1; }
                100% { transform: scale(1.5); opacity: 0; }
            }
        `;
    document.head.appendChild(style);
  }

  // Ensure the element has position relative for absolute positioning of the ripple
  if (window.getComputedStyle(element).position === "static") {
    element.style.position = "relative";
  }

  // Add the ripple to the element
  element.appendChild(ripple);

  // Remove the ripple after animation completes
  setTimeout(() => {
    if (ripple && ripple.parentNode) {
      ripple.parentNode.removeChild(ripple);
    }
  }, 1000);
}

// Function to add a dynamic birthday countdown
function addDaysCounter() {
  const announcementCards = document.querySelectorAll(".announcement-card");

  announcementCards.forEach((card) => {
    const title = card.querySelector("h3");

    if (title && title.textContent.includes("Motherhood Milestone")) {
      // Get next birthday date
      const nextBirthday = new Date(new Date().getFullYear(), 2, 14); // March 14

      // If the birthday has passed this year, set for next year
      if (nextBirthday < new Date()) {
        nextBirthday.setFullYear(nextBirthday.getFullYear() + 1);
      }

      // Calculate days remaining
      const today = new Date();
      const daysRemaining = Math.ceil(
        (nextBirthday - today) / (1000 * 60 * 60 * 24)
      );

      // Create countdown element
      const countdown = document.createElement("div");
      countdown.className = "birthday-countdown";
      countdown.innerHTML = `<span>${daysRemaining}</span> days until Natsume's motherhood celebration!`;

      // Add to the card
      card.appendChild(countdown);
    }
  });
}

// Function to play random hippo sounds
function playRandomSound() {
  // Only add sounds if user has interacted with the page
  if (!document.querySelector("body").classList.contains("user-interacted")) {
    return;
  }

  // Hippo sounds are subtle and rare
  if (Math.random() > 0.3) {
    return;
  }

  // Create audio element for hippo sound
  const audio = new Audio();
  audio.volume = 0.2; // Keep the volume low

  // Use public domain hippo sounds if available
  // For demo purposes, we're just setting up the audio structure
  audio.src = "https://example.com/sounds/hippo.mp3"; // Replace with actual sound URL

  // Play the sound
  audio.play().catch((error) => {
    // Autoplay may be blocked, that's okay
    console.log("Audio autoplay prevented:", error);
  });
}

// Add user interaction flag
document.body.addEventListener("click", function () {
  document.body.classList.add("user-interacted");
});

// Add water animation to the background
function animateWater() {
  const waterBackground = document.querySelector(".water-background");

  if (!waterBackground) return;

  // Create multiple bubbles floating up
  for (let i = 0; i < 5; i++) {
    setTimeout(() => {
      const bubble = document.createElement("div");
      bubble.className = "water-bubble";

      // Style the bubble
      bubble.style.position = "absolute";
      bubble.style.width = `${Math.random() * 20 + 10}px`;
      bubble.style.height = bubble.style.width;
      bubble.style.backgroundColor = "rgba(255, 255, 255, 0.4)";
      bubble.style.borderRadius = "50%";
      bubble.style.bottom = "0";
      bubble.style.left = `${Math.random() * 100}%`;
      bubble.style.animation = `bubble-rise ${
        Math.random() * 5 + 5
      }s ease-in-out forwards`;

      waterBackground.appendChild(bubble);

      // Remove bubble after animation
      setTimeout(() => {
        if (bubble && bubble.parentNode) {
          bubble.parentNode.removeChild(bubble);
        }
      }, 10000);
    }, i * 2000);
  }

  // Add bubble animation
  if (!document.querySelector("#bubble-animation")) {
    const style = document.createElement("style");
    style.id = "bubble-animation";
    style.textContent = `
            @keyframes bubble-rise {
                0% { transform: translateY(0) translateX(0); opacity: 0; }
                20% { opacity: 0.7; }
                100% { transform: translateY(-300px) translateX(${
                  Math.random() * 100 - 50
                }px); opacity: 0; }
            }
        `;
    document.head.appendChild(style);
  }
}

// Create falling leaves animation
function createFallingLeaves() {
  const container = document.querySelector(".background-container");

  if (!container) return;

  // Add keyframes for falling leaves if not already added
  if (!document.querySelector("#leaf-animation")) {
    const style = document.createElement("style");
    style.id = "leaf-animation";
    style.textContent = `
      @keyframes falling-leaf {
        0% {
          transform: translateY(-10%) rotate(0deg) translateX(0);
          opacity: 0;
        }
        10% {
          opacity: 1;
        }
        90% {
          opacity: 0.8;
        }
        100% {
          transform: translateY(110vh) rotate(360deg) translateX(${
            Math.random() * 200 - 100
          }px);
          opacity: 0;
        }
      }
    `;
    document.head.appendChild(style);
  }

  // Create occasional falling leaves
  setInterval(() => {
    if (Math.random() < 0.3) {
      // Control frequency
      const leaf = document.createElement("div");
      leaf.style.position = "absolute";

      // Randomly choose leaf type
      const leafType = Math.floor(Math.random() * 3);

      if (leafType === 0) {
        // Oval leaf
        leaf.style.width = "15px";
        leaf.style.height = "25px";
        leaf.style.borderRadius = "50%";
        leaf.style.backgroundColor = getRandomLeafColor();
      } else if (leafType === 1) {
        // Maple-like leaf
        leaf.style.width = "20px";
        leaf.style.height = "20px";
        leaf.style.backgroundColor = getRandomLeafColor();
        leaf.style.clipPath =
          "polygon(50% 0%, 80% 30%, 100% 50%, 80% 75%, 50% 100%, 20% 75%, 0% 50%, 20% 30%)";
      } else {
        // Simple leaf
        leaf.style.width = "12px";
        leaf.style.height = "20px";
        leaf.style.backgroundColor = getRandomLeafColor();
        leaf.style.borderRadius = "0 50% 50% 50%";
        leaf.style.transform = "rotate(45deg)";
      }

      // Position randomly on X axis, start from top
      leaf.style.left = `${Math.random() * 100}%`;
      leaf.style.top = "-20px";

      // Add shadow for depth
      leaf.style.boxShadow = "0 2px 3px rgba(0,0,0,0.1)";

      // Animate leaf falling
      const duration = Math.random() * 8 + 12; // 12-20 seconds
      leaf.style.animation = `falling-leaf ${duration}s linear forwards`;

      container.appendChild(leaf);

      // Remove leaf after animation completes
      setTimeout(() => {
        if (leaf && leaf.parentNode) {
          leaf.parentNode.removeChild(leaf);
        }
      }, duration * 1000);
    }
  }, 1000);
}

// Helper function to get random leaf color
function getRandomLeafColor() {
  const colors = [
    "rgba(92, 141, 47, 0.8)", // Green
    "rgba(120, 176, 71, 0.8)", // Light green
    "rgba(166, 124, 82, 0.5)", // Brown
    "rgba(211, 144, 29, 0.7)", // Orange
    "rgba(155, 100, 28, 0.6)", // Dark brown
  ];
  return colors[Math.floor(Math.random() * colors.length)];
}

// Create fireflies effect for nighttime
function createFireflies() {
  const container = document.querySelector(".background-container");

  if (!container) return;

  // Create firefly animation styles
  if (!document.querySelector("#firefly-animation")) {
    const style = document.createElement("style");
    style.id = "firefly-animation";
    style.textContent = `
      @keyframes firefly-glow {
        0%, 100% { opacity: 0.1; }
        50% { opacity: 0.7; }
      }
      
      @keyframes firefly-move {
        0% { transform: translate(0, 0); }
        25% { transform: translate(10px, -10px); }
        50% { transform: translate(0, -20px); }
        75% { transform: translate(-10px, -10px); }
        100% { transform: translate(0, 0); }
      }
    `;
    document.head.appendChild(style);
  }

  // Create 15 fireflies
  for (let i = 0; i < 15; i++) {
    const firefly = document.createElement("div");

    // Style the firefly
    firefly.style.position = "absolute";
    firefly.style.width = "4px";
    firefly.style.height = "4px";
    firefly.style.backgroundColor = "rgba(255, 255, 150, 0.8)";
    firefly.style.borderRadius = "50%";
    firefly.style.boxShadow = "0 0 10px 2px rgba(255, 255, 150, 0.5)";

    // Position randomly
    firefly.style.left = `${Math.random() * 100}%`;
    firefly.style.top = `${Math.random() * 100}%`;

    // Animations
    const glowDuration = 2 + Math.random() * 3;
    const moveDuration = 10 + Math.random() * 20;
    firefly.style.animation = `
      firefly-glow ${glowDuration}s infinite ease-in-out,
      firefly-move ${moveDuration}s infinite ease-in-out
    `;

    // Add randomized animation delay
    firefly.style.animationDelay = `-${Math.random() * 10}s, -${
      Math.random() * 20
    }s`;

    container.appendChild(firefly);
  }
}

// Add parallax effect to background elements on mouse move
function addParallaxEffect() {
  const container = document.querySelector("body");
  const forestElements = document.querySelector(".forest-elements");
  const floatingAnimals = document.querySelector(".floating-animals");

  if (!container || !forestElements || !floatingAnimals) return;

  container.addEventListener("mousemove", (e) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;

    // Move forest elements slightly
    forestElements.style.transform = `translate(${x * -20}px, ${y * -10}px)`;

    // Move animals in opposite direction for depth effect
    floatingAnimals.style.transform = `translate(${x * 15}px, ${y * 10}px)`;
  });
}

// Function to setup contract address copy functionality
function setupContractCopier() {
  const copyButton = document.getElementById("copy-button");
  const contractAddress = document.getElementById("contract-address");
  const copyMessage = document.getElementById("copy-message");

  if (!copyButton || !contractAddress || !copyMessage) return;

  copyButton.addEventListener("click", function () {
    // Select the text
    contractAddress.select();
    contractAddress.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text
    navigator.clipboard
      .writeText(contractAddress.value)
      .then(() => {
        // Update the message
        const originalMessage = copyMessage.textContent;
        copyMessage.textContent = "Copied!";
        copyButton.style.backgroundColor = "#4CAF50";

        // Reset after 2 seconds
        setTimeout(() => {
          copyMessage.textContent = originalMessage;
          copyButton.style.backgroundColor = "";
        }, 2000);
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
        copyMessage.textContent = "Failed to copy. Try manually.";
      });
  });

  // Also allow clicking on the input to copy
  contractAddress.addEventListener("click", function () {
    this.select();
  });
}

// Function to setup video modal
function setupVideoModal() {
  const playButton = document.querySelector(".btn-play-video");
  const videoModal = document.querySelector(".video-modal");
  const closeVideo = document.querySelector(".close-video");
  const video = document.getElementById("hippo-video");

  if (!playButton || !videoModal || !closeVideo || !video) return;

  // Open modal on play button click
  playButton.addEventListener("click", function () {
    videoModal.classList.add("active");
    // Try to play the video
    video.play().catch((e) => console.log("Auto-play prevented"));
  });

  // Close modal and pause video
  closeVideo.addEventListener("click", function () {
    videoModal.classList.remove("active");
    video.pause();
  });

  // Close on click outside the video
  videoModal.addEventListener("click", function (event) {
    if (event.target === videoModal) {
      videoModal.classList.remove("active");
      video.pause();
    }
  });

  // Close on ESC key
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && videoModal.classList.contains("active")) {
      videoModal.classList.remove("active");
      video.pause();
    }
  });
}

// Start water animation and repeat
setInterval(animateWater, 8000);
animateWater();
