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

  let productList = document.getElementById('productList').children
  document.getElementById('productNumber').innerText = parseInt(productList.length);
  

let update = document.getElementById('update')
  update.addEventListener('click',function(){
    let inputSellerName = getValueFromInputField('inputSellerName')
    let inputSellerEmail = getValueFromInputField('inputSellerEmail')
  let inputSellerMobile = getValueFromInputField('inputSellerMobile')
  let inputSellerAddress = getValueFromInputField('inputSellerAddress')
  if(inputSellerMobile.length == 11){
    setValue('sellerPhone',inputSellerMobile)
    document.getElementById('inputSellerMobile').value  = ''
  }
  if(inputSellerEmail.endsWith('@gmail.com')){
    setValue('sellerEmail',inputSellerEmail)
    document.getElementById('inputSellerEmail').value = ''
  }
  if(inputSellerName.length > 2){
    setValue('sellerName',inputSellerName)
    document.getElementById('inputSellerName').value = ''
  }
   if(inputSellerAddress.length > 10){
    setValue('sellerAddress',inputSellerAddress)
    document.getElementById('inputSellerAddress').value = ''
   }

   
  })

  function deleteproduct(target){
    let productList = document.getElementById('productList');
    productList.removeChild(target.parentNode);
    let productNumber = document.getElementById('productNumber')
  productNumber.innerText = parseInt(productList.children.length)
    
  }


// JavaScript code for adding products to the list
let productSubmit = document.getElementById('productSubmit');
productSubmit.addEventListener('click', function() {
  let productName = getValueFromInputField('productName');
  let productPrice = getValueFromInputField('productPrice');
  
  let productImageInput = document.getElementById('productImage');
  let productList = document.getElementById('productList');

  if (productImageInput.files.length > 0) {
   
    
    let li = document.createElement('li');
    
    li.classList.add('flex', 'items-center', 'justify-between', 'bg-white','p-4', 'border','rounded-md','shadow-md');
    
    let productImage = productImageInput.files[0];

    
    li.innerHTML = `
      <div class="flex items-center">
        <img src="${URL.createObjectURL(productImage)}" alt="${productName}" class="w-16 h-16 object-contain mr-4">
        <div>
            <span class="text-gray-800 font-semibold">${productName}</span>
            <p class="text-gray-600">$ ${productPrice}</p>
        </div>
      </div>
      <button onclick='deleteproduct(this)' class="btn text-red-500">Delete</button>
    `;
    productList.appendChild(li);
  document.getElementById('productImage').value = '';
  let productNumber = document.getElementById('productNumber')
  productNumber.innerText = parseInt(productList.children.length)


  }
  


  document.getElementById('productDescription').value = ''

});

//   let productImage = document.getElementById('productImage')
//   let productName = document.getElementById('productName')
//  let  productPrice = document.getElementById('productPrice')
//  let productDescription = document.getElementById('productDescription')

  //   let inputSellerName = document.getElementById('inputSellerName')
//   let inputSellerEmail = document.getElementById('inputSellerEmail')
//   let inputSellerMobile = document.getElementById('inputSellerMobile')
//   let inputSellerAddress = document.getElementById('inputSellerAddress')

//   let sellerName = document.getElementById('sellerName')
//   let sellerEmail = document.getElementById('sellerEmail')
//   let sellerPhone = document.getElementById('sellerPhone')