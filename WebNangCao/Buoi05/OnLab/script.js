let products = [
    {
        id: 1,
        name: 'Asus',
        description: 'Laptop mỏng nhẹ',
        price: 20
    },
    {
        id: 2,
        name: 'Acer',
        description: 'Laptop mỏng nhẹ',
        price: 19
    },
    {
        id: 3,
        name: 'Macbook',
        description: 'Laptop cao cấp',
        price: 22
    },
];

let promotionCode = {
    A: 10,
    B: 20,
    C: 30,
    D: 40,
};

function renderUI() {
    let html = "";
    let total = 0;
    if(products.length === 0){
        html="Chưa có sản phẩm nào trong giỏ hàng";
    } else {
        for(let i = 0; i < products.length; i++){
            total += products[i].price;
            html += `
                <li class="row">
                    <div class="col left">
                        <div class="thumbnail">
                            <a href="#">
                                <img src="https://via.placeholder.com/200x150" alt="" />
                            </a>
                        </div>
                        <div class="detail">
                            <div class="name"><a href="#">${products[i].name}</a></div>
                            <div class="description">
                                ${products[i].description}
                            </div>
                            <div class="price">$${products[i].price}</div>
                            <div class="total-price" id="price_${products[i].id}">$${products[i].price}</div>

                        </div>
                    </div>

                    <div class="col right">
                        <div class="quantity">
                            <input type="number" onkeyup="handleOnChangeQuantity(${products[i].id}, ${products[i].price})" class="product-quantity" id="product_${products[i].id}" step="1" value="1" />
                        </div>

                        <div class="remove">
                            <span class="close" onclick="removeItem(${products[i].id})"><i class="fa fa-times" aria-hidden="true"></i></span>
                        </div>
                    </div>
                </li>
            `
        }
        document.getElementsByClassName('totalAll')[0].innerHTML = '$' +total;
    } 
    document.getElementById('products').innerHTML = html;
    updateTotalPrice();
}

renderUI();

function handleOnChangeQuantity(id, price){
    let quantity = document.getElementById('product_' + id).value;
    
    if(quantity <= 0 && quantity !== ''){
        document.getElementById('price_'+id).value = 1;
        quantity = 1;
    } 
    let totalPrice = quantity*price;
    document.getElementById('price_'+id).innerHTML = '$' + totalPrice;
    updateTotalPrice();

}

function removeItem(id){
    products = products.filter(product => product.id !== id)
    renderUI();
}

// let discount = document.querySelector('.discount');
// let discountElem = document.querySelector('.discount span');

function updateTotalPrice() {
    let total = 0;
    let discountMoney = 0;
    for (let i = 0; i < products.length; i++) {
        let quantity = document.getElementById('product_' + products[i].id).value;
        total += products[i].price * quantity;
    }
    document.getElementsByClassName('totalAll')[0].innerHTML = '$' + total;

    // Áp dụng mã giảm giá
    // let data = checkPromotion();
    // if(data){
    //     discountMoney = (total*data)/100;
    //     discount.classList.remove('hide');
    // } else{
    //     discount.classList.add('hide');
    // }

    // document.getElementsByClassName('vat').innerText = total*0.05;
    // discountElem.innerText = discountMoney;
    // document.getElementsByClassName('total').innerText = total*1.05-discountMoney
}

// let inputPromotion = document.getElementById('promo-code');

// function checkPromotion() {
//     let value = inputPromotion.value;
//     if (promotionCode[value]) {
//         return promotionCode[value];
//     }
//     return 0;
// }

// let btnPromorion  = document.querySelector('.promotion button')

// btnPromorion.addEventListener('click', function(){
//     updateTotalPrice(products);
// })
