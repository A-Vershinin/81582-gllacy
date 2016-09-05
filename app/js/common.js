var link = document.querySelector(".js-contact");
var popup = document.querySelector(".modal-feedback");
var close = popup.querySelector(".modal-feedback-close");
var form = popup.querySelector("form");
var nameUser = popup.querySelector("[name=name]");
var emailUser = popup.querySelector("[name=email]");
var reviewUser = popup.querySelector("[name=review]");
var overlay = document.querySelector(".modal-overlay");

var storageName = localStorage.getItem("nameUser");
var storageEmail = localStorage.getItem("emailUser");

link.addEventListener("click", function(event) {
  event.preventDefault();
  // console.log("Нажал на кнопку Форма обратной связи");
  popup.classList.add("modal-feedback--show");
  console.log("Включается оверлей");
  overlay.classList.add("modal-overlay--show");
  // console.log("Включается оверлей");
  // console.log(storageName);
  // console.log(storageEmail);
  // console.log(emailUser);

  // дёргается попап из-за стореджа
  if (storageName) {
    nameUser.value = storageName;
    emailUser.focus();
  } else {
    nameUser.focus()
  }
  if (storageEmail) {
    emailUser.value = storageEmail;
    if (storageName) {
        reviewUser.focus();
    } else {
      nameUser.focus();
    }
  } else {
    emailUser.focus()
  }
});

close.addEventListener("click",function(event) {
  event.preventDefault();
  popup.classList.remove("modal-feedback--show");
  overlay.classList.remove("modal-overlay--show");
  popup.classList.remove("modal-error");
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains("modal-feedback--show")) {
      popup.classList.remove("modal-feedback--show");
      overlay.classList.remove("modal-overlay--show");
      popup.classList.remove("modal-error");
    }
  }
});

form.addEventListener("submit", function(event) {
  event.preventDefault();
  console.log(nameUser.value); //для проверки
  console.log(emailUser.value);
  console.log(reviewUser.value);
   if (!nameUser.value || !emailUser.value || !reviewUser.value) {
     event.preventDefault();
     popup.classList.remove("modal-error");
     popup.offsetWidth = popup.offsetWidth;
     popup.classList.add("modal-error");
    //  console.log("Нужно ввести имя, имейл и текст письма"); //для проверки
   }
   else {
      localStorage.setItem("name", nameUser.value);
      localStorage.setItem("email", emailUser.value);
    }
 });
