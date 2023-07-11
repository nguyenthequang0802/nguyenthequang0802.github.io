// Truy cập vào thẻ h1 có id=“heading” thay đổi màu chữ thành ‘red’, và in hoa nội dung của thẻ đó
const heading =  document.getElementById("heading");
heading.style.color = 'red';
heading.style.textTransform = "uppercase";

// Thay đổi màu chữ của tất cả thẻ có class “para” thành màu “blue” và có font-size = “20px”
const para = document.querySelectorAll(".para")
Array.from(para).map(elem => {
    elem.style.color = 'blue';
    elem.style.fontSize = '20px';
})

// Thêm thẻ a link đến trang ‘facebook’ ở đằng sau thẻ có class “para-3”

const para3 = document.querySelector(".para-3");
const html = '<a href="www.facebook.com">Facebook</a>';
para3.insertAdjacentHTML('afterend', html);

// Thay đổi nội dung của thẻ có id=“title” thành “Đây là thẻ tiêu đề”
const title = document.querySelector("#title");
title.textContent = "Đây là thẻ tiêu đề";

// Thêm class “text-bold” vào thẻ có class=“description”
const description = document.querySelector(".description");
description.classList.add('text-bold');
description.style.fontWeight = "bold";

// Thay thế thẻ có class=“para-3” thành thẻ button có nội dung là “Click me”
const btn = document.createElement("button");
btn.innerText = "Click Me";
para3.parentElement.replaceChild(btn, para3);

// Copy thẻ có class=“para-2” và hiển thị ngay đằng sau thẻ đó
const para2 = document.querySelector(".para-2");
const copyPara2 = para2.cloneNode(true);
para2.insertAdjacentElement("afterend", copyPara2)

// Xóa thẻ có class=“para-1”
const para1 = document.querySelector(".para-1");
para1.parentElement.removeChild(para1)