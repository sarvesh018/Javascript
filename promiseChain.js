import "./styles.css";

const cart = ["Shoes", "Phone", "Watch"];

// const promise = createOrder(cart);
//promise.then

createOrder(cart)
  .then(function (orderId) {
    console.log(orderId);
    return orderId; //promise will return a value or promise
  })
  .then(function (orderId) {
    return proceedToPayment(orderId); //returning promise
  })
  .then(function (paymentStatus) {
    console.log(paymentStatus);
  })
  .catch(function (err) {
    console.log(err.message);
  });

//if we move catch statement in between the chain then it will
//only check for above .then methods and chain will continue

function createOrder(cart) {
  const pr = new Promise(function (resolve, reject) {
    //logic of validating cart
    if (!validateCart(cart)) {
      const error = new Error("Not a valid cart");
      reject(error);
    }
    //logic for createOrder
    const orderId = "AB123";
    if (orderId) {
      resolve(orderId);
    }
  });

  return pr;
}

function proceedToPayment(orderId) {
  return new Promise(function (resolve, reject) {
    if (!orderId) {
      reject("Order is not valid");
    }
    resolve("Payment is Successfull");
  });
}

function validateCart(cart) {
  return true;
}
