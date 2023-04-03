

// select all like buttons
const likeBtns = document.querySelectorAll('.like-btn');

// Looks at the form and places the button when the user like someone
const form = document.querySelector('form');
const submitBtn = document.querySelector('#submit-btn');

form.addEventListener('change', () => {
  submitBtn.style.display = 'block';
});

// Work in progress form button
function submitAllForms() {
  $('form').submit();
}