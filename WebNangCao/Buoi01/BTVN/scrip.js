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

// BTVN Buoi2
// 1.Thêm 1 nút add + 1 ô input để nhập text (tạo bằng Javascript).
// Mỗi khi bấm nút vào nút add thêm 1 thẻ li có nội dung là nội dung trong ô input vào cuối danh sách ul
const tagH1 = document.createElement("h1")
tagH1.textContent = 'Homework Day 2';
tagH1.style.textTransform = 'uppercase';
document.body.appendChild(tagH1);

const newBtnAdd = document.createElement("button");
newBtnAdd.innerText = "add";

document.body.appendChild(newBtnAdd);

const newInput = document.createElement("input");
newInput.setAttribute('type', 'text');
document.body.appendChild(newInput);

const newTagUl = document.createElement("ul");
newTagUl.setAttribute('id', 'newItems');
document.body.appendChild(newTagUl);

newBtnAdd.addEventListener('click', function(){
    let inputValue = newInput.value.trim();

    if(inputValue === ''){
        alert('Vui lòng nhập nội dung')
    } else{
        let listItem = document.createElement('li');
        listItem.textContent = inputValue;
        newTagUl.appendChild(listItem);
        newInput.value = '';
    }
})

// 2.Thêm 1 nút remove (tạo bằng Javascript). Chức năng để xóa thẻ li cuối cùng của danh sách ul
const newBtnRemove = document.createElement('button');
newBtnRemove.textContent = 'remove';
document.body.appendChild(newBtnRemove);

newBtnRemove.addEventListener('click', function(){
    let listItems = document.querySelectorAll('#newItems li');
    if(listItems.length > 0){
        newTagUl.removeChild(listItems[listItems.length - 1]);
    } else {
        alert("Không còn phần tử nào!")
    }
})

// 3.Thêm 1 nút Hide trên đầu của danh sách ul
// Khi bấm vào Hide thì ul sẽ ẩn. Đồng thời label của nút Hide => Show
const newTagBr = document.createElement('br');
document.body.appendChild(newTagBr)

const toggleBtn = document.createElement('button');
toggleBtn.textContent = 'Hide';
document.body.appendChild(toggleBtn);

toggleBtn.addEventListener('click', function(){
    if(newTagUl.style.display === 'none'){
        newTagUl.style.display = 'block';
        toggleBtn.textContent = 'Hide';
    } else{
        newTagUl.style.display = 'none';
        toggleBtn.textContent = 'Show';
    }
})



