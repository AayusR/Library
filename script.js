
const addButton = document.querySelector('.add-btn')
const formContainer = document.querySelector('.form')
const submitButton = document.querySelector('.submit-btn')
const form = document.querySelector('form')
const closeButton = document.querySelector('.close-btn')

addButton.addEventListener('click',()=>{
    formContainer.style.display = 'flex';
})

form.addEventListener('submit', ()=>{
    formContainer.style.display = 'none';
})

closeButton.addEventListener('click', ()=>{
    formContainer.style.display = 'none';
})

