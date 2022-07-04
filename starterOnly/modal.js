function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const formulaire = document.querySelector("form");
const closeBtn = document.querySelectorAll(".close");
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const pageMerci = document.querySelector(".page-merci");
const ceParti = document.querySelector(".btn-submit-ceparti");
const fermer = document.querySelector(".btn-submit-fermer");
const tournoisLocation = document.getElementsByName("location");
const checkBox1 = document.getElementById("checkbox1")

// launch modal event
modalBtn.forEach((x) => x.addEventListener("click", launchModalForm));
closeBtn.forEach((x) => x.addEventListener("click" , closeModal )) ;
ceParti.addEventListener("click", launchModalPageMerci);
fermer.addEventListener("click",launchModalPageMerciFermer);


// launch modal form
function launchModalForm() {
  modalbg.style.display = "block";
  formulaire.style.display = "block";
  pageMerci.style.display = "none";
}

// close modal
function closeModal() {
  modalbg.style.display = "none";
}

// launch modal page merci
function launchModalPageMerci() {
  if(formValidate()){
    formulaire.reset();
    pageMerci.style.display = "block";
    formulaire.style.display = "none";
  }
}

function launchModalPageMerciFermer() {
  pageMerci.style.display = "none";
  modalbg.style.display = "none";
}

// ///////////////////////////////////////////////////////

// function validate...
function formValidate() {

  let isValide = true;


if(validateName(formulaire.first.value)){ 
  formData[0].setAttribute("data-error-visible","false")
}
else {
  formData[0].setAttribute("data-error-visible","true")
  isValide = false;
}

if(validateName(formulaire.last.value)){
  formData[1].setAttribute("data-error-visible","false")
}
else {
  formData[1].setAttribute("data-error-visible","true")
  isValide = false;
}

if(validateEmail(formulaire.email.value)){
  formData[2].setAttribute("data-error-visible","false")
}
else {
  formData[2].setAttribute("data-error-visible","true")
  isValide = false;
}

if(validateBirthdate(formulaire.birthdate.value)){
  formData[3].setAttribute("data-error-visible","false")
}
else {
  formData[3].setAttribute("data-error-visible","true")
  isValide = false;
}

if(validateTournoisQuantity(formulaire.quantity.value)){
  formData[4].setAttribute("data-error-visible","false")
}
else {
  formData[4].setAttribute("data-error-visible","true")
  isValide = false;
}

if(validateTournoisQuelle()){
  formData[5].setAttribute("data-error-visible","false")
}
else {
  formData[5].setAttribute("data-error-visible","true")
  isValide = false;
}

if(validateCheckBoxOne(formulaire.checkbox)){
  formData[6].setAttribute("data-error-visible","false")
}
else {
  formData[6].setAttribute("data-error-visible","true")
  isValide = false;
}
  return isValide;

}

// /////////////////////////////////////////////

// functionlar.....
function validateName(letterName){
  let Name =new Text(letterName);
  if (Name.length>2){
    return true
  }
  else{
    return false
  }

}

function validateEmail(letterEmail) {
  const vEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  if(letterEmail.match(vEmail)){
    return true;
  }
  else{
    return false
  }

}

function validateBirthdate(letterBirthDate){
  const Birthdate = new Date(letterBirthDate)
  if(Birthdate.getTime()<Date.now()){
    return true
  }
  else{
    return false
  }

}

function validateTournoisQuantity(lettreNumber) {
  const number = new Number(lettreNumber)
  
    if(number>0){
      return true;
    }
    else {
      return false;
    }
  }

  function validateTournoisQuelle() {

    for (let i=0; i<tournoisLocation.length; i++) {
      const isCheck = tournoisLocation[i].checked;
      
      if(isCheck){
        return true;
      }
    } 
    return false;
  }

  function validateCheckBoxOne() {
    const isCheck =checkBox1.checked;

    if(isCheck){
      return true;
    }
    else{
      return false;
    }
    
  }
