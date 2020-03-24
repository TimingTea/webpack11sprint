class Api {
    constructor({baseUrl, headers}) {
        this.baseUrl = baseUrl;
        this.headers = headers;
    }

    makeFetch(url, method = 'GET', body = undefined){
        if (body){
            body = JSON.stringify(body);
        }
        return fetch(`${this.baseUrl}/${url}`, {
            method,
            headers: this.headers,
            body
        })
        .then(res =>{
            if (!res.ok) {
              return Promise.reject(res.status);
            }
            return res.json();
        });
    }


    getUser() {
        return this.makeFetch(`users/me`);
    }

    patchUser(name, about) {
        this.name = name;
        this.about = about;

        /* REVIEW2. При выполнении третьего обязательного задания (которое сейчас не выполнено, см. пункт "3.
         Редактирование профиля") нужно иметь в виду, что  данные о профиле после их редактирования пользователем,
          во-первых, должны заноситься на страницу только в случае успешного запроса, и, во-вторых,
  не из полей формы, а из объекта с данными профиля, который вернёт Вам сервер, данные в объекте будут те,
   Смотрите комментарии в модулях классов PopupWithSubmit и UserInfo.
   */

        return this.makeFetch(`users/me`, 'PATCH', {name, about});
    }

    getInitialCards() {
        return this.makeFetch(`cards`);
    }

    like(_id) {
        return this.makeFetch(`cards/like/${_id}`, 'PUT');
    }

    disLike(_id) {
        return this.makeFetch(`cards/like/${_id}`, 'DELETE');
    }



}
