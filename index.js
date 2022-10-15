// function validateEmail() {
// let email = document.getElementById("email")
//   let x = document.forms["action-form"]

//   ["email"].value

//   if (x == "") {
//     alert("invalid email");
//     email.style.border ="1px solid red"
//     return false;
//   }
// }

const form = document.forms[0];
const small = document.getElementById("small");
const email = form.elements["email"]

validateEmail = (e) => {
const validEmail = email.value;
if (validEmail.trim()===""){
  email.style.border = "1px solid red"
  small.innerHTML =`<i><h5>please provide a valid email address<h5></i>`
  small.style.color ="red"
  small.style.fontSize ="14px"
  
  return false
}else{
  alert(`you have suscribed and we will keep you notified.`)
  return true
}
};
