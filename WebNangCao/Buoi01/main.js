const heading = document.getElementById("heading");

// console.log(heading);

const heading1 = document.querySelector("#heading");
// console.log(heading1);

// 
const para1 = document.querySelector("p");
// console.log(para1);

const para2 = document.querySelector(".para");
// console.log(para2);

const para3 = document.querySelector("p:nth-child(4)");
// console.log(para3);


const ul1 = document.querySelector(".box ul");
// console.log(ul1);

const ul2 = document.querySelector(".box + ul");
console.log(ul2);

const paraList =  document.querySelectorAll("p");
console.log(paraList)

for(let i=0;  i< paraList.length; i++){
    paraList[i].style.color = 'blue'
}

Array.from(paraList).map(e => {e.style.backgroundColor = 'yellow'})


console.log(ul1.innerHTML);
console.log(ul1.innerText);
console.log(ul1.textContent);


heading.innerHTML = "Hello";
heading.innerHTML = "<span>Hello World</span>";
heading.innerText = "<span>Hello World</span>";

const socialMediaList = [
    {
        lable: "Google",
        link: "https://google.com"
    },
    {
        lable: "Facebook",
        link: "https://facebook.com"
    },
    {
        lable: "Instagram",
        link: "https://instagram.com"
    },
];

const socialMedia = document.querySelector(".social-media")
let html = "";
// console.log(socialMedia)
socialMediaList.forEach((elem) => {
    html += `<a href="${elem.link}">${elem.lable}</a>`;
})
socialMedia.innerHTML = html

// Insert 
const newPara = document.createElement('p');
newPara.innerText = 'New para';
document.body.appendChild(newPara)

// Copy
const copyPara = newPara.cloneNode(true);
document.body.prepend(copyPara)

const copyPara1 = newPara.cloneNode(true);
document.body.insertBefore(copyPara1, para3)

// Insert 2
// const btn =  document.createElement("button");
// btn.innerText = "Click Me";
// ul1.insertAdjacentElement("beforebegin", btn)

ul1.insertAdjacentHTML("beforebegin", "<button>Click Me</button>");

// Remove
document.body.removeChild(para1);
para2.parentElement.removeChild(para2);

// Replace
const h2 = document.createElement("h2")
h2.innerText = "Day la the h2";
// document.body.replaceChild(h2, heading);
heading.parentElement.replaceChild(h2, heading);