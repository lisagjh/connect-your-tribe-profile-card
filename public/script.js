const button = document.querySelector('.content-btn')

button.addEventListener('click', function() {
    button.classList.toggle('btn-clicked');
    console.log('click')
})