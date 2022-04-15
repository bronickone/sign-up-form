const password = document.getElementById("password")
const confPpassword = document.getElementById("confPassword");
const passMatch = document.querySelector('.passMatch');

function validatePassword(){
  if(password.value != confPassword.value) {
    passMatch.textContent = "*Passwords don't match";
    confPassword.setCustomValidity("Passwords don't match");
  } else {
    confPassword.setCustomValidity('');
    passMatch.textContent = "";
  }
}

password.onchange = validatePassword;
confPassword.onkeyup = validatePassword;

const invals = document.querySelectorAll('.inval');
const inputs = document.querySelectorAll('.inp');
console.log(inputs[1]);

  for (let i = 0; i < inputs.length; i++){
    console.log(inputs[i])         
  inputs[i].addEventListener('change', () => {
    
      invals[i].textContent = "  ❌"
    
  })
  }
