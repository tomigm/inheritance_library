let myLibrary = [];
let listHTML;
let generatedList = document.getElementById("bookList");


function Book(title, author, pages, read){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    
}

Book.prototype.info = function() {
    return this.title + ' by ' + this.author + ', ' + this.pages + ' pages,' + this.read
}

function addBookToLibrary () {
    let title = prompt('title');
    let author = prompt('author');
    let pages = prompt('pages');
    let read = prompt('read');

    myLibrary.push(new Book (title, author, pages, read))
    render();
    console.log(myLibrary);


}


/*
  var newDiv = document.createElement("div"); 
  var newContent = document.createTextNode("Hola!¿Qué tal?"); 
  newDiv.appendChild(newContent); //añade texto al div creado. 

  // añade el elemento creado y su contenido al DOM 
  var currentDiv = document.getElementById("div1"); 
  document.body.insertBefore(newDiv, currentDiv); 
}
*/

function createCard(book) {
let card = document.createElement('div');
card.classList.add('bookCard');
let cardTitle = document.createElement('h1');
cardTitle.textContent = book.title;
let cardAuthor = document.createElement('h2');
cardAuthor.textContent = book.author;

let cardPages = document.createElement('p');
cardPages.textContent = book.pages;

let cardRead = document.createElement('a');
cardRead.textContent = book.read;

card.appendChild(cardTitle);
card.appendChild(cardAuthor);
card.appendChild(cardPages);
card.appendChild(cardRead);
generatedList.appendChild(card);
}

function removeBooks(){
 // check if booklist has childs
  //if yes > while booklist have child, remove child
if(generatedList.hasChildNodes()) {
  let listLastChild;
  while (generatedList.hasChildNodes()) {
    generatedList.removeChild(generatedList.lastChild);
  }
  return
}
else {return}

}


function render() {
  removeBooks();
  myLibrary.forEach(book => createCard(book));

// go to myLibrary
// forEach book, create a card
  //in each card, add book title

}




// Get the modal
const bookModal = document.getElementById("modal");

// Get the button that opens the modal
const addBtn = document.getElementById("addBtn");

// Get the <span> element that closes the modal
const closeModal = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
addBtn.onclick = function() {
  bookModal.style.display = "flex";
  bookModal.classList.add = ".modalAnim"
}

// When the user clicks on <span> (x), close the modal
closeModal.onclick = function() {
  bookModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == bookModal) {
      bookModal.style.display = "none";
  }
}


