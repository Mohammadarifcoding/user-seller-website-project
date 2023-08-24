const sellerBtn = document.getElementById('sellerBtn');
const userBtn = document.getElementById('userBtn');
// const sellerForm = document.getElementById('sellerForm');
// const userForm = document.getElementById('userForm');
const userEmail = document.getElementById('userEmail')
const sellerEmail = document.getElementById('sellerEmail');
// const sellerSubmit = document.getElementById('Sellersubmit')
// const userSubmit = document.getElementById('Usersubmit')

function getValueFromInputField(id) {
    let idCall = document.getElementById(id);
    let idValue = idCall.value;
    idCall.value = "";
    return idValue;
  }
  function getValueFromId(id) {
    let idCall = document.getElementById(id);
    let idValue = idCall.innerText;
    let value = parseFloat(idValue);
    return value;
  }
  function setValue(id, value) {
    let idCall = document.getElementById(id);
    idCall.innerText = value;
  }

sellerBtn.addEventListener('click', () => {
    sellerForm.classList.remove('hidden');
    userForm.classList.add('hidden');
    sellerBtn.classList.add('active');
    userBtn.classList.remove('active');
    // extra code 
   

});

userBtn.addEventListener('click', () => {
    sellerForm.classList.add('hidden');
    userForm.classList.remove('hidden');
    sellerBtn.classList.remove('active');
    userBtn.classList.add('active');
    // extra code 


});


const sellerForm = document.getElementById('sellerForm');
const userForm = document.getElementById('userForm');

const userSubmit = document.querySelector('#userForm button[type="submit"]');
userSubmit.addEventListener('click', function () {
    const email = getValueFromInputField('userEmail');
    if (email.endsWith('@gmail.com')) {
        window.location.href = '/userwebsite.html';
    } else {
        window.location.href = '/error2.html';
    }
});

const sellerSubmit = document.querySelector('#sellerForm button[type="submit"]');
sellerSubmit.addEventListener('click', function (event) {
    const email = getValueFromInputField('sellerEmail');
    if (email.endsWith('@gmail.com')) {
        window.location.href = '/sellerWebsite.html';
    } else {
        window.location.href = '/error2.html';
    }
});
