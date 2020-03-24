class popupImage extends Popup {
    constructor(popup) {
      super(popup);     
      const popupIncreaseImage = document.querySelector('#increaseImage');
      this.popupIncreaseImage = popupIncreaseImage;
    }
    
    
    popupImage(link) {
      const popupIncreaseImage = document.querySelector('#increaseImage');
      this.popupIncreaseImage = popupIncreaseImage;
      this.popupIncreaseImage.firstElementChild.style.backgroundImage = link;
      this.popupIncreaseImage.classList.add('place-card__image-popup');
      this.popupIncreaseImage.classList.add('popup_is-opened');
    
    }
    
    close(){
      this.popupIncreaseImage.classList.remove('place-card__image-popup');
      this.popupIncreaseImage.classList.remove('popup_is-opened');
    }
    }
