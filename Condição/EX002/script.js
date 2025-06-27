function resultado(){
    console.log('ok')
    var data = new Date()
    var ano_a = data.getFullYear()
    var ano_n = document.querySelector('#txtano')
    if(ano_n.value.length == 0){
        ano_n.style.border = '1px groove red'
    }else{
        if(ano_n.value > ano_a){
            ano_n.style.border = '1px groove red'
            ano_n.style.color = 'red'
        }else{
            ano_n.style.border = '1px groove black'
            ano_n.style.color = 'black'
            var ano_n = Number(ano_n.value)
            res = ano_a - ano_n
            var result = document.querySelector('#res')
            var sex = document.getElementsByName('txtsex')
            var gen = ''
            if(sex[0].checked){
                gen = 'Homem'
                result.innerHTML = `Vc é um ${gen} de ${res} anos`
            }else{
                gen = 'Mulher'
                result.innerHTML = `Vc é uma ${gen} de ${res} anos`
            }
            console.log(sex)
            result.style.textAlign = 'center'
            
        }
    }
}

