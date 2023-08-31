$(document).ready(function() {
    $(window).scroll(function(){
        if($(this).scrollTop()){
            $("#back-top").fadeIn();
        } else{
            $("#back-top").fadeOut();
        }
    });
    $("#back-top").on("click", function(){
        $("html, body").animate({scrollTop: 0}, 1000)
    });
})

// let userLogin = JSON.parse(localStorage.getItem('isLogin'));


function convertMoney(num) {
    return num.toLocaleString("it-IT", {
        style: "currency",
        currency: "VND",
    });
}


function priceDiscount(oldPrice, discount){
    let newPrice;
    return newPrice = oldPrice -(oldPrice * discount /100);
}

$(document).ready(function() {
    let cartItems = localStorage.getItem("cartItems");
    if(cartItems) {
        cartItems = JSON.parse(cartItems);
        showCartItems(cartItems);
    } else {
        $('.ps-cart-item').html('<p>Không có sản phẩm nào trong giỏ hàng.</p>')
    }
});

function showCartItems(cartItems){
    const cartList = $('.ps-cart__content');
    cartList.empty();

    let subtotal = 0;
    let totalAllQuantity = 0;

    for(const cartItem of cartItems){
        const {id, discount, name, image, price, selectedSize, quantity}= cartItem.product;
        const newPrice = price - (price * discount)/100;
        const totalPrice = (price - price * (discount / 100)) * quantity;

        cartList.append(
            `
            <div class="ps-cart-item" data-id="${id}">
                <a href="" class="ps-cart-item__close">
                    <i class="fa-solid fa-xmark"></i>
                </a>
                <div class="ps-cart-item__thumbnail">
                    <a href=""></a>
                    <img src="${image}" alt="${name}">
                </div>
                <div class="ps-cart-item__content">
                    <a class="ps-cart-item__title" href="">${name}</a>
                    <div class="attribute_pro">
                        <span class="badge bg-primary me-2">Size Giày: <b>${selectedSize}</b></span>
                    </div>
                    <p>
                        <span>Số lượng:<i class="">${quantity}</i></span>
                        <span>Thành tiền:<i class="">${convertMoney(totalPrice)}</i></span>
                    </p>
                </div>
            </div>  
            `
        );
        subtotal += totalPrice;
        totalAllQuantity += quantity;
    }
    $('.ps-cart__toggle .numberSumProduct').text(totalAllQuantity);
    $('.ps-cart__total .numberSumProduct').text(totalAllQuantity);
    $('.ps-cart__total .sumPrice').text(convertMoney(subtotal))
}

$('.ps-cart') .on('click', function(){
    window.location.href = "../pages/shoppingCart.html";
});

$('.ps-cart__content').on('click', '.ps-cart-item__close', function(event) {
    event.preventDefault();
    const itemId = $(this).closest('.ps-cart-item').data('id');
    // Tiến hành xóa sản phẩm khỏi cartItems và cập nhật giao diện
    const itemIndex = cartItems.findIndex(item => item.product.id === itemId);
    if (itemIndex !== -1) {
        cartItems.splice(itemIndex, 1);
        showCartItems(cartItems);
    }
});

