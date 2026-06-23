// form data
const title = document.querySelector("#title");
const auther = document.querySelector("#auther");
const pages = document.querySelector("#pages");
const readCheck = document.querySelector("#status");
// add new book btn
const disp = document.querySelector(".form-disp");
const form = document.querySelector(".form-container");
// form cancele btn
const cancleAdd = document.querySelector(".form-cns");
// card container
const container = document.querySelector(".books-container");
// form add btn
const addBook = document.querySelector(".form-add");


// displaying form for adding new book
disp.addEventListener("click",()=>{
    form.classList.add("active")
});

// remove the requist to add new book
cancleAdd.addEventListener('click',()=>{
    form.classList.remove("active");
    title.value = "";
    auther.value = "";
    pages.value = "";  
    readCheck.checked = false;
})


// adding & display new book
addBook.addEventListener('click',()=>{
    addBookToLibrary();
    
})


const myLibrary = [];

function Book(title,auther,pages,status){
    // the constructor...
    this.title = title;
    this.auther = auther;
    this.pages = pages;
    this.status = status;
}

function addBookToLibrary() {
    // take params, create a book then store it in the array
    let book = new Book(title.value,auther.value,pages.value,readCheck.checked);
    myLibrary.push(book);
  
}

// creat card contain a book info
function displayCard(){
    let card = document.createElement("div");
    card.classList.add("card");

    let cardData = document.createElement("div");
    cardData.classList.add("card-data");
    
    let title = document.createElement("h3");
    title.textContent = "Title";

    let titleValue = document.createElement("p");
    titleValue.textContent = book.title;

    let auther = document.createElement("h3");
    auther.textContent = "Auther";

    let autherValue = document.createElement("p");
    autherValue.textContent = book.auther;

    let pages = document.createElement("h3");
    pages.textContent = "Pages";

    let pageValue = document.createElement("p");
    pageValue.textContent = book.pages;

    let status = document.createElement("span");
    status.textContent = book.status ? "Read" : "Not Reads";

    cardData.append(
        title,
        titleValue,
        auther,
        autherValue,
        pages,
        pageValue,
        status
    );

    let cardBtn = document.createElement("div");
    cardBtn.classList.add("card-btn");


    let read = document.createElement("button");
    read.textContent = "read";
    let delet = document.createElement("button");
    delet.textContent = "delet";
    cardBtn.appendChild(read);
    cardBtn.appendChild(delet);

    card.appendChild(cardData);
    card.appendChild(cardBtn);
    container.appendChild(card);
}

