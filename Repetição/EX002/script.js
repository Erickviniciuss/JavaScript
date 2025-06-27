function resultado(){
    var inc = document.querySelector('#txtinc')
    var fim = document.querySelector('#txtfim')
    var pas = document.querySelector('#txtpas')
    var res = document.querySelector('#res')
    var emj = document.querySelector('#emj')
    var c=0
    var f=0
    emj.innerHTML = ''
    if(fim.value.length == 0){
        fim.style.border = '1px groove red'
        c++
    }else{
        fim.style.border = '1px groove black'
    }
    if(inc.value.length == 0){
        inc.style.border = '1px groove red'
        c++
    }else{
        inc.style.border = '1px groove black'
    }
    if(pas.value.length == 0){
        pas.style.border = '1px groove red'
        c++
    }else{
        pas.style.border = '1px groove black'
    }
    var pas = Number(pas.value)
    if(pas == 0){
        pas = 1
    }
    if(c != 0){
        res.innerHTML = 'Inpossivel contar!'
    }else{
        var inc = Number(inc.value)
        var fim = Number(fim.value)
        res.innerHTML = 'Contando:'
        for(var i = inc;i<=fim;){
            emj.innerHTML += `${i} &#x1F449; `
            i += pas
        }
        emj.innerHTML += `&#x1F3C1`
        f++
    }
}