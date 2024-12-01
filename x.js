// Modal elements
const photo = document.getElementById('photo');
const modal = document.getElementById('modal');
const closeBtn = document.querySelector('.close');

// Open modal when clicking the photo
photo.addEventListener('click', () => {
    modal.style.display = 'block';
});

// Close modal when clicking the close button
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Close modal if clicking outside the modal content
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});