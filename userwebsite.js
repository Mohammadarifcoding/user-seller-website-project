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
  let count = 0;
  
  // per product funciton
  function addProduct(element) {
    count++;
    let productName = element.children[1].children[1].innerText;
    let productPriceString =
      element.children[1].children[2].children[0].innerText;
    let productPrice = parseFloat(productPriceString);
  
    let previousTotalPrice = getValueFromId("totalPrice");
    let totalPrice = previousTotalPrice + productPrice;
  
    setValue("totalPrice", totalPrice.toFixed(2));
    setValue("total",totalPrice.toFixed(2));
  
    let li = document.createElement("li");
    li.classList.add("flex", "gap-2", "text-xl", "font-medium");
    li.innerText = `(${count}) ${productName}`;
    li.style.listStyle = "none";
    document.getElementById("listItemAdd").appendChild(li);
  
    if (getValueFromId("totalPrice") < 200) {
      let applyCoupon = document.getElementById("applyCoupon");
      applyCoupon.setAttribute("disabled", "true");
    } else if (getValueFromId("totalPrice") >= 200) {
      let applyCoupon = document.getElementById("applyCoupon");
      applyCoupon.removeAttribute("disabled");
    }
  
    if (getValueFromId("totalPrice") > 0) {
      let makePurchase = document.getElementById("makePurchase");
      makePurchase.removeAttribute("disabled");
    } else {
      let makePurchase = document.getElementById("makePurchase");
      makePurchase.setAttribute("disabled", "true");
    }
  
  }
  
  // some extra value
  if (getValueFromId("totalPrice") < 200) {
    let applyCoupon = document.getElementById("applyCoupon");
    applyCoupon.setAttribute("disabled", "true");
  }
  if(getValueFromId('totalPrice') == 0){
      let makePurchase = document.getElementById("makePurchase");
      makePurchase.setAttribute("disabled", "true");
  }
  
  
  // discount and copuon
  
  document.getElementById('applyCoupon').addEventListener('click',function () {
      let cuponInput = getValueFromInputField('inputCuponCode')
      if(cuponInput == 'SELL200'){
          let totalPrice = getValueFromId('totalPrice')
          let discountPrice = totalPrice * 0.2;
          setValue('discountPrice', (discountPrice).toFixed(2))
          setValue('total', (totalPrice - discountPrice).toFixed(2))
  
      }
  })
  document.getElementById('makePurchase').addEventListener('click',function(){
    document.getElementById('modal').removeAttribute('hidden');
  })
  
  // reset everthing
  
  
  document.getElementById('SELL200').addEventListener('click',function(){
    navigator.clipboard.writeText('SELL200')
    document.getElementById('SELL200').innerText = 'Copied'
  
   
  })
  document.getElementById('SELL200').addEventListener('dblclick',function(){
    document.getElementById('SELL200').innerText = 'SELL200'
  
   
  })
  document.getElementById('resetAndCloseModal').addEventListener('click',function(){
    document.getElementById('modal').setAttribute('hidden', 'true');
    document.getElementById('totalPrice').innerText = '0.00'
    document.getElementById('discountPrice').innerText = '0.00'
    document.getElementById('total').innerText = '0.00'
    count = 0
    document.getElementById('listItemAdd').innerHTML = ''
    document.getElementById('makePurchase').setAttribute('disabled','true')
    document.getElementById('applyCoupon').setAttribute('disabled','true')
    document.getElementById('SELL200').innerText = 'SELL200'
    
  })
  
  