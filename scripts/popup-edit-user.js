import {PopupWithSubmit} from './popup-withs-submit'
export class PopupEditUser extends PopupWithSubmit {
    constructor(popup, userInfo, api) {
        super(popup);
        this.userInfo = userInfo;
        this.api = api;
        this.button = document.querySelector('#saveUserInfoButton');
    }
    open() {
        super.open()
        this.form.querySelector('.popup__input_userName').value = this.userInfo.name;
        this.form.querySelector('.popup__input_userJob').value = this.userInfo.job;
        this.button.classList.add('activate-button');
    };
    onSubmit(event) {
        event.preventDefault();
        this.button.textContent = '...Загрузка';
        this.api.patchUser(
            this.form.querySelector('.popup__input_userName').value,
            this.form.querySelector('.popup__input_userJob').value
        )
            .then(({_id, name, about}) => {
                this.userInfo.setUserInfo(name, about, _id);
                this.userInfo.updateUserInfo();
                this.button.textContent = 'Сохранить';
                this.close();
            })
            .catch(error => {
                console.log(`Error setting user data - ${error}`);
            })
    }
}