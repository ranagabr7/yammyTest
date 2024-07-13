$(function () {
  $(".loader").fadeOut(1000, function () {
    $(".loading").slideUp(1000, function () {
      $("body").css("overflow", "auto");
      $(".loading").remove();
    });
  });
});

// ---------------------------------------------
$(".icon").on("click", function () {
  $(".side").animate(
    { width: "toggle", paddingInline: "toggle" },
    1000,
    function () {
      $("#close").toggleClass("d-block");
      $("#open").toggleClass("d-none");
    }
  );
});
// -------------------------------------------------------------------
const inputName = document.getElementById("inputName");
const inputEmail = document.getElementById("inputEmail");
const inputPhone = document.getElementById("inputPhone");
const inputAge = document.getElementById("inputAge");
const inputPassword = document.getElementById("inputPassword");
const inputRepassword = document.getElementById("inputRepassword");
const sent = document.getElementById("send");
let dataList = [];

function sendData() {
  if (validationName() && validationEmail() && validationPhone()
    && validationAge() && validationPassword()
&&validationRepassword() == true) {
    let dataContent = {
      name: inputName.value,
      email: inputEmail.value,
      phone: inputPhone.value,
      age: inputAge.value,
      password: inputPassword.value,
      repassword: inputRepassword.value,
    };
    dataList.push(dataContent);
    clearInput();
  }
}
// clear input
function clearInput() {
  inputName.value = null;
  inputEmail.value = null;
  inputPhone.value = null;
  inputAge.value = null;
  inputPassword.value = null;
  inputRepassword.value = null;
}
// validation
function validationName() {
  let text = inputName.value;
  let regex = /^[A-Z a-z]{1,}$/gi;
  
  if (regex.test(text) == true) {
    alertName.classList.add("d-none");
    return true;
  } else {
    let alertName = document.getElementById("alertName");
    alertName.classList.remove("d-none");
    return false;
  }
}

function validationEmail() {
  let mail = inputEmail.value;
  let regex = /^[A-Z a-z]{1,}[0-9]?@[A-Z a-z]{1,}[0-9]?.(org|com|gmail)$/gi;
  
  if (regex.test(mail) == true) {
    alertEmail.classList.add("d-none");
    return true;
  } else {
    let alertEmail = document.getElementById("alertEmail");
    alertEmail.classList.remove("d-none");
    return false;
  }
}



function validationPhone() {
    let phone = inputPhone.value;
    let regex = /^(\+1)?[0-9]{11}$/gi;
  
    if (regex.test(phone) == true) {
        alertPhone.classList.add("d-none");
      return true;
    } else {
     let alertPhone = document.getElementById("alertPhone");
      alertPhone.classList.remove("d-none");
      return false;
    }
}
function validationAge() {
    let age = inputAge.value;
    let regex = /^([1-9][0-9])|90$/gi;
  
    if (regex.test(age) == true) {
        alertAge.classList.add("d-none");
      return true;
    } else {
     let alertAge = document.getElementById("alertAge");
     alertAge.classList.remove("d-none");
      return false;
    }
}
function validationPassword() {
    let password = inputPassword.value;
    let regex = /^([A-Z a-z]{1,8})|([0-9]{1,5}[a-z])$/gi;
  
    if (regex.test(password) == true) {
        alertPass.classList.add("d-none");
      return true;
    } else {
     let alertPass = document.getElementById("alertPass");
     alertPass.classList.remove("d-none");
      return false;
    }

}
function validationRepassword() {
    let password = inputPassword.value;
    let Repass= inputRepassword.value;
    if(password == Repass ){
validationPassword();
alertRePass.classList.add("d-none");
return true;
    }else{
       
        let alertRePass = document.getElementById("alertRePass");
        alertRePass.classList.remove("d-none");
        return false;
    }
}
