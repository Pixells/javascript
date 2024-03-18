function contar(){
    let ini = window.document.getElementById('iinicio')
    let fim = window.document.getElementById('ifim')
    let passo = window.document.getElementById('ipasso')
    let res = window.document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        res.innerHTML = `Impossível contar!`
        //window.alert('[ERRO] Faltam dados!')
    } else {
        res.innerHTML = 'Contando: '
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            window.alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }
        if (i < f) {
            for(let c = i; c <= f; c += p) {
                //contagem crescente
                res.innerHTML += `${c} \u{1F449}`
            }
        }else {
            //contagem regressiva
            for (c = i; c >= f; c -= p) {
                res.innerText += ` ${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
        
    }
}