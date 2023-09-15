const items = ["Watches", "Shoes", "Groceries"];

let amount = 10000; 

createOrder(items)
.then(function(orderNumber){
    console.log(orderNumber);
    return orderNumber;
})
.then(function(orderNumber){
    console.log("Payment Successful");
    return proceedToPayment(orderNumber);
    
})
.then(function(orderDetails){
  console.log("Wallet Balance: ",orderDetails);
})

function createOrder(items){
  return new Promise(function(resolve, reject){
      if(!validateItems(items)){
        const error = new Error("Invalid Cart");
        reject(error);
      }
      
      const orderNumber = 123;
      resolve(orderNumber);
  }
)}

function proceedToPayment(orderNumber){
  return new Promise(function(resolve, reject){
    if(!orderNumber){
      reject("Payment failed");
    }
    amount -= 1000;
    resolve(amount);
  })
}


function validateItems(items){
  if(!items){
    return false;
  }
  return true;
}
