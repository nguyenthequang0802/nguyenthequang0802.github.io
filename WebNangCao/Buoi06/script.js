let products = [
    {
        id: 1,
        name: 'Asus',
        description: 'Laptop mỏng nhẹ',
        category: 'Laptop',
        price: 20
    },
    {
        id: 2,
        name: 'Acer',
        description: 'Laptop mỏng nhẹ',
        category: 'Laptop',
        price: 19
    },
    {
        id: 3,
        name: 'Macbook',
        description: 'Laptop cao cấp',
        category: 'Laptop',
        price: 22
    },

    {
        id: 4,
        name: 'Iphone 13 pro max',
        description: 'Iphone 13',
        category: 'Iphone',
        price: 30
    },

    {
        id: 5,
        name: 'Iphone 10 pro max',
        description: 'Iphone 10',
        category: 'Iphone',
        price: 9
    },

    {
        id: 6,
        name: 'Iphone 12 pro max',
        description: 'Iphone 12',
        category: 'Iphone',
        price: 15
    },

    {
        id: 7,
        name: 'Tai nghe Sony',
        description: 'Tai nghe không dây',
        category: 'Tai nghe',
        price: 10
    },

    {
        id: 8,
        name: 'Loa MarShall',
        description: 'Loa Bluetooth',
        category: 'Loa',
        price: 18
    },
];

function renderUI(arr = products) {
    let html = "";
    if(arr.length === 0){
        html="Chưa có sản phẩm nào trong giỏ hàng";
    } else {
        for(let i = 0; i < arr.length; i++){
            
            html += `
                <li class="row">
                    <div class="col left">
                        <div class="thumbnail">
                            <a href="#">
                                <img src="https://via.placeholder.com/200x150" alt="" />
                            </a>
                        </div>
                        <div class="detail">
                            <div class="name"><a href="#">${arr[i].name}</a></div>
                            <div class="description">
                                ${arr[i].description}
                            </div>
                            <div class="price">$${arr[i].price}</div>
                            <div class="category">${arr[i].category}</div>

                        </div>
                    </div>
                </li>
            `
        }
    } 
    document.getElementById('products').innerHTML = html;

}

// renderUI();
$(document).ready(function() {
    renderUI();
});

// function handleSearch(){
//     let selectCategory = document.getElementById('search-category').value;
//     let productSearch = products;
//     if(selectCategory){
//         productSearch = productSearch.filter(elem => elem.category === selectCategory);
//     }
//     let minPrice = document.getElementsByClassName('min-price')[0].value;
//     let maxPrice = document.getElementsByClassName('max-price')[0].value;

//     if(minPrice ){
//         productSearch = productSearch.filter(elem => elem.price >= minPrice);
//         console.log(productSearch);
//     }   
//     if(maxPrice){
//         productSearch = productSearch.filter(elem => elem.price <= maxPrice);
//     }

//     let keySearch = document.querySelector('.keyword').value.trim().toLowerCase();
   
//     productSearch = productSearch.filter(elem => elem.name.toLowerCase().includes(keySearch))
//     // console.log(productSearch);
//     renderUI(productSearch);
// }


$('.button-search button').on('click', function() {
    let selectCategory = $('#search-category').val();
    let productSearch = products;
    if(selectCategory){
        productSearch = productSearch.filter(elem => elem.category === selectCategory);
    }
    let minPrice = $('.min-price').val();
    let maxPrice = $('.max-price').val();
    if(minPrice ){
        productSearch = productSearch.filter(elem => elem.price >= minPrice);
        console.log(productSearch);
    }   
    if(maxPrice){
        productSearch = productSearch.filter(elem => elem.price <= maxPrice);
    }

    let keySearch = $('.keyword').val().trim().toLowerCase();
    productSearch = productSearch.filter(elem => elem.name.toLowerCase().includes(keySearch));

    renderUI(productSearch);
});

// Get parameters from url
let url = window.location.href;
url = new URL(url);

var c = url.searchParams.get('id');
console.log(c);
