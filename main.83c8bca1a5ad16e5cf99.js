!function(e){var t={};function r(s){if(t[s])return t[s].exports;var o=t[s]={i:s,l:!1,exports:{}};return e[s].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,s){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(s,o,function(t){return e[t]}.bind(null,o));return s},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=1)}([function(e,t,r){},function(e,t,r){"use strict";r.r(t),r.d(t,"popupimg",(function(){return p}));r(0);class s{like(e){e.target.classList.toggle("place-card__like-icon_liked")}remove(e){e.currentTarget.removeChild(e.target.closest(".place-card"))}create(e){const t=document.createElement("div");t.dataset.cardId=e._id;const r=document.createElement("div"),s=document.createElement("button"),o=document.createElement("div"),n=document.createElement("h3"),i=document.createElement("button"),a=document.createElement("p");return t.className="place-card",r.className="place-card__image",r.setAttribute("style",`background-image: url(${e.link})`),s.className="place-card__delete-icon",o.className="place-card__description",n.className="place-card__name",i.className="place-card__like-icon",a.className="place-card__like-count",r.addEventListener("click",(function(e){e.target.classList.contains("place-card__delete-icon")||p.popupImage(r.style.backgroundImage)})),t.appendChild(r),r.appendChild(s),t.appendChild(o),n.textContent=e.name,o.appendChild(n),o.appendChild(i),o.appendChild(a),t}setLike(e){e.querySelector(".place-card__like-icon").classList.add("place-card__like-icon_liked")}updateLikesCounter(e,t){e.querySelector(".place-card__like-count").textContent=t}}class o{constructor({baseUrl:e,headers:t}){this.baseUrl=e,this.headers=t}makeFetch(e,t="GET",r){return r&&(r=JSON.stringify(r)),fetch(`${this.baseUrl}/${e}`,{method:t,headers:this.headers,body:r}).then(e=>e.ok?e.json():Promise.reject(e.status))}getUser(){return this.makeFetch("users/me")}patchUser(e,t){return this.name=e,this.about=t,this.makeFetch("users/me","PATCH",{name:e,about:t})}getInitialCards(){return this.makeFetch("cards")}like(e){return this.makeFetch(`cards/like/${e}`,"PUT")}disLike(e){return this.makeFetch(`cards/like/${e}`,"DELETE")}}class n{constructor(e,t,r,s,o){this.container=e,this.nameContainer=r,this.jobContainer=s,this.avatarContainer=o,this.api=t}setUserAvatar(e){this.avatar=e,this.avatarContainer.style.backgroundImage=`url(${e})`}setUserInfo(e,t,r){this.name=e,this.job=t,this._id=r}updateUserInfo(){this.nameContainer.textContent=this.name,this.jobContainer.textContent=this.job}}class i{constructor(e,t,r,s){this.card=t,this.container=e,this.userInfo=s,this.api=r,e.addEventListener("click",this.eventHandler.bind(this))}addCard(e){const t=this.card.create(e);this.card.updateLikesCounter(t,e.likes.length),this.needLIke(e)&&this.card.setLike(t),this.container.appendChild(t)}needLIke(e){return e.likes.find(e=>e._id===this.userInfo._id)}setCards(e){this.initCards=e}render(){for(const e of this.initCards)this.addCard(e)}eventHandler(e){e.target.classList.contains("place-card__like-icon")?this.card.like(e):e.target.classList.contains("place-card__delete-icon")&&this.card.remove(e)}}class a{constructor(e){this.popup=e,this.popup.querySelector(".popup__close").addEventListener("click",()=>{this.close()})}open(){this.popup.classList.add("popup_is-opened")}close(){this.popup.closest(".popup").classList.remove("popup_is-opened"),this.form.reset()}}class c extends a{constructor(e,t){super(e,t),this.userInfo=t,this.form=e.querySelector("form"),this.button=document.querySelector(".popup__button"),this.errorMessages=Array.from(e.querySelectorAll(".error-message"))}addListener(){this.form.addEventListener("submit",this.onSubmit.bind(this))}close(){super.close(),this.errorMessages.map(e=>e.textContent="")}onSubmit(e){e.preventDefault(),this.close()}}class u extends c{constructor(e,t){super(e),this.cardList=t}onSubmit(e){e.preventDefault();const t=this.form.querySelector(".popup__input_placeName").value,r=this.form.querySelector(".popup__input_placeLink").value;this.cardList.addCard({name:t,link:r,likes:[]}),this.close()}}class l extends c{constructor(e,t,r){super(e),this.userInfo=t,this.api=r,this.button=document.querySelector("#saveUserInfoButton")}open(){super.open(),this.form.querySelector(".popup__input_userName").value=this.userInfo.name,this.form.querySelector(".popup__input_userJob").value=this.userInfo.job,this.button.classList.add("activate-button")}onSubmit(e){e.preventDefault(),this.button.textContent="...Загрузка",this.api.patchUser(this.form.querySelector(".popup__input_userName").value,this.form.querySelector(".popup__input_userJob").value).then(({_id:e,name:t,about:r})=>{this.userInfo.setUserInfo(t,r,e),this.userInfo.updateUserInfo(),this.button.textContent="Сохранить",this.close()}).catch(e=>{console.log(`Error setting user data - ${e}`)})}}class d{constructor(e){this.form=e.querySelector(".popup__form"),this.button=e.querySelector(".popup__button"),this.form.addEventListener("input",this.validate.bind(this)),this.ERROR_MESSAGES={valueMissing:"Это обязательное поле",tooShort:"Должно быть от 2 до 30 символов",tooLong:"Должно быть от 2 до 30 символов",typeMismatch:"Здесь должна быть ссылка",noError:""}}validate(e){this.checkInputValidity(e.target,e.target.nextElementSibling),this.setSubmitButtonState(this.form,this.button)}checkInputValidity(e,t){return e.validity.valueMissing?t.textContent=this.ERROR_MESSAGES.valueMissing:e.validity.tooShort?t.textContent=this.ERROR_MESSAGES.tooShort:e.validity.tooLong?t.textContent=this.ERROR_MESSAGES.tooLong:e.validity.typeMismatch?t.textContent=this.ERROR_MESSAGES.typeMismatch:void(t.textContent=this.ERROR_MESSAGES.noError)}setSubmitButtonState(e,t){return t.disabled=!e.checkValidity(),e.checkValidity()?(e.querySelector(".popup__button").classList.add("activate-button"),e.parentElement.querySelector(".popup__button").removeAttribute("disabled"),t.classList.add("disabled")):(e.querySelector(".popup__button").classList.remove("activate-button"),t.classList.remove("disabled"))}}!function(){const e=document.querySelector("#newCardButton"),t=document.querySelector(".user-info"),r=document.querySelector(".places-list"),a=document.querySelector("#cardmaker"),p=document.querySelector("#userInfoEdit"),h=document.querySelector(".user-info__editButton"),m=document.querySelector(".user-info__name"),_=document.querySelector(".user-info__job"),f=document.querySelector(".user-info__photo"),b=new s,S=new o({baseUrl:"https://praktikum.tk/cohort8",headers:{authorization:"ea4e2b6f-f98e-4cf4-b38f-fe41e9a934dd","Content-Type":"application/json"}}),y=new n(t,S,m,_,f),g=new i(r,b,S,y),v=new u(a,g),k=new l(p,y,S);v.addListener(),k.addListener(),y.setUserInfo(document.querySelector(".user-info__name").textContent,document.querySelector(".user-info__job").textContent);new d(a);e.addEventListener("click",v.open.bind(v)),h.addEventListener("click",k.open.bind(k));const E=document.querySelector(".popup");new c(E,y);Promise.all([S.getInitialCards(),S.getUser()]).then(([e,t])=>{y.setUserInfo(t.name,t.about,t._id),y.updateUserInfo(),y.setUserAvatar(t.avatar),g.setCards(e),g.render()}).catch(e=>{console.log(`Error setting user data - ${e}`)})}();const p=new class extends a{constructor(e,t){super(e),this.popupimg=t}popupImage(e){const t=document.querySelector("#increaseImage");this.popupimg=t,this.popupimg.firstElementChild.style.backgroundImage=e,this.popupimg.classList.add("place-card__image-popup"),this.popupimg.classList.add("popup_is-opened")}close(){this.popupimg.classList.remove("place-card__image-popup"),this.popupimg.classList.remove("popup_is-opened")}}(document.querySelector("#increaseImage"));new d(document.querySelector("#userInfoEdit"))}]);