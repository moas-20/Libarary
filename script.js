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
