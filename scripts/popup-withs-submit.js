import {Popup} from './popup'

export  class PopupWithSubmit extends Popup{
  constructor(popup, userInfo){
    super(popup, userInfo);
    this.userInfo = userInfo;
    this.form = popup.querySelector('form');
    this.button = document.querySelector('.popup__button');
    this.errorMessages = Array.from(popup.querySelectorAll('.error-message'))
  }
  addListener() {
    this.form.addEventListener('submit', this.onSubmit.bind(this));
  }
  close(){
    super.close();
    this.errorMessages.map(error => error.textContent = '')
  }
  onSubmit(event){
    event.preventDefault();
    this.close();
  }
}



