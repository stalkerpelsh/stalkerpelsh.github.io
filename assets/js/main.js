"use strict";var buttons=document.querySelectorAll(".menu-comment__btn");buttons.forEach(function(e){e.addEventListener("click",function(e){e.preventDefault();for(var t=this.closest(".menu__list").querySelectorAll(".menu-item"),n=0;n<t.length;n++)t[n].querySelectorAll(".menu-item__radio")[0].checked=!0})});var toggler=document.getElementById("eating-toggle"),menuSchedule=document.querySelectorAll(".menu__day"),menuText=document.querySelectorAll(".menu__text"),eatVar=document.querySelectorAll(".header__switch-variant");toggler&&(toggler.addEventListener("change",function(e){if(e.preventDefault(),1!=toggler.checked){for(var t=0;t<menuSchedule.length;t++)menuSchedule[t].classList.remove("menu__day_visible");menuText[0].classList.add("menu__text_visible")}else{for(var n=0;n<menuSchedule.length;n++)menuSchedule[n].classList.add("menu__day_visible");menuText[0].classList.remove("menu__text_visible")}}),eatVar[0].addEventListener("click",function(e){e.preventDefault();for(var t=0;t<menuSchedule.length;t++)menuSchedule[t].classList.remove("menu__day_visible");menuText[0].classList.add("menu__text_visible"),toggler.checked=!1}),eatVar[1].addEventListener("click",function(e){e.preventDefault();for(var t=0;t<menuSchedule.length;t++)menuSchedule[t].classList.add("menu__day_visible");menuText[0].classList.remove("menu__text_visible"),toggler.checked=!0}));var logBtn=document.getElementById("log-btn"),passState=!1,loginState=!1,removeValidation=function(){for(var e=document.querySelectorAll(".login-form__message"),t=document.querySelectorAll(".login-form__input-group"),n=0;n<e.length;n++)e[n].remove(),t[n].classList.remove("login-form__input-group_error")},checkCorrectValue=function(){loginState&&passState&&(document.location.href="/menu-schedule.html")},loginCheck=function(){var e=document.getElementById("email");e.value?"pvp@shoot.halal"!==e.value?(e.parentNode.insertAdjacentHTML("beforeend","<span class='login-form__message'>Правильный логин - pvp@shoot.halal</span>"),e.parentNode.classList.add("login-form__input-group_error")):loginState=!0:e.parentNode.insertAdjacentHTML("beforeend","<span class='login-form__message'>Поле должно быть заполнено</span>")},passCheck=function(){var e=document.getElementById("pass");e.value?"salam"!==e.value?(e.parentNode.insertAdjacentHTML("beforeend","<span class='login-form__message'>Правильный пароль - salam</span>"),e.parentNode.classList.add("login-form__input-group_error")):passState=!0:e.parentNode.insertAdjacentHTML("beforeend","<span class='login-form__message'>Поле должно быть заполнено</span>")};if(logBtn){for(var inputs=document.querySelectorAll(".login-form__input"),i=0;i<inputs.length;i++)inputs[i].addEventListener("change",function(){removeValidation(),loginCheck(),passCheck()});logBtn.addEventListener("click",function(e){e.preventDefault(),removeValidation(),loginCheck(),passCheck(),checkCorrectValue()}),document.addEventListener("keypress",function(e){"Enter"===e.key&&(removeValidation(),loginCheck(),passCheck(),checkCorrectValue())})}