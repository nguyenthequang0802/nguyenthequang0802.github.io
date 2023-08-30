function renderUI(products) {
    // let html = '';
    // for(let i = 0; i < products.length; i++){
    //     if(products[i].discount === 0) {
    //         html += `
    //         <div class="col-lg-3 col-md-4 col-sm-6 col-6">
    //             <div class="card ps-shoe">
    //                 <img src="${products[i].image}" class="card-img-top" alt="..." style="height: 304px;">
    //                 <div class="card-body ps-shoe__content">
    //                     <div class="ps-shoe__detail">
    //                         <a href="" class="ps-shoe__name">${products[i].name}</a>
    //                         <p class="ps-shoe__price">${convertMoney(products[i].price)}</p>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>`;
    //     } else {
    //         html += `
    //         <div class="col-lg-3 col-md-4 col-sm-6 col-6">
    //             <div class="card ps-shoe">
    //                 <div class="ps-shoe__thumbnail">
    //                     <div class="product-label-group">
    //                         <div class="product-label">
    //                             <span>-${products[i].discount}%</span>
    //                         </div>
    //                     </div>
    //                     <img src="${products[i].image}" class="card-img-top" alt="..." style="height: 304px">
    //                 </div>
    //                 <div class="card-body ps-shoe__content">
    //                     <div class="ps-shoe__detail">
    //                         <a href="./pages/detailProduct.html" class="ps-shoe__name">${products[i].name}</a>
    //                         <p class="ps-shoe__price">${convertMoney(priceDiscount(products[i].price, products[i].discount))}
    //                             <del class="ps-shoe__oldPrice">${convertMoney(products[i].price)}</del>
    //                         </p>
                            
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>`;
    //     }
    // }
    // $('.product-item-1').html(html);

    const productCards = products.map((product) => {
        if(product.discount === 0) {
            return `
                <div class="col-lg-3 col-md-4 col-sm-6 col-6">
                    <div class="card ps-shoe" data-id="${product.id}">
                        <img src="${product.image}" class="card-img-top" alt="..." style="height: 304px">
                        <div class="card-body ps-shoe__content">
                            <div class="ps-shoe__detail">
                                <a href="../pages/detailProduct.html?id=${product.id}" class="ps-shoe__name">${product.name}</a>
                                <p class="ps-shoe__price">${convertMoney(product.price)}đ</p>
                            </div>
                        </div>
                    </div>
                </div>`;
        } else{
            return `
                <div class="col-lg-3 col-md-4 col-sm-6 col-6">
                    <div class="card ps-shoe" data-id="${product.id}">
                        <div class="ps-shoe__thumbnail">
                            <div class="product-label-group">
                                <div class="product-label">
                                    <span>-${product.discount}%</span>
                                </div>
                            </div>
                            <img src="${product.image}" class="card-img-top" alt="..." style="height: 304px">
                        </div>
                        <div class="card-body ps-shoe__content">
                            <div class="ps-shoe__detail">
                                <a href="../pages/detailProduct.html?id=${product.id}" class="ps-shoe__name">${product.name}</a>
                                <p class="ps-shoe__price">${convertMoney(priceDiscount(product.price, product.discount))}
                                        <del class="ps-shoe__oldPrice">${convertMoney(product.price)}</del>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>`;
        }
    })
    $('.product-item-1').html(productCards.join(""));
}

$('.btn-filter').on('click', function(){
    let selectCategory = $('#search-category').val();
    let productSearch = products;
    if(selectCategory){
        productSearch  = products.filter(elem => elem.category === selectCategory);
        // console.log(productSearch);
    }
    let minPrice = $('.min-price').val();
    let maxPrice = $('.max-price').val();
    if(minPrice ){
        productSearch  = products.filter(elem => elem.price >= minPrice);
        
    }   
    if(maxPrice){
        productSearch  = products.filter(elem => elem.price <= maxPrice);
    }
    renderUI(productSearch );
});

renderUI(products);

$('.ps-shoe').on('click', function(){
    const productId = $(this).data('id');
    
    const selectedProduct = products.find(product => product.id == productId);

    localStorage.setItem('selectedProduct', JSON.stringify(selectedProduct));

    window.location.href = `../pages/detailProduct.html?id=${productId}`;
});

