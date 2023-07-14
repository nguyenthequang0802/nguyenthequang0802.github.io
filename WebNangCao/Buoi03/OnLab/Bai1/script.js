const para = document.querySelector('p');
// let longWords = para.innerText.split(" ")
//     .filter(elem => {
//         return elem.length >= 8; 
//     });
// longWords.forEach(elem =>{
//     let span = document.createElement('span');
//     span.innerText  = elem;
//     span.style.backgroundColor = 'yellow';
//     para.innerHTML = para.innerHTML.replace(elem, span.outerHTML)
// })

let words = para.innerHTML.split(' ');
const highlinghtedWords = words.map(word =>{
    if(word.length >= 8){
        return `<span style="background-color: yellow">${word}</span>`;
    }
    return word;
});
para.innerHTML = highlinghtedWords.join(' ');

// 2. Thêm link hiển thị text “facebook” link đến trang facebook.com ở sau thẻ p
let newTaga = document.createElement('a');
newTaga.innerText = 'Facebook';
newTaga.href = 'http://Facebook.com';
document.body.appendChild(newTaga);

// 3.Đếm số từ có trong đoạn văn. Tạo 1 thẻ div để hiển thị số từ
const countWords = para.innerText.split(' ').length;

const newTagDiv = document.createElement('div');
newTagDiv.innerText = `${countWords} words`;
document.body.appendChild(newTagDiv)

// 4Thay thế ký hiệu ? => 🤔, ! => 😲
para.innerHTML = para.innerHTML.replaceAll('?', '🤔');
para.innerHTML = para.innerHTML.replaceAll('!', '😲');