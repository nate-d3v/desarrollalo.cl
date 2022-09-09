const bars = document.querySelector('.fa-bars')
const nav = document.querySelector('#nav')
const anchor = document.querySelectorAll('.anchor')

bars.addEventListener('click', () => {
    nav.classList.toggle('show')    
})

anchor.forEach(element => {
    element.addEventListener('click', () => {
        nav.classList.remove('show')    
    })
})