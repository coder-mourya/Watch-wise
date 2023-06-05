document.addEventListener("DOMContentLoaded", function() {
    const boxes = document.querySelectorAll(".box");
    let currentIndex = 0;
  
    setInterval(() => {
      // Hide current box
      boxes[currentIndex].style.display = "none";
  
      // Increment index or reset to 0
      currentIndex = (currentIndex + 1) % boxes.length;
  
      // Show next box
      boxes[currentIndex].style.display = "block";
    }, 2000);
  });
  






