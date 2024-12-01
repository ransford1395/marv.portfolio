// Modal elements
const photo = document.getElementById('photo');
const modal = document.getElementById('modal');
const closeBtn = document.querySelector('.close');
// Modal confirmation for form submission
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const confirmation = confirm('Are you sure you want to submit this form?');
    if (confirmation) {
        alert('Thank you for reaching out! Your form has been submitted.');
        contactForm.reset(); // Clear the form after submission
    } else {
        alert('Form submission canceled.');
    }
});