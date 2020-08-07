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




/*
function render() {
    let myLibraryLength = myLibrary.length;
    let book;
    let listHTML = "<ul>";
    

    for(book = 0; book < myLibraryLength; book++ ) {
        listHTML += "<li>" + myLibrary[book] + "</li>";   
    }
    listHTML += "</ul>"
    
    return generatedList.innerHTML = listHTML;
}

*/

/*
1) If you haven’t already, set up your project with skeleton HTML/CSS and JS files.
2) All of your book objects are going to be stored in a simple array, so add a function
to the script (not the constructor) that can take user’s input and store the new book 
objects into an array. Your code should look something like this:

let myLibrary = [];

function Book() {
  the constructor...
}

function addBookToLibrary() {
  do stuff here
}

3) Hook the array up to your HTML with a render() function that loops through the array and displays each book on the page. 
You can display them in some sort of table, or each on their own “card”. 
It might help for now to manually add a few books to your array so you can see the display.

*/