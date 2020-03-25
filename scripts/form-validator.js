  export class FormValidator {
    constructor(popup){
      this.form = popup.querySelector('.popup__form');
      this.button = popup.querySelector('.popup__button');
      this.form.addEventListener('input', this.validate.bind(this));
      this.ERROR_MESSAGES = {
        valueMissing: 'Это обязательное поле',
        tooShort: 'Должно быть от 2 до 30 символов',
        //Можно лучше: Стоит объединить сообщения, чтобы не будлировать текст.
        tooLong: 'Должно быть от 2 до 30 символов',
        typeMismatch: 'Здесь должна быть ссылка',
        noError: ''
      }
    }
      validate(event) {
        this.checkInputValidity(event.target, event.target.nextElementSibling);
        this.setSubmitButtonState(this.form, this.button);
    }
      checkInputValidity(input, error){

        if (input.validity.valueMissing) {
          return error.textContent = this.ERROR_MESSAGES.valueMissing;
        }
        if (input.validity.tooShort) {
          return error.textContent = this.ERROR_MESSAGES.tooShort;
        }
        if (input.validity.tooLong) {
          return error.textContent = this.ERROR_MESSAGES.tooLong;
        }
        if (input.validity.typeMismatch) {
          return error.textContent = this.ERROR_MESSAGES.typeMismatch;
        }
        error.textContent = this.ERROR_MESSAGES.noError;

    }
    setSubmitButtonState(form, button) {
      button.disabled = !form.checkValidity();
      if (form.checkValidity()) {
       form.querySelector('.popup__button').classList.add('activate-button');
       form.parentElement.querySelector('.popup__button').removeAttribute("disabled");
        return button.classList.add('disabled');
      }
      form.querySelector('.popup__button').classList.remove('activate-button');

        return button.classList.remove('disabled');


    }

  }
