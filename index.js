const form = document.forms[0];
const small = document.getElementById("small");
const email = form.elements["email"];

validateEmail = (e) => {
  const validEmail = email.value;
  if (validEmail.trim() === "") {
    email.style.border = "1px solid red";
    small.innerHTML = `<i><h5>email address cannot be empty<h5></i>`;
    small.style.color = "red";
    small.style.fontSize = "14px";

    return false;
  } else {
    alert(`you have suscribed and we will keep you notified.`);
    return true;
  }
}

// let number = prompt(`enter number to continue`)
// for (let number = 0; number < 9; number += 2) {
//   console.log(number);
// }

// let result = 1
// for(counter = 0 ; counter < 10 ; counter++) {
//   result *= 2;
