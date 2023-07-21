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

renderUI();

function handleSearch(){
    let selectCategory = document.getElementById('search-category').value;
    let productSearch = products;
    if(selectCategory){
        productSearch = productSearch.filter(elem => elem.category === selectCategory);
    }
    let minPrice = document.getElementsByClassName('min-price')[0].value;
    let maxPrice = document.getElementsByClassName('max-price')[0].value;

    // if(minPrice && !maxPrice){

    // } else if(maxPrice && ){

    // } else if(minPrice && maxPrice){

    // } else{

    // }

    if(minPrice ){
        productSearch = productSearch.filter(elem => elem.price >= minPrice);
        console.log(productSearch);
    }  
    if(maxPrice){
        productSearch = productSearch.filter(elem => elem.price <= maxPrice);
    }

    // console.log(productSearch);
    renderUI(productSearch);
}

