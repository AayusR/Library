
showBooks();
const addButton = document.querySelector('.add-btn')
const formContainer = document.querySelector('.form')
const submitButton = document.querySelector('.submit-btn')
const closeButton = document.querySelector('.close-btn')

const form = document.querySelector('form')
const updateButton = document.querySelectorAll('.update')
const removeButtons = document.querySelectorAll('.remove')

// functions
function Book(title, author, pages, status) {
    this.title = title
    this.author = author
    this.pages = pages
    this.status = status
}

function addBookToLibrary() {
    const title = document.querySelector('#title').value
    const author = document.querySelector('#author').value
    const pages = document.querySelector('#pages').value
    const readYes = document.getElementById('yes')
    const readNo = document.getElementById('no')
    let status;
    if(readYes.checked)
        status = 'read';
    else if(readNo.checked)
        status = 'not read'
    const newBook = new Book(title, author, pages, status)

    let books = localStorage.getItem('books')

    if (books == null)
        myLibrary = [];
    else
        myLibrary = JSON.parse(books);

    myLibrary.push(newBook);
    localStorage.setItem('books', JSON.stringify(myLibrary));
    showBooks();
}

function showBooks() {
    let books = localStorage.getItem('books')
    if (books == null)
        myLibrary = [];
    else
        myLibrary = JSON.parse(books);
    let html = '<div class ="empty-box"> </div>';
    myLibrary.forEach(function (book, index) {
        html += `
        <div class="card">
            <p>${book.title}</p>
            <p>${book.author}</p>
            <p>${book.pages}</p>
            <button class="update btn" data-status=${index} onclick='changeStatus(this.dataset.status)' >${book.status}</button>
            <button id='${index}' class="remove btn" onclick='removeBook(this.id)' >Remove</button>
        </div>
        `
        document.getElementById('card-container').innerHTML = html;
    })
    
}

function removeBook(index){
    console.log('removing book', index)

    let books = localStorage.getItem('books')
    if (books == null)
        myLibrary = [];
    else
        myLibrary = JSON.parse(books);

    myLibrary.splice(index,1)
    localStorage.setItem('books', JSON.stringify(myLibrary));
    showBooks(); 
    document.location.reload();
}

function changeStatus(index){
    let books = localStorage.getItem('books')
    if (books == null)
        myLibrary = [];
    else
        myLibrary = JSON.parse(books);
    console.log(myLibrary[index].status)
    let previousStatus = myLibrary[index].status;
    let newStatus;
    if(previousStatus === 'read')
        newStatus = 'not read'
    else
        newStatus = 'read'
    myLibrary[index].status = newStatus
    localStorage.setItem('books', JSON.stringify(myLibrary));
    showBooks();
}

//event listener and actions
addButton.addEventListener('click', () => {
    formContainer.style.display = 'flex';
})

closeButton.addEventListener('click',()=>{
    formContainer.style.display = 'none';
})

form.addEventListener('submit', () => {
    addBookToLibrary();
    formContainer.style.display = 'none';
})
