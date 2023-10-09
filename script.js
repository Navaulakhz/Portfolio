// JavaScript to hide cover page on scroll up
let prevScrollPos = window.pageYOffset;
window.onscroll = function() {
    const currentScrollPos = window.pageYOffset;
    if (prevScrollPos > currentScrollPos) {
        document.querySelector('.cover-page').classList.remove('scroll-up-hidden');
    } else {
        document.querySelector('.cover-page').classList.add('scroll-up-hidden');
    }
    prevScrollPos = currentScrollPos;
};
// JavaScript to simulate form submission (replace with actual form handling)
document.querySelector('#contact-form').addEventListener('submit', function (e) {
    e.preventDefault();

    // Simulate a successful form submission
    const successMessage = document.createElement('div');
    successMessage.classList.add('success-message');
    successMessage.innerHTML = '<p>Your message has been sent successfully!</p>';

    // Append the success message to the contact form
    this.parentNode.appendChild(successMessage);

    // Reset the form
    this.reset();

    // Automatically hide the success message after a few seconds (you can adjust the delay)
    setTimeout(function () {
        successMessage.style.display = 'none';
    }, 5000); // 5000 milliseconds (5 seconds)
});
