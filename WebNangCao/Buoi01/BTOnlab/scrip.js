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
const socialMediaList = [
    {
        lable: "Facebook",
        link: "https://facebook.com"
    },
];

html += `<a href="${socialMediaList.link}">${socialMediaList.lable}</a>`;
const para3 = document.querySelector(".para3")


