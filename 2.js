const image = document.getElementById('rotating-image');
let angle = 0;

function rotateImage() {
    angle = (angle + 1) % 360; // Increment angle and reset at 360
    image.style.transform = `rotate(${angle}deg)`;
    requestAnimationFrame(rotateImage); // Call function for the next frame
}

rotateImage(); // Start rotation





window.onload = function () {
    const loading = document.getElementById('loading');
    const content = document.getElementById('main');
    const cursor = document.querySelector('.cursor');
    
    loading.style.display = 'none'; // Hide the loader
    content.classList.add('loaded'); // Show the content
    cursor.style.display = 'none';
};