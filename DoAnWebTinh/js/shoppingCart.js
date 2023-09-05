$(document).ready(function() {
    let cartItems = localStorage.getItem("cartItems");
    if(cartItems) {
        cartItems = JSON.parse(cartItems);
        showCartItems(cartItems);
        headerShowCartItems(cartItems);
        attachQuantityListeners(cartItems);
    } else {
        $('.ps-cart-item').html('<p>Không có sản phẩm nào trong giỏ hàng.</p>');
        $('.itemCart').html('<p>Không có sản phẩm nào trong giỏ hàng.</p>')
    }
});

function headerShowCartItems(cartItems){
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
            <div class="ps-cart-item ">
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


function showCartItems(cartItems) {
    const cartList = $('.infoCart');
    cartList.empty();

    let subtotal = 0;

    for(const cartItem of cartItems){
        const {id, discount, name, image, price, selectedSize, quantity}= cartItem.product;
        const newPrice = price - (price * discount)/100;
        const totalPrice = (price - price * (discount / 100)) * quantity;
        

        cartList.append(`
        <div class="infoCart row">
            <div class="image col-3">
                <a href="">
                    <img src="${image}" alt="">
                </a>
            </div>
            <div class="numberPrice col-9">
                <div class="title">
                    <a href="">
                        <h3>${name}</h3>
                    </a>
                </div>
                <div class="attribute_pro">
                    <span class="badge bg-warning me-2">
                        Size Giày:
                        <b>${selectedSize}</b>
                    </span>
                </div>
                <p>
                    <b>Mã SP:</b>
                    ${id}
                </p>
                <div class="number">
                    <div class="form-group__number">
                        <button class="minus" type="button" id="reduce">
                            <span>-</span>
                        </button>
                        <input type="text" class="form-control" id="quantity" value="${quantity}">
                        <button class="plus" type="button" id="add">
                            <span>+</span>
                        </button>
                    </div>
                    <i class="fa-solid fa-xmark"></i>
                    <span class="textPrice">${convertMoney(newPrice)}</span>
                </div>
                <div class="total_price">
                    Thành tiền:
                    <span class="textPrice">${convertMoney(totalPrice)}</span>
                </div>
                <div class="btnCart">
                    <button class="btnClick btnDel" type="button">
                        <i class="fa-solid fa-xmark"></i>
                    </button>
                </div>
            </div>
        </div>
        `)
        
        subtotal += totalPrice;
    }
    $('#sumPrice').text(convertMoney(subtotal));
}

function attachQuantityListeners(cartItems) {
    $('.infoCart').on('click', '.minus', function () {
        const index = $(this).closest('.infoCart').index();
        if(cartItems[index].product.quantity > 1) {
            cartItems[index].product.quantity --;
            updateCartAndRender(cartItems);
        }
    });

    $('.infoCart').on('click', '.plus', function () {
        const index = $(this).closest('.infoCart').index();
        cartItems[index].product.quantity ++;
        updateCartAndRender(cartItems);
    });

    $('.infoCart').on('click', '.btnDel', function() {
        swal({
            title: "Bạn muốn xóa sản phẩm khỏi giỏ hàng?",
            text: "Sản phẩm sẽ bị xóa khỏi giỏ hàng!",
            dangerMode: true,
            buttons: {
                cancel: "Hủy",
                confirm: "Xóa",
            },
        }) 
        .then((willDelete) => {
            if (willDelete) {
                const index = $(this).closest('.infoCart').index();
                cartItems.splice(index, 1);
                updateCartAndRender(cartItems);
            }
        });
    });


}

function updateCartAndRender(cartItems) {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    showCartItems(cartItems);
    headerShowCartItems(cartItems);
}
