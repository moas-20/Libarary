const title = document.querySelector("#title");
const auther = document.querySelector("#auther");
const pages = document.querySelector("#pages");
const readCheck = document.querySelector("#status");
// const title = document.querySelector("#title");


// displaying form for adding new book
const disp = document.querySelector(".form-disp");
const form = document.querySelector(".form-container");
disp.addEventListener("click",()=>{
    form.classList.add("active")
});

// remove the requist to add new book
const cancleAdd = document.querySelector(".form-cns");
cancleAdd.addEventListener('click',()=>{
    form.classList.remove("active");
    title.value = "";
    auther.value = "";
    pages.value = "";  
    readCheck.checked = false;
})

// adding & display new book
const container = document.querySelector(".books-container");
const addBook = document.querySelector(".form-add");
addBook.addEventListener('click',()=>{

})


const myLibrary = [];

function Book(title,auther,pages){
  // the constructor...
  this.title = title;
  this.auther = auther;
  this.pages = pages;
}

function addBookToLibrary() {
  // take params, create a book then store it in the array
  
}
