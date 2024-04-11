if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {


    var removeCartItemButtons = document.getElementsByClassName('btn-danger')
    for (var i = 0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i]
        button.addEventListener('click', removeCartItem)

    }
    var quantityInputs = document.getElementsByClassName('cart-quantity-input')
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)
    }

    var addToCartButtons = document.getElementsByClassName('shop-item-button')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }
   


    loadCartFromLocalStorage();
    loadCartFromLocalStorage1();
}


function removeCartItem(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
    saveCartToLocalStorage();
}

function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateCartTotal()
}



function addToCartClicked(event) {
    var button = event.target
  
    var shopItem = button.parentElement.parentElement.parentElement.parentElement.parentElement
       
    var price = shopItem.getElementsByClassName('shop-item-price')[0].innerText
    var category = shopItem.getElementsByClassName('shop-item-category')[0].innerText
    var name = shopItem.getElementsByClassName('shop-item-name')[0].innerText
    var imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src
    var watsapp = shopItem.getElementsByClassName('shop-item-tel')[0].innerText

    addItemToCart(imageSrc, price, watsapp, name, category)
    updateCartTotal()
   

}



function addItemToCart(imageSrc, price,watsapp, name ,category) {


    var cartRow = document.createElement('div')
    cartRow.classList.add('cart-row')
    var cartItems = document.getElementsByClassName('cart-items')[0]

    
    var cartRowContents = `


                <div class=" cart-item cart_info" style="margin:15px;">
                     <img src="${imageSrc}" alt="" style="width:100px; height:100px;position: relative;top: 60px;right:10px;" />
                      <span class="cart-item-tel" style="display:none;" >${watsapp}</span>
                    <h4  class="cart-item-category" style="position:relative; left:105px">${category}</h4>
                     <h6  class="cart-item-name" style="position:relative;  left:107px">${name}</h6>
                 </div>
                <span class="cart-price"> ${price}</span>
                <div class="cart-quantity cart-column">
                    <input class="cart-quantity-input" type="number" style="width:45px ;height:25px;margin:5px; position:relative;left:25px" value="1">
                    <button class="btn btn-danger  fa fa-trash " style="font-size:x-large; color:#d33030;background:white;border:0;position:relative; left:22px;" type="button">

                    </button>
                </div>





    `
    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click',
        removeCartItem)
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener
        ('change', quantityChanged)

    saveCartToLocalStorage();
    // إعادة تحميل الصفحة بعد إضافة المنتج
    location.reload();
}


function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    var total = 0
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')
        [0]
        var price = parseFloat(priceElement.innerText.replace('$', ''))
        var quantity = quantityElement.value
        total = total + (price * quantity)


    }
    total = Math.round(total * 100) / 100

    document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total;

    saveCartToLocalStorage1();


}




function saveCartToLocalStorage1() {
    var cartTotal = document.getElementsByClassName('cart-total')[0].innerHTML;
    localStorage.setItem('cartTotal', cartTotal);
}

function loadCartFromLocalStorage1() {
    var cartTotal = localStorage.getItem('cartTotal');
    if (cartTotal) {
        document.getElementsByClassName('cart-total')[0].innerHTML = cartTotal;
        // قم بإعادة تعيين المستمعين للأحداث بعد استعادة السلة
        addEventListenersToCartItems();
    }
}




function saveCartToLocalStorage() {
    var cartItems = document.getElementsByClassName('cart-items')[0].innerHTML;
    localStorage.setItem('cartItems', cartItems);
}

function loadCartFromLocalStorage() {
    var cartItems = localStorage.getItem('cartItems');
    if (cartItems) {
        document.getElementsByClassName('cart-items')[0].innerHTML = cartItems;
        // قم بإعادة تعيين المستمعين للأحداث بعد استعادة السلة
        addEventListenersToCartItems();
    }
}

function addEventListenersToCartItems() {
    // قم بإضافة المستمعين للأحداث بمجرد استعادة العناصر من Local Storage
    var removeCartItemButtons = document.getElementsByClassName('btn-danger');
    for (var i = 0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i];
        button.addEventListener('click', removeCartItem);
    }

    var quantityInputs = document.getElementsByClassName('cart-quantity-input');
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i];
        input.addEventListener('change', quantityChanged);
    }
}







function getCartDataForWhatsApp() {
    /*//var cartItems = document.getElementsByClassName('cart-items')[0].getElementsByClassName('cart-row');*/
    var cartItems = document.getElementsByClassName('cart-row');
    var message = "مرحبًا، إليك قائمة المشتريات:\n\n";
    var baseUrl = window.location.origin; // Get the base URL of the current page

    for (var i = 0; i < cartItems.length; i++) {
        var item = cartItems[i];
        var category = item.querySelector('.cart-item-category').innerText;
        var name = item.querySelector('.cart-item-name').innerText;
        var price = item.querySelector('.cart-price').innerText;
        var quantity = item.querySelector('.cart-quantity-input').value;


        message += "الاسم: " + name + "\n";
        message += "الصنف: " + category + "\n";
        message += "السعر: " + price + "\n";
        message += "الكمية:" + quantity + "\n\n";



    }

    var total = document.getElementsByClassName('cart-total-price')[0].innerText;
    message += "المجموع: " + total;

    return message;
}
function deleteCartItems() {
    // احذف جميع عناصر عربة التسوق
    var cartItems = document.getElementsByClassName('cart-items')[0];
    cartItems.innerHTML = ''; // قم بتفريغ عربة التسوق بالكامل
}
function deleteCartItems1() {
    // احذف جميع عناصر عربة التسوق
    var cartItems = document.getElementsByClassName('cart-total-price')[0];
    cartItems.innerHTML = '$0'; // قم بتفريغ عربة التسوق بالكامل
}

function sendCartViaWhatsApp() {

    var message = getCartDataForWhatsApp();
    var encodedMessage = encodeURIComponent(message);
    var whatsappNumberElement = document.getElementsByClassName('cart-item-tel')[0]; // استخراج العنصر الأول الذي يحتوي على رقم WhatsApp
    if (whatsappNumberElement) {
        var whatsappNumber = whatsappNumberElement.innerText.trim(); // استخراج الرقم نصيًا
        var whatsappLink = "https://wa.me/" + whatsappNumber + "/?text=" + encodedMessage;
        window.open(whatsappLink);
        deleteCartItems()
        deleteCartItems1()
        saveCartToLocalStorage();
        saveCartToLocalStorage1();
    }
}
document.getElementById('whatsapp-button').addEventListener('click', sendCartViaWhatsApp);