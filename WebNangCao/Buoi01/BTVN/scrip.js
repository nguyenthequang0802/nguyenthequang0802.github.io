// Câu 1

const text = document.querySelector("#text");
text.style.color = "#777";
text.style.fontSize = "2rem";
text.innerHTML = "Tôi có thể làm <em> bất cứ điều gì </em> tôi muốn với JavaScript";

// Câu 2
const liList = document.querySelectorAll('#text+ul li')
Array.from(liList).forEach(element => {
    element.style.color = 'blue';
});


// Câu 3
// Thêm 3 thẻ <li> có nội dung Item 8, Item 9, Item 10 vào cuối danh sách

const list = document.getElementById('list');
for(let i=8; i <= 10; i++){
    let newItem = document.createElement('li');
    newItem.innerText += `Item ${i}`;
    list.appendChild(newItem);
}

// Sửa nội dung cho thẻ <li> 1 thành màu đỏ (color)
const ItemList1 = document.querySelector('#list li');
ItemList1.style.color = 'red';

// Sửa background cho thẻ <li> 3 thành màu xanh (background-color)
const ItemList3 = document.querySelector('#list li:nth-child(3)');
ItemList3.style.backgroundColor = 'green';

// Remove thẻ <li> 4

const ItemList4 = document.querySelector('#list li:nth-child(4)');
ItemList4.parentElement.removeChild(ItemList4);

// Thêm thẻ <li> mới thay thế cho thẻ <li> 4 bị xóa ở bước trước, thẻ <li> mới có nội dung bất kỳ
const newItem4 = document.createElement('li');
newItem4.innerText = 'Replace Item4';
ItemList3.insertAdjacentElement('afterend',newItem4);





