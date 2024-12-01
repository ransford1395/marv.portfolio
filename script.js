// Modal functionality for profile picture
const photo = document.getElementById('photo');
const modal = document.getElementById('modal');
const closeBtn = document.querySelector('.close');

photo.addEventListener('click', () => {
    modal.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// Form submission modal (for the contact page)
function confirmSubmission(event) {
    event.preventDefault();
    const confirmModal = confirm('Are you sure you want to submit this form?');
    if (confirmModal) {
        alert('Form submitted successfully!');
    } else {
        alert('Form submission canceled.');
    }
}