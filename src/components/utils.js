function resetForm(form) {
  form.reset();
}

function resetInputError(form) {
  form.querySelectorAll('.popup__error').forEach((errorElement) => {
    errorElement.classList.remove('popup__error_visible');
    errorElement.textContent = '';
  });
  form.querySelectorAll('.popup__input').forEach((inputElement) => {
    inputElement.classList.remove('popup__input_type_error');
  });
}

export { resetForm, resetInputError };
