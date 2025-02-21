let slideIndex = 0;

function showSlides() {
    const slides = document.getElementsByClassName("slide");
    const totalSlides = slides.length;

    // Hide all slides by setting opacity to 0
    for (let i = 0; i < totalSlides; i++) {
        slides[i].style.display = "none";  
        slides[i].style.opacity = "0"; // Hide the slide
    }

    // Increment slideIndex and reset if needed
    slideIndex = (slideIndex + 1) % totalSlides;

    // Show the current slide with a fade-in effect
    slides[slideIndex].style.display = "block";  // Display the current slide
    setTimeout(() => {
        slides[slideIndex].style.opacity = "1"; // Fade-in by changing opacity
    }, 10); // A small delay to trigger the transition
    
    // Change slide every 3 seconds
    setTimeout(showSlides, 5000);
}

// Ensure the function runs only after DOM is loaded
window.onload = showSlides;
