// $(document).ready(function () {
//     // Lấy thông tin giỏ hàng từ localStorage
//     let cartItems = localStorage.getItem("cartItems");
//     if (cartItems) {
//       cartItems = JSON.parse(cartItems);
//       renderUI(cartItems);
//     } else {
//       $(".products").html("<p>Giỏ hàng trống.</p>");
//     }
//   });

  $(document).ready(function () {
    // Lấy thông tin giỏ hàng từ localStorage
    let cartItems = localStorage.getItem("cartItems");
    if (cartItems) {
      cartItems = JSON.parse(cartItems);
      showCartItems(cartItems);
    } else {
      $(".products").html("<p>Giỏ hàng trống.</p>");
    }
    showCartItemCount();
  });

function showCartItems(cartItems) {
    const cartList = $(".products");
    cartList.empty();

    let subtotal = 0;
    let vat = 5; // Giả định VAT là 5%
    let totalAll = 0;

    for (const cartItem of cartItems) {
      const { id, name, image, description, price, quantity } = cartItem.product;
      const totalPrice = price * quantity;

      cartList.append(`
        <li class="row">
          <div class="col left">
            <div class="thumbnail">
              <a href="#">
                <img src="${image}" alt="${name}" />
              </a>
            </div>
            <div class="detail">
              <div class="name"><a href="#">${description}</a></div>
              <div class="description">
                ${name}
              </div>
              <div class="price">${convertMoney(price)}</div>
            </div>
          </div>

          <div class="col right">
            <div class="quantity">
              <input type="number" class="quantity" step="1" value="${quantity}" />
            </div>

            <div class="remove">
              <span class="close"><i class="fa fa-times" aria-hidden="true"></i></span>
            </div>
          </div>
        </li>
      `);

      subtotal += totalPrice;
    }

    vat = (subtotal * vat) / 100;
    totalAll = subtotal + vat;

    // Hiển thị tổng tiền và VAT
    $(".subtotal span.totalAll").text(convertMoney(subtotal));
    $(".vat span").text(convertMoney(vat));
    $(".total span").text(convertMoney(totalAll));

    // (".close").on("click", function () {
    //   const productId = $(this).data("product-id");
    //   removeCartItem(productId);
    // });
}

// function removeCartItem(id) {
//   let cartItems = localStorage.getItem('cartItems');
//   if(cartItems){
//     cartItems = JSON.parse(cartItems);
//     cartItems = cartItems.filter(item => item.product.id !== id);
//     localStorage.setItem("cartItems", JSON.stringify(cartItems));
//     showCartItems(cartItems);
//   }
// }