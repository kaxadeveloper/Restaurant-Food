// Elements
const bookingBtns = document.querySelectorAll('a.highlight, .white-link');
const modal = document.getElementById('bookingModal');
const closeBtn = document.querySelector('.close-btn');
const form = document.getElementById('bookingForm');
const menuBtn = document.querySelector('.teal-link');

// Open modal when "Book a Table" is clicked
bookingBtns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    modal.classList.remove('hidden');
  });
});

// Close modal when close button clicked
closeBtn.addEventListener('click', () => {
  modal.classList.add('hidden');
});

// Close modal when clicking outside the modal
window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.add('hidden');
  }
});

// Handle form submission
form.addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Table successfully booked! 🍽️');
  modal.classList.add('hidden');
  form.reset();
});

// Alert for "View our Menu"
menuBtn.addEventListener('click', (e) => {
  e.preventDefault();
  alert('Our delicious menu is coming soon! 🍕🥗🍔');
});
