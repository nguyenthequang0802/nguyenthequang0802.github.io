let products = [
    {
      id: 1,
      name: "Iphone 13",
      image: "https://shopdunk.com/images/thumbs/0018663_deep-purple_550.jpeg",
      description: "IPhone 13 Gold 128GB",
      price: 19000000,
    },
  
    {
      id: 2,
      name: "Iphone 13 Pro Max",
      image: "https://shopdunk.com/images/thumbs/0018663_deep-purple_550.jpeg",
      description: "IPhone 13 Pro Max Sliver 128GB",
      price: 19500000,
    },
  
    {
      id: 3,
      name: "Iphone 14",
      image: "https://shopdunk.com/images/thumbs/0018663_deep-purple_550.jpeg",
      description: "IPhone 14 Gray 512GB",
      price: 20000000,
    },
  
    {
      id: 4,
      name: "Iphone 14 Pro",
      image: "https://shopdunk.com/images/thumbs/0018663_deep-purple_550.jpeg",
      description: "IPhone 14 Pro Purple 64GB",
      price: 21000000,
    },
  
    {
      id: 5,
      name: "Iphone 12",
      image: "https://shopdunk.com/images/thumbs/0018663_deep-purple_550.jpeg",
      description: "IPhone 12 Gold 128GB",
      price: 16000000,
    },
  
    {
      id: 6,
      name: "Iphone 14 Pro Max",
      image: "https://shopdunk.com/images/thumbs/0018663_deep-purple_550.jpeg",
      description: "IPhone 14 Pro Max Green 512GB",
      price: 22000000,
    },
  
    {
      id: 7,
      name: "Iphone 13 Pro",
      image: "https://shopdunk.com/images/thumbs/0018663_deep-purple_550.jpeg",
      description: "IPhone 13 Pro Gold 128GB",
      price: 19800000,
    },
  
    {
      id: 8,
      name: "Iphone 13 Pro",
      image: "https://shopdunk.com/images/thumbs/0018663_deep-purple_550.jpeg",
      description: "IPhone 13 Pro Red 128GB",
      price: 19800000,
    },
    {
      id: 9,
      name: "Iphone 11",
      image: "https://shopdunk.com/images/thumbs/0018663_deep-purple_550.jpeg",
      description: "IPhone 11 Gold 64GB",
      price: 15000000,
    },
  
    {
      id: 10,
      name: "Iphone XS",
      image: "https://shopdunk.com/images/thumbs/0018663_deep-purple_550.jpeg",
      description: "IPhone XS Sliver 128GB",
      price: 10500000,
    },
  
    {
      id: 11,
      name: "Iphone X",
      image: "https://shopdunk.com/images/thumbs/0018663_deep-purple_550.jpeg",
      description: "IPhone X Blue 512GB",
      price: 12000000,
    },
  
    {
      id: 12,
      name: "Iphone XS Max",
      image: "https://shopdunk.com/images/thumbs/0018663_deep-purple_550.jpeg",
      description: "IPhone XS Max Purple 64GB",
      price: 14000000,
    },
];

function convertMoney(num) {
    return num.toLocaleString("it-IT", {
      style: "currency",
      currency: "VND",
    });
}

function renderUI(products) {
    const listProducts = document.querySelector('.list-products');
    let html = "";
    if(products.length === 0){
        html = "Chưa có sản phẩm nào"
    }
    html = products.map((product) => {
        return `
            <div class="col-lg-3 col-md-4 col-sm-6 product-item" >
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
            </div>
        `
    })
    listProducts.innerHTML = html.join("");
}

renderUI(products);