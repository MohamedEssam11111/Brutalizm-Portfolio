gsap.registerPlugin(ScrollTrigger);

// --- CUSTOM CURSOR LOGIC ---
const cursor = document.getElementById("custom-cursor");

window.addEventListener("mousemove", (e) => {
  gsap.to(cursor, {
    x: e.clientX - 15,
    y: e.clientY - 15,
    duration: 0.1,
    ease: "power2.out",
  });
});

// Add visual feedback for clicking
window.addEventListener("mousedown", () => {
  gsap.to(cursor, { scale: 0.7, duration: 0.1 });
});
window.addEventListener("mouseup", () => {
  gsap.to(cursor, { scale: 1, duration: 0.1 });
});

// Hover effect for interactive elements
const targets = document.querySelectorAll("a, button, span, input, textarea");
targets.forEach((el) => {
  el.addEventListener("mouseenter", () => {
    gsap.to(cursor, {
      backgroundColor: "var(--secondary)",
      width: 45,
      height: 45,
      xOffset: -22,
      yOffset: -22,
      duration: 0.2,
    });
  });
  el.addEventListener("mouseleave", () => {
    gsap.to(cursor, {
      backgroundColor: "var(--black)",
      width: 30,
      height: 30,
      duration: 0.2,
    });
  });
});

// --- EXISTING LOGIC ---
const downloadBtn = document.getElementById("download-cv-btn");
downloadBtn.addEventListener("click", function (e) {
  const href = this.getAttribute("href");
  if (href.startsWith("assets/")) {
    showCustomAlert(
      "Resume file not found at " +
        href +
        ". Please upload your CV and update the link!",
    );
  }
});

function showCustomAlert(msg) {
  document.getElementById("alert-msg").innerText = msg;
  document.getElementById("custom-alert").style.display = "block";
}

function closeAlert() {
  document.getElementById("custom-alert").style.display = "none";
}

gsap.set(".skill", { autoAlpha: 0, scale: 0.5, y: 30 });

gsap.from(".first-p", { duration: 0.8, x: -100, opacity: 0, ease: "expo.out" });
gsap.from(".img-wrapper", {
  duration: 0.8,
  x: 100,
  opacity: 0,
  delay: 0.2,
  ease: "expo.out",
});
gsap.from(".bg-text-decoration", {
  duration: 2,
  opacity: 0,
  x: 200,
  ease: "power2.out",
});

gsap.to("#frame-deco", {
  duration: 2,
  x: 20,
  y: -20,
  repeat: -1,
  yoyo: true,
  ease: "steps(4)",
  backgroundColor: "#E30B5C",
});

gsap.to(".skill", {
  scrollTrigger: {
    trigger: ".skills-container",
    start: "top 85%",
    toggleActions: "play none none none",
  },
  autoAlpha: 1,
  scale: 1,
  y: 0,
  stagger: 0.08,
  duration: 0.5,
  ease: "back.out(1.7)",
  onComplete: function () {
    gsap.set(".skill", { clearProps: "transform, opacity, visibility" });
  },
});

gsap.utils.toArray("section h2, .projects-title").forEach((h2) => {
  gsap.from(h2, {
    scrollTrigger: { trigger: h2, start: "top 90%" },
    x: -50,
    opacity: 0,
    duration: 0.4,
    ease: "power4.out",
  });
});

gsap.from(".card", {
  scrollTrigger: { trigger: ".cards-container", start: "top 80%" },
  y: 100,
  opacity: 0,
  stagger: 0.2,
  duration: 0.6,
  ease: "power3.out",
});
