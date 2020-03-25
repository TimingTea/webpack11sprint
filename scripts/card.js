import {popupimg} from './script'
export class Card {


  like(event) {
      event.target.classList.toggle('place-card__like-icon_liked');
    }

  remove(event) {
    /*REVIEW4. Исправила. В консоли выдавалось сообщение placesList is undefined. Конечно так только и могло быть, потому что placesList Вы
    не передали как параметр в класс Card, но и передавать его как параметр сюда тоже ни к чему, так как тоже самое, что и placesList в данном случае
    означает event.currentTarget - элемент, на который Вы навешиваете слушатель события клика по значку корзинки.  Сейчас в этом месте ошибки в консоли нет.*/
    //placesList.removeChild(event.target.closest('.place-card'));
    event.currentTarget.removeChild(event.target.closest('.place-card'));
      //document.querySelector('.places-list').removeChild(this.parentElement.closest('.place-card'));
    }

  create(card) {
    const cardItem = document.createElement('div');
    cardItem.dataset.cardId = card._id;
    const cardImage = document.createElement('div'); //иллюстрация карточки
    const cardDeleteIcon = document.createElement('button');//кнопка удаления карточки
    const cardDescription = document.createElement('div');//описание карточки
    const cardName = document.createElement('h3'); //имя карточки
    const cardLikeIcon = document.createElement('button')
    const cardLikeIconCount = document.createElement('p');//Счётчик лайков
    cardItem.className = 'place-card';
    cardImage.className = 'place-card__image';
    cardImage.setAttribute('style', `background-image: url(${card.link})`);
    //cardImage.style.backgroundImage = 'url(' + link + ')';
    cardDeleteIcon.className = 'place-card__delete-icon';
    cardDescription.className = 'place-card__description';
    cardName.className = 'place-card__name';
    cardLikeIcon.className = 'place-card__like-icon';
    cardLikeIconCount.className = 'place-card__like-count'; //Счётчик лайков

//Можно лучше: Навешивание обработчиков лучше производить в отдельном методе, принимающем на вход созданную карточку.
    cardImage.addEventListener('click', function(event){
      if (!event.target.classList.contains('place-card__delete-icon')) {
        popupimg.popupImage(cardImage.style.backgroundImage);
      }
    })

    cardItem.appendChild(cardImage);
    cardImage.appendChild(cardDeleteIcon);
    cardItem.appendChild(cardDescription);
    cardName.textContent = card.name;
    cardDescription.appendChild(cardName);
    cardDescription.appendChild(cardLikeIcon);
    cardDescription.appendChild(cardLikeIconCount);//Счётчик лайков

    return cardItem;
  }

  setLike(element) {
    element.querySelector('.place-card__like-icon').classList.add('place-card__like-icon_liked');
  }
  updateLikesCounter(element, count) {
    element.querySelector('.place-card__like-count').textContent = count;

  }
}
