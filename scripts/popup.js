    export class Popup {
      constructor(popup){
        this.popup = popup;
        this.popup.querySelector('.popup__close').addEventListener('click', ()=>{
          this.close()
        });
      }
      open() {
        this.popup.classList.add('popup_is-opened');
      }
      close() {
        this.popup.closest('.popup').classList.remove('popup_is-opened');
        this.form.reset()    
      }
    }