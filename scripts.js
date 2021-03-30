const connect = document.querySelector('#connect')
const content = document.querySelector('.content')
const img = connect.querySelector('img')


    connect.addEventListener('click', function(){
        content.classList.toggle('active')
        img.classList.toggle('run')
    })
