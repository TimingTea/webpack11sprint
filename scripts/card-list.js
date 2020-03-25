export class CardList {
  constructor(container,  card, api, userInfo) {
    this.card = card;
    this.container = container;
    this.userInfo = userInfo;
    this.api = api;
    container.addEventListener('click', this.eventHandler.bind(this));

  }
  addCard(card) {  
    const element = this.card.create(card);
    this.card.updateLikesCounter(element, card.likes.length);
    if (this.needLIke(card)){
      this.card.setLike(element);
    }
    this.container.appendChild(element);
  }

  needLIke(card) {
    return card.likes.find((like) => like._id === this.userInfo._id)
  }

  setCards(initCards) {
    this.initCards = initCards;
  }

  render() {
    for (const element of this.initCards) {
      this.addCard(element);
    }
  }
  eventHandler(event) {
    if (event.target.classList.contains('place-card__like-icon')) {
      this.card.like(event)
    }
    else if (event.target.classList.contains('place-card__delete-icon')) {
      this.card.remove(event);
    }
  }
  // eventHandler(event) {
  //   if(event.target.classList.contains('place-card__like-icon')) {
  //     const cardId = event.target.closest('.place-card').dataset.cardId;
  //     const card = this.initCards.find(card => card._id === cardId);
  //     if (! this.needLIke(card)) {
  //       this.api.like(card._id)
  //       .then ((card) => {
  //        // .then ((newCard) => {
  //         //   card.likes = newCard.likes;
  //         this.card.like(event)
  //         this.card.updateLikesCounter(event.target.closest('.place-card'), card.likes.length)
  //       })
  //     }
  //     else {
  //       this.api.disLike(card._id)
  //       .then((card) =>{
  //         // .then ((newCard) => {
  //         //   card.likes = newCard.likes;          
  //         this.card.like(event)          
  //         this.card.updateLikesCounter(event.target.closest('.place-card'), card.likes.length)
  //       })
  //     }

  //   }
  //   else if(event.target.classList.contains('place-card__delete-icon')){
  //     this.card.remove(event);
  //   }
  // }

}

