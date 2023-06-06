const submit = document.getElementById("submit");
const display = document.getElementById("divDisplay");
const form = document.getElementById("form");
const submitBtn = document.querySelector("#submit");

const firstName = document.querySelector("#first_name"),
      lastName = document.querySelector("#last_name"),
      email = document.querySelector("#user_email"),
      phoneNumber = document.querySelector("#phone_number"),
      password = document.querySelector("#password"),
      confirm = document.querySelector("#confirm_password");


form.onsubmit = (e) => updateDisplay(e);

function updateDisplay(e) {
    e.preventDefault(); 
    if (password.value === confirm.value){
    display.setAttribute('style', 'white-space: pre;');
    display.textContent =  `Name: ${firstName.value} ${lastName.value}\r\n`
    display.textContent += `Email: ${email.value}\r\n`
    display.textContent += `Phone Number: ${phoneNumber.value}\r\n`
    display.textContent += `Password: ${password.value}`}

    else {display.textContent = "Password confirmation failed"}
    
}