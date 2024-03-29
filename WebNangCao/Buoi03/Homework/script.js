const listUser = [
    {
        name: "User 1",
        quote: "Your time is limited, so don't waste it living someone else's life. Don't get stuck by dogma – that's living with the results of other people's thoughts.",
        image: "https://randomuser.me/api/portraits/men/41.jpg",
        color: '#bd355b',
    },
    {
        name: "User 2",
        quote: "Your time is limited, so don't waste it living someone else's life. Don't get stuck by dogma – that's living with the results of other people's thoughts.",
        image: "https://randomuser.me/api/portraits/women/50.jpg",
        color: '#1183e0',
    },
    {
        name: "User 3",
        quote: "Your time is limited, so don't waste it living someone else's life. Don't get stuck by dogma – that's living with the results of other people's thoughts.",
        image: "https://randomuser.me/api/portraits/women/22.jpg",
        color: '#ff225c',
    },
    {
        name: "User 4",
        quote: "Your time is limited, so don't waste it living someone else's life. Don't get stuck by dogma – that's living with the results of other people's thoughts.",
        image: "https://randomuser.me/api/portraits/women/76.jpg", 
        color: 'tomato',
    },
    {
        name: "User 5",
        quote: "Your time is limited, so don't waste it living someone else's life. Don't get stuck by dogma – that's living with the results of other people's thoughts.",
        image: "https://randomuser.me/api/portraits/men/17.jpg",
        color: '#3fddc0'
    }
];

const testimonialsContainer = document.querySelector('.testimonials-container');
const textElement = document.querySelector('.text');
const nameElement = document.querySelector('.name');
const authorElements = document.querySelectorAll('.author');
const authorList = document.querySelector('.authors-container')

// function handleUserClick(index) {
//     textElement.textContent = listUser[index].quote;
//     nameElement.textContent = listUser[index].name;

//     authorElements.forEach(author => {
//         author.classList.remove('selected');
//     });

//     authorElements[index].classList.add('selected');

//     testimonialsContainer.style.background = listUser[index].color;
// }

// authorElements.forEach((author, index) => {
//     author.addEventListener('click', () => {
//         handleUserClick(index);
//     });
// });


const renderAuthorImage = arr => {
    let html = "";
    arr.forEach(element => {
       html += `
            <div class="author selected">
                <img src="${element.image}" alt="">
            </div>
       ` 
    });
}

const activeAuthor = (arr, index) => {
    const preSelectedEl = document.querySelector(".selected");
    if(preSelectedEl){
        preSelectedEl.classList.remove("selected");
    }
    const currentEl = document.querySelector(`.author:nth-child(${index + 1})`);
    currentEl.classList.add("selected");

    const 
}



