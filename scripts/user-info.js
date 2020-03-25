export class UserInfo {
    constructor(container, api, nameContainer, jobContainer, avatarContainer ) {
        this.container = container;
        this.nameContainer = nameContainer;
        this.jobContainer = jobContainer;
        this.avatarContainer = avatarContainer;
        this.api = api;
    }

    setUserAvatar(avatar) {
        this.avatar = avatar;
        this.avatarContainer.style.backgroundImage = `url(${avatar})`;
    }

    setUserInfo(name, job, _id) {
        this.name = name;
        this.job = job;
        this._id = _id;
    }

    updateUserInfo () {
        this.nameContainer.textContent = this.name;
        this.jobContainer.textContent = this.job;
    }

}// этот метод используется для обновления дома, а не для отправки данных на сервер



