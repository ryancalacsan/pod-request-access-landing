const form = document.querySelector('.access__form');
const email = document.querySelector('.access__email');
const error = document.querySelector('.access__err');

form.addEventListener('submit', function (e) {
  if (email.value) {
    const regexMatch = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
      email.value
    );
    if (!regexMatch) {
      e.preventDefault();
      error.classList.add('show');
    }
  } else {
    e.preventDefault();
    error.classList.add('show');
  }
});
