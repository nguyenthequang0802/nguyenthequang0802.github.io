$(document).ready(function() {
    let cartItems = localStorage.getItem("cartItems");
    if(cartItems) {
        cartItems = JSON.parse(cartItems);
        showCartItems(cartItems);
    } else {
        $('.itemCart').html('<p>Không có sản phẩm nào trong giỏ hàng.</p>')
    }
});

function showCartItems(cartItems) {
    const cartList = $('.product-list');
    cartList.empty();

    let subtotal = 0;

    for(const cartItem of cartItems){
        const {id, discount, name, image, price, selectedSize, quantity}= cartItem.product;
        const newPrice = price - (price * discount)/100;
        const totalPrice = (price - price * (discount / 100)) * quantity;
        

        cartList.append(`
            <div class="row product">
                <div class="product-image col-2">
                    <a href="">
                        <div class="product-thumbnail">
                            <div class="product-thumbnail-wrapper">
                                <img src="${image}" alt="" class="product-thumbnail-image">
                            </div>
                            <span class="product-thumbnail-quantity">${quantity}</span>
                        </div>
                        </a>
                </div>
                <div class="product-description col-5">
                    <a href="">
                        <span class="product-description-name">${name}</span>
                    </a>
                    <div class="attribute_pro">
                        <span class="badge bg-primary me-2">
                            Size Giày:
                            <b>${selectedSize}</b>
                        </span>
                    </div>
                </div>
                <div class="product-price col-2">
                    <span>${convertMoney(totalPrice)}</span>
                </div>
            </div>
        `)
        subtotal += totalPrice;
    }
    $('.subTotal').text(convertMoney(subtotal));
}

$('.step-footer>.previous').on('click', function(){
    window.location.href = "../pages/shoppingCart.html"
})

$('.step-footer>.continue').on('click', function(){
    let nameInput = $('#nameInput').val();
    let phoneNumberInput = $('#phoneNumberInput').val();
    let addressInput = $('#addressInput').val();
    let emailInput = $('#emailInput').val();
    let emailRegex = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
    let nameRegex = /^[a-zA-Z\s]+$/;
    let phoneNumberRegex = /^[0-9]+$/;

    if(nameInput.length === 0 || phoneNumberInput.length === 0 || addressInput.length === 0 || emailInput.length === 0) {
        swal("Thất Bại!", "Vui lòng nhập đầy đủ thông tin của bạn!", "error");
    } else if(!nameRegex.test(nameInput.trim())){
        swal("Thất Bại!", "Vui lòng nhập đúng định dạng tên!", "error");
    } else if(!phoneNumberRegex.test(phoneNumberInput.trim()) && phoneNumberInput.length() === 10) {
        swal("Thất Bại!", "Vui lòng nhập đúng định dạng số điện thoại!", "error");
    } else if(!emailRegex.test(emailInput.trim())) {
        swal("Thất Bại!", "Vui lòng nhập đúng định dạng email!", "error");
    } else {
        swal({
            title: "Hoàn tất!",
            text: "Hoàn tất đặt hàng!",
            icon: "success",
            button: "Đặt Hàng",
        }) 
        .then(() => {
            localStorage.removeItem("cartItems");
            window.location.href = '../index.html';
        });
    }
})