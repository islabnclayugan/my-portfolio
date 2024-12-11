// Get the sidebar and the arrow element
const sidebar = document.querySelector(".sidebar");
const sidebarArrow = document.querySelector(".sidebar-arrow");

// Event listeners to toggle the sidebar expansion
sidebar.addEventListener("mouseenter", () => {
  sidebar.classList.add("expanded"); // Add expanded class when hovered
});

sidebar.addEventListener("mouseleave", () => {
  sidebar.classList.remove("expanded"); // Remove expanded class when mouse leaves
});
