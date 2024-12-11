
// Open the modal and display the clicked photo
function openModal(photoElement) {
    const modal = document.getElementById("photoModal");
    const modalImg = document.getElementById("zoomedPhoto");
  
    // Set the modal image source to the clicked photo's image source
    modalImg.src = photoElement.querySelector("img").src;
  
    // Show the modal
    modal.style.display = "flex";
  
    // Add the zoom effect after a short delay for smooth transition
    setTimeout(() => {
      modalImg.classList.add("zoom");
    }, 100);
  }
  
  // Close the modal
  function closeModal() {
    const modal = document.getElementById("photoModal");
    const modalImg = document.getElementById("zoomedPhoto");
  
    // Remove the zoom effect
    modalImg.classList.remove("zoom");
  
    // Hide the modal
    modal.style.display = "none";
  }

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

  