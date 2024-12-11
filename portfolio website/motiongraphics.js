// List of video files (in order)
const videos = [
  'video1.mp4',
  'video2.mp4',
  'video3.mp4',
  // Add more video file names as needed
];

// Initialize the current video index
let currentVideoIndex = 0;

// Load a video based on the index
function loadVideo(videoFile) {
  const videoPlayer = document.getElementById('videoPlayer');
  videoPlayer.src = videoFile;
  videoPlayer.play();
}

// Change video when "Next" or "Previous" is clicked
function changeVideo(direction) {
  if (direction === 'next') {
    currentVideoIndex = (currentVideoIndex + 1) % videos.length; // Loop back to the first video after the last
  } else if (direction === 'prev') {
    currentVideoIndex = (currentVideoIndex - 1 + videos.length) % videos.length; // Loop to the last video when going back
  }
  
  // Load the new video
  loadVideo(videos[currentVideoIndex]);
}

// Initial video load
loadVideo(videos[currentVideoIndex]);

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