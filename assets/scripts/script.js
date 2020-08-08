let myLibrary = [];
let listHTML;
let generatedList = document.getElementById("bookList");


// Book Constructor

function Book(title, author, pages, read){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    
}

// Push books to library ((with information from #MODAL))

function addBookToLibrary () {
    let title = document.getElementById('titleInput').value;
    let author = document.getElementById('authorInput').value;
    let pages = document.getElementById('pagesInput').value;
    let read;
    let readed = document.getElementById('readedInput');
    let unreaded = document.getElementById('unreadedInput');
    if (readed.checked) {
      read = readed.value;
    }

    else if (unreaded.checked){
      read = unreaded.value
    }
    
    myLibrary.push(new Book (title, author, pages, read));
    render();
    console.log(myLibrary);


}

// Add info to the DOM, first removing elements (for not exponential growing), and then adding new ones

function render() {
  removeBooks();
  myLibrary.forEach(book => createCard(book));

// go to myLibrary
// forEach book, create a card
  //in each card, add book title

}



function removeBooks(){
  // check if booklist has childs
   //if yes > while booklist have child, remove child
 if(generatedList.hasChildNodes()) {
   
   while (generatedList.hasChildNodes()) {
     generatedList.removeChild(generatedList.lastChild);
   }
   return
 }
 else {return}
 
 }

function createCard(book) {

  //Create elements, and nest them in order to create each card
  let card = document.createElement('div');
  card.classList.add('bookCard');
  let cardClose = document.createElement('span');
  cardClose.classList.add('closeCard');
  cardClose.innerHTML = "&times";
  let cardTitle = document.createElement('h1');
  cardTitle.textContent = book.title;
  let cardAuthor = document.createElement('h2');
  cardAuthor.textContent = book.author;
  
  let cardPages = document.createElement('p');
  cardPages.textContent = book.pages + ' pages';
  let cardElements = document.createElement('div');
  cardElements.classList.add('cardElements');
  
  
  card.appendChild(cardClose)
  cardElements.appendChild(cardTitle);
  cardElements.appendChild(cardAuthor);
  cardElements.appendChild(cardPages);
  card.appendChild(cardElements);
  
  let bookIndex = myLibrary.indexOf(book);
  
  card.dataset.index = bookIndex;
  generatedList.appendChild(card);

  //if marked as read, that card is red
  if (book.read == 'yes') {card.classList.add('readState')}
  
  }

//  Add input #MODAL

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

// CARD REMOVE && Read state change

document.addEventListener( "click", cardInteraction );

function cardInteraction(event){
  let closeCard = event.target;
  let card = event.target;
  
// Card removal upon click on X
  if(closeCard.tagName == 'SPAN' && closeCard.classList.contains("closeCard")){
      console.log("hi");
      let selectedCard = closeCard.parentElement;
      
      myLibrary.splice(selectedCard.getAttribute('data-index'), 1);

      selectedCard.remove();
      render();
  }
// read state change >
  else if (card.tagName== 'DIV' && card.classList.contains("bookCard")) {
    card.classList.toggle('readState');
    let bookIndex = card.getAttribute('data-index');

      if (myLibrary[bookIndex].read == 'yes') {
        myLibrary[bookIndex].read = 'no';
        console.log (myLibrary[bookIndex]);
      }
      else if (myLibrary[bookIndex].read == 'no') {
        myLibrary[bookIndex].read = 'yes';
        console.log (myLibrary[bookIndex]);
      }
  }
}

// Initial books on page load

function initialBooks() {
  myLibrary.push(new Book ('1984', 'George Orwell', '325', 'yes'))
  myLibrary.push(new Book ('Rayuela', 'Julio Cortazar', '736', 'no'))
  render()
}

initialBooks();