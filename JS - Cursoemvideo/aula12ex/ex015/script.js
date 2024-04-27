function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('itxtano')
    var res = window.document.getElementById('res')

    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }
    else {
        var fsex = window.document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src', './imagens/bebem.jpeg')
            } else if (idade < 21){
                //Jovem
                img.setAttribute('src', './imagens/jovemm.jpeg')
            } else if (idade < 50){
                //adulto
                img.setAttribute('src', './imagens/adultom.jpeg')
            } else {
                //idoso
                img.setAttribute('src', './imagens/idosom.jpeg')
            }
        }
        else {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src', './imagens/bebef.jpeg')
            } else if (idade < 21){
                //Jovem
                img.setAttribute('src', './imagens/jovemf.jpeg')
            } else if (idade < 50){
                //adulto
                img.setAttribute('src', './imagens/adultof.jpeg')
            } else {
                //idoso
                img.setAttribute('src', './imagens/idosaf.jpeg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}