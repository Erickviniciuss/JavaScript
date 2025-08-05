function registrar(){
    i=0
    nome = document.getElementById('nome')
    cpf = document.getElementById('cpf')
    rg = document.getElementById('rg')
    tel = document.getElementById('tel')
    cep = document.getElementById('cep')
    h3 = document.querySelector('section > h3')
    if(nome.value.length == 0){
        nome.style.border = '1px groove red'
    }else{
        nome.style.border = '1px groove black'
    }
    if(cpf.value.length == 0 || cpf.value.length > 11){
        cpf.style.border = '1px groove red'
        cpf.style.color = 'red'
    }else{
        cpf.style.border = '1px groove black'
        cpf.style.color = 'black'
    }
    if(rg.value.length == 0 || rg.value.length > 7){
        rg.style.border = '1px groove red'
        rg.style.color = 'red'
    }else{
        rg.style.border = '1px groove black'
        rg.style.color = 'black'
    }
    if(tel.value.length == 0){
        tel.style.border = '1px groove red'
    }else{
        tel.style.border = '1px groove black'
    }
    if(cep.value.length == 0 || cep.value.length > 8){
        cep.style.border = '1px groove red'
        cep.style.color = 'red'
    }else{
        cep.style.border = '1px groove black'
        cep.style.color = 'black'
    }
    console.log(nome)
}

function registenter(){
    console.log("ok")
}