document.querySelectorAll(".skill-level").forEach((skill) => {
  const level = skill.getAttribute("data-level");
  skill.style.setProperty("--level", `${level}%`);
});

function updateNavIndicator(target) {
  const indicator = document.querySelector(".nav-indicator");
  const tabRect = target.getBoundingClientRect();
  const navRect = target.closest(".navbar").getBoundingClientRect();

  indicator.style.left = `${tabRect.left - navRect.left}px`;
  indicator.style.width = `${tabRect.width}px`;
}

document.querySelectorAll("[data-tab]").forEach((tab) => {
  tab.addEventListener("click", (e) => {
    e.preventDefault();
    const target = e.currentTarget;
    const tabId = target.getAttribute("data-tab");

    // Update active states
    document
      .querySelectorAll("[data-tab]")
      .forEach((t) => t.classList.remove("active"));
    target.classList.add("active");

    // Update content visibility
    document.querySelectorAll(".tab-content").forEach((content) => {
      content.classList.remove("active");
    });
    document.getElementById(tabId).classList.add("active");

    updateNavIndicator(target);
  });
});

// Initialize indicator position
window.addEventListener("load", () => {
  updateNavIndicator(document.querySelector("[data-tab].active"));
});
