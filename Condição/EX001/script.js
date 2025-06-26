function carregar(){
    var h1 = document.querySelector('h1')
    var msg = document.querySelector('div#msg')
    var img = document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    if(hora == 1){
        msg.innerHTML = `Agora são ${hora} hora.`
    }else{
        msg.innerHTML = `Agora são ${hora} horas.`
    }

    if(hora >= 19){
        // Noite
        img.src = 'fotos/noite.png'
        document.body.style.background = '#17173D'
    }else{
        if(hora >= 16){
            // Tarde
            img.src = 'fotos/tarde.png'
            document.body.style.background = '#DC8661'
        }else{
            if(hora >= 11){
                // meio dia
                img.src = 'fotos/meio_dia.png'
                document.body.style.background = '#FEF2BB'
                h1.style.color = 'black'
            }else{
                if(hora >= 6){
                    // Manhãn
                    img.src = 'fotos/manha.png'
                    document.body.style.background = '#FEEED6'
                    h1.style.color = 'black'
                }else{
                    // madrugada
                    img.src = 'fotos/madrugada.png'
                    document.body.style.background = '#071313'
                }
            }
        }
    }
}