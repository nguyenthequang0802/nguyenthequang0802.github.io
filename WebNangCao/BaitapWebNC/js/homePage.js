function convertMoney(num) {
  return num.toLocaleString("it-IT", {
    style: "currency",
    currency: "VND",
  });
}

// homePage.js - Sử dụng map() để render danh sách sản phẩm vào các thẻ card test
const itemGrid = document.querySelector(".item-grid");

function renderUI(products){
  // Sử dụng map() để tạo các thẻ card chứa thông tin sản phẩm
    const productCards = products.map((product) => {
      return `
        <div class="card test product-item" data-id="${
            product.id
          }" style="width: 18rem;">
          <img src="${product.image}" class="card-img-top" alt="${product.name}">
          <div class="card-body">
            <a href="detailPage.html?id=${product.id}">
              <h2 class="product-title">${product.description}</h2>
            </a>
            <span class="price">${convertMoney(product.price)}</span>
          </div>
        </div>
      `;
    });

    // Nối các thẻ card lại với nhau và render vào trong itemGrid
    itemGrid.innerHTML = productCards.join("");
}

renderUI(products);

const productItems = document.querySelectorAll(".product-item");
productItems.forEach((productItem) => {
  productItem.addEventListener("click", handleProductClick);
});

function handleProductClick(event) {
  const productElement = event.currentTarget;
  const productId = productElement.getAttribute("data-id");

  // Lấy thông tin sản phẩm từ mảng products dựa vào id
  const selectedProduct = products.find(
    (product) => product.id === parseInt(productId, 10)
  );

  // Lưu thông tin sản phẩm vào localStorage
  localStorage.setItem("selectedProduct", JSON.stringify(selectedProduct));

  // Cập nhật UI hoặc thực hiện các hành động liên quan khác khi thêm sản phẩm thành công
  console.log("Sản phẩm đã được thêm vào localStorage!");
}

$('.button-search button').on('click', function() {
  let selectCategory = $('#search-category').val();
  let productSearch = products;
  if(selectCategory){
      productSearch = productSearch.filter(elem => elem.name === selectCategory);
      console.log(productSearch);
  }
  let minPrice = $('.min-price').val();
  let maxPrice = $('.max-price').val();
  if(minPrice ){
      productSearch = productSearch.filter(elem => elem.price >= minPrice);
      
  }   
  if(maxPrice){
      productSearch = productSearch.filter(elem => elem.price <= maxPrice);
  }

  let keySearch = $('.keyword').val().trim().toLowerCase();
  productSearch = productSearch.filter(elem => elem.name.toLowerCase().includes(keySearch));

  renderUI(productSearch);
});

$('.header .shopping').on('click', function(){
  window.location.href = "shoppingCart.html";
})
