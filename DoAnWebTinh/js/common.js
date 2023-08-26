$(document).ready(function() {
    $(window).scroll(function(){
        if($(this).scrollTop()){
            $("#back-top").fadeIn();
        } else{
            $("#back-top").fadeOut();
        }
    });
    $("#back-top").on("click", function(){
        $("html, body").animate({scrollTop: 0}, 1000)
    });
})

// let userLogin = JSON.parse(localStorage.getItem('isLogin'));


function convertMoney(num) {
    return num.toLocaleString("it-IT", {
        style: "currency",
        currency: "VND",
    });
}


function priceDiscount(oldPrice, discount){
    let newPrice;
    return newPrice = oldPrice -(oldPrice * discount /100);
}

