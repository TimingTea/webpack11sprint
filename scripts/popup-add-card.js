class PopupAddCard extends PopupWithSubmit{
  constructor(popup, cardList){
    super(popup);
    this.cardList = cardList;
  }
  onSubmit(event){
    event.preventDefault();
    const name = this.form.querySelector('.popup__input_placeName').value;
    const link = this.form.querySelector('.popup__input_placeLink').value;     
    this.cardList.addCard({name, link, likes: []});
    this.close();
    
  }
}