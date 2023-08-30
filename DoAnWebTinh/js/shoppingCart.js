$(document).ready(function() {
    let cartItems = localStorage.getItem("cartItems");
    if(cartItems) {
        cartItems = JSON.parse(cartItems);
        showCartItems(cartItems);
        attachQuantityListeners(cartItems);
    } else {
        $('.itemCart').html('<p>Không có sản phẩm nào trong giỏ hàng.</p>')
    }
});

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
}
