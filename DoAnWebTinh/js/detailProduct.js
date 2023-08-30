$(document).ready(function(){
    const selectedProduct = JSON.parse(localStorage.getItem('selectedProduct'));
    
    // console.log(selectedProduct);
    if(selectedProduct) {
        if(selectedProduct.discount === 0){
            $("#product-image").attr("src", selectedProduct.image);
            $('#name').text(selectedProduct.name);
            $('#ma strong').text(selectedProduct.id);
            $('#newPrice').text(convertMoney(selectedProduct.price));
            $('#oldPrice').text('');
        } else {
            // let newPrice = priceDiscount(selectedProduct.price);
            $("#product-image img").attr("src", selectedProduct.image);
            $('#name').text(selectedProduct.name);
            $('#ma strong').text(selectedProduct.id);
            $('#newPrice').text(convertMoney(selectedProduct.price - (selectedProduct.price*selectedProduct.discount)/100));
            $('#oldPrice').text(convertMoney(selectedProduct.price));
        }

        const sizeListContainer = $('.wapper_cb.size');
        const shoeSizes = selectedProduct.size;

        if(shoeSizes && shoeSizes.length > 0) {
            const sizeItems = shoeSizes.map(
                (size, index) => `
                <li class="cb">
                    <input type="radio" class="btn-check" name="options-base" id="option${size}" autocomplete="off" ${index === 0 ? 'checked' : ''}>
                    <label class="btn" for="option${size}">${size}</label>
                </li> `
            ).join('');
            sizeListContainer.html(sizeItems);
        }
    }
})

$('#reduce').on('click', function(){
    if(parseInt($('#quantity').val()) > 1){
        $('#quantity').val(parseInt($('#quantity').val()) - 1);
    }
})

$('#add').on('click', function(){
    $('#quantity').val(parseInt($('#quantity').val()) + 1);
})

$('#btn-add-to-cart').on('click', function(){
    const selectedProduct = JSON.parse(localStorage.getItem("selectedProduct"));
    const quantity = parseInt($('#quantity').val());
    const selectedSize = $('input[name="options-base"]:checked').siblings('label').text();

    if(selectedProduct && quantity >= 1) {
        selectedProduct["quantity"] = quantity;
        selectedProduct["selectedSize"] = selectedSize;

        let cartItems = localStorage.getItem("cartItems");
        if(cartItems) {
            cartItems = JSON.parse(cartItems);
        } else {
            cartItems = [];
        }

        const existingCartItemIndex = cartItems.findIndex(
            (item) => item.product.id === selectedProduct.id
        );

        if(existingCartItemIndex !== -1) {
            cartItems[existingCartItemIndex].product = selectedProduct;
            cartItems[existingCartItemIndex].product.quantity += quantity;
        } else {
            cartItems.push({
                product: selectedProduct,
            });
        }

        localStorage.setItem("cartItems", JSON.stringify(cartItems));
        swal({
            title: "Thành Công!",
            text: "Đã thêm sản phẩm vào giỏ hàng thành công!",
            icon: "success",
            button: "Xem giỏ hàng",
        }) 
        .then(() => {
            window.location.href = '../pages/shoppingCart.html';
        });
    } else {
        swal({
            title: "Thất Bại!",
            text: "Vui lòng không để trống số lượng!",
            icon: "warning",
            button: "OK",
        }) 
    }
});

$('#btn-buy-now').on('click', function(){
    const selectedProduct = JSON.parse(localStorage.getItem("selectedProduct"));
    const quantity = parseInt($('#quantity').val());
    const selectedSize = $('input[name="options-base"]:checked').siblings('label').text();

    if(selectedProduct && quantity >= 1) {
        const cartItem = {
            product: selectedProduct,
            quantity: quantity,
            selectedSize: selectedSize,
        };

        localStorage.setItem("cartItem", JSON.stringify(cartItem));
        window.location.href = "../pages/payment.html"
    } else {
        swal({
            title: "Thất Bại!",
            text: "Vui lòng không để trống số lượng!",
            icon: "warning",
            button: "OK",
        })
    }
});