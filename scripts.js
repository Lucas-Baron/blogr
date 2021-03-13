    const modal = document.querySelector('.modal')
    const modalMenu = document.querySelectorAll('.area-modal')

    for (let areaModal of modalMenu){
        areaModal.addEventListener('click', function(){

            modal.classList.add('active')
        })
    }


   



    /*for (let card of cards){
        card.addEventListener("click", function(){
            const videioId = card.getAttribute('id')
            modalOverlay.classList.add('active')
    
            modalOverlay.querySelector('iframe').src = `https://www.youtube.com/embed/${videioId}`
        })
    }
    */
