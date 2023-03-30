
let cartIcon = document.querySelector('#cart-icon');
let cart = document.querySelector('.cart');
let closeCart = document.querySelector('#close-cart');

//open cart
cartIcon.onclick = () =>{
    cart.classList.add("active")
};
//close cart
    closeCart.onclick = () =>{
        cart.classList.remove("active")
};



//under not woeking------------


//cart working js
if (document.readyState == 'loading'){
    document.addEventListener("DOMContentLoader", ready);
} else {
  ready();
}

//making function

function ready() {
    //remove items from cart
    var removeCartButtons = document.getElementsByClassName("cart-remove");
    console.log(removeCartButtons);
    for (var i = 0; i < removeCartButtons.length; i++) {
        var button = removeCartButtons[i];
        button.addEventListener("click", removeCartItem); 
    }
    //quantity changes
    var quantityInputs = document.getElementsByClassName("cart-quantity");
    for (var i = 0; i < quantityInputs.length; i++) {
    var input = quantityInputs[i];
    input.addEventListener("change", quantityChanged);
    }
} 

    //remove items from cart

    function removeCartItem(event) {
        var buttonClicked = event.target;
        buttonClicked.parentElement.remove();
        updatetotal();
    }  
    //quantity changes
    function quantityChanged (event){
        var input = event.target;
        if (isNaN(input.value) || input.value <= 0) {
            input.value = 1;
        }
        updatetotal();
    }


    //above not working----------------

        // update total
    function updatetotal(){
        var cartContent = document.getElementsByClassName ("cart-content")[0];
        var cartBoxes = cartContent.getElementsByClassName ("cart-box");
        var total = 0;
        for (var i = 0; i < cartBoxes.length; i++){
            var cartBox = cartBoxes[i];
            var priceElement = cartBox.getElementsByClassName("cart-price")[0];
            var quantityElement = cartBox.getElementsByClassName("cart-quantity")[0];
            var price = prisefloat(priceElement.innerText.replace("$",""));
            var quantity = quantityElement.value;
            total = total + (price * quantity);

            document.getElementsByClassName("total-price")[0].innerText = "$" + total;
        }
    }




