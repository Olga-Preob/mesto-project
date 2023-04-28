const spinner = document.querySelector('.spinner');

function changeVisibility(isLoading, element) {
  if (isLoading) {
    element.classList.remove('visible-element');
  } else {
    element.classList.add('visible-element');
  }
}

function resetForm(form) {
  form.reset();
}

export { changeVisibility, resetForm };
