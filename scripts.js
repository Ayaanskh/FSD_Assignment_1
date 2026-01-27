// Simple interactive feature: toggle dark mode
document.addEventListener("DOMContentLoaded", () => {
  const footer = document.querySelector("footer");
  const toggleBtn = document.createElement("button");
  toggleBtn.textContent = "Toggle Dark Mode";
  toggleBtn.style.marginTop = "10px";
  footer.appendChild(toggleBtn);

  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
  });
});

// Dark mode styles
const style = document.createElement("style");
style.textContent = `
  .dark {
    background: #121212;
    color: #f4f4f9;
  }
  .dark header, .dark footer {
    background: #000;
  }
  .dark section {
    background: #1e1e1e;
    color: #f4f4f9;
  }
`;
document.head.appendChild(style);