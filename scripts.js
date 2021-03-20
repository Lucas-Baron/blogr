const connect = document.querySelector('#connect')
const content = document.querySelector('.content')
const img = connect.querySelector('img')


    connect.addEventListener('click', function(){
        content.classList.add('active')
        img.classList.add('run')
    })

const click = connect.querySelector('#click')

    click.addEventListener('click', function(){
        content.classList.remove('active')
        img.classList.remove('run')
    })


    