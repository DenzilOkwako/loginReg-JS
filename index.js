const formOpenBtn = document.querySelector("#form-open")
 home = document.querySelector(".home"),
 form_container = document.querySelector(".form_container")
 formCloseBtn = document.querySelector(".form_close"),

 signupBtn = document.querySelector("#signup"),
 loginBtn = document.querySelector("#signup"),
 pwShowHide = document.querySelectorAll(".pw_hide")

 formOpenBtn.addEventListener("click",()=> home.classList.add("show"))
 formCloseBtn.addEventListener("click",()=> home.classList.remove("show"))
  