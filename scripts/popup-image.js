import {Popup} from './popup'
export class popupImage extends Popup {
    constructor(popup, popupimg) {
      super(popup);     
      this.popupimg = popupimg;
     
    }
    
    
    popupImage(link) {
      const popupimg = document.querySelector('#increaseImage');
      this.popupimg = popupimg;
      this.popupimg.firstElementChild.style.backgroundImage = link;
      this.popupimg.classList.add('place-card__image-popup');
      this.popupimg.classList.add('popup_is-opened');
    
    }
    
    close(){
      this.popupimg.classList.remove('place-card__image-popup');
      this.popupimg.classList.remove('popup_is-opened');
    }
    }
