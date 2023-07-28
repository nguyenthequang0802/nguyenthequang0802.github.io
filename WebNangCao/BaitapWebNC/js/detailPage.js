$(document).ready(function () {
  const selectedProduct = JSON.parse(localStorage.getItem("selectedProduct"));
  console.log(selectedProduct);
  if (selectedProduct) {
    $("#name").text(selectedProduct.name);
    $("#product-title").text(selectedProduct.description);
    $("#product-image").attr("src", selectedProduct.image);
    $("#product-price").text(convertMoney(selectedProduct.price));

    $("#btn-add-to-cart").on("click", addToCart);
    $("#btn-buy-now").on("click", buyNow);
  }
  // else {
  //   selectedProduct.name = "test";
  //   selectedProduct.description = "test";
  //   selectedProduct.image = "test";
  //   selectedProduct.price = 234;
  // }
});

function addToCart() {
  const selectedProduct = JSON.parse(localStorage.getItem("selectedProduct"));
  const quantity = parseInt($("#product-quantity").val());

  // const cartItem=[]
  if (selectedProduct && quantity >= 1) {
    // Lưu thông tin sản phẩm và số lượng vào localStorage
    selectedProduct["quantity"] = quantity;

    // Kiểm tra xem giỏ hàng đã tồn tại trong localStorage chưa
    let cartItems = localStorage.getItem("cartItems");
    // console.log(cartItems)
    if (cartItems) {
      cartItems = JSON.parse(cartItems);
    } else {
      cartItems = [];
    }

    // Kiểm tra xem sản phẩm đã có trong giỏ hàng chưa
    const existingCartItemIndex = cartItems.findIndex(
      (item) => item.product.id === selectedProduct.id
    );
    // console.log(existingCartItemIndex);
    if (existingCartItemIndex !== -1) {
      // Nếu đã có trong giỏ hàng, cập nhật thông tin sản phẩm
      cartItems[existingCartItemIndex].product = selectedProduct;
      cartItems[existingCartItemIndex].product.quantity += quantity;
    } else {
      // Nếu chưa có, thêm sản phẩm mới vào giỏ hàng
      cartItems.push({
        product: selectedProduct,
      });
    }

    // Lưu giỏ hàng mới vào localStorage
    localStorage.setItem("cartItems", JSON.stringify(cartItems));

    // Hiển thị thông báo "Thêm vào giỏ hàng thành công"
    alert("Thêm vào giỏ hàng thành công!");

    // Chuyển hướng đến trang giỏ hàng
    window.location.href = "shoppingCart.html";
  } else {
    alert("Vui lòng nhập số lượng hợp lệ.");
  }
}

function buyNow() {
  const selectedProduct = JSON.parse(localStorage.getItem("selectedProduct"));
  const quantity = parseInt($("#product-quantity").val());
  if (selectedProduct && quantity >= 1) {
    const cartItem = {
      product: selectedProduct,
      quantity: quantity,
    };
    localStorage.setItem("cartItem", JSON.stringify(cartItem));

    window.location.href = "thanhToan.html";
  } else {
    alert("Vui lòng nhập số lượng hợp lệ.");
  }
}
