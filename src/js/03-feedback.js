import throttle from 'lodash.throttle';

const saveValue = 'feedback-form-state';
const form = document.querySelector('.feedback-form');
const formData = {};

form.addEventListener(
  'input',
  throttle(event => {
    formData.email = form.elements.email.value;
    formData.message = form.elements.message.value;
    formData[event.target.name] = event.target.value;
    localStorage.setItem(saveValue, JSON.stringify(formData));
  }, 500),
);
getFormValue();
function getFormValue() {
  const formValues = localStorage.getItem(saveValue);
  if (formValues) {
    const formData = JSON.parse(formValues);
    if (formData.email === undefined) {
      formData.email = '';
    }

    if (formData.message === undefined) {
      formData.message = '';
    }
    form.elements.email.value = formData.email;
    form.elements.message.value = formData.message;
  }
}

// form.addEventListener('submit', event => {
//   event.preventDefault();
//   const formSubmitted = {};
//   formSubmitted[event.currentTarget.elements[0].name] = event.currentTarget.elements[0].value;
//   formSubmitted[event.currentTarget.elements[1].name] = event.currentTarget.elements[1].value;
//   if (!event.currentTarget.elements[0].value || !event.currentTarget.elements[1].value) {
//     alert('Fill in the Email and Message fields');
//     return;
//   }

form.addEventListener('submit', event => {
  event.preventDefault();
  const formSubmitted = {};
  formSubmitted[event.currentTarget.elements[0].name] = event.currentTarget.elements[0].value;
  formSubmitted[event.currentTarget.elements[1].name] = event.currentTarget.elements[1].value;
  if (!event.currentTarget.elements[0].value || !event.currentTarget.elements[1].value) {
    alert('Fill in the Email and Message fields');
    return;
  } 
  console.log(formSubmitted);
  event.currentTarget.reset();
  localStorage.removeItem(saveValue);
});
