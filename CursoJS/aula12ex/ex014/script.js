function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()

    msg.innerHTML = `Agora são ${hora} horas e ${min} minutos.`
    
    
    if (hora >= 5 && hora < 12) {
        // BOM DIA
        img.src = './imagens/manha.jpeg'
        window.document.body.style.background = '#38A2EE'
    }
    else if (hora >= 12 && hora <= 15) {
        // BOA TARDE
        img.src = './imagens/tarde.jpeg'
        window.document.body.style.background = '#FDD468'
    }
    else if (hora >= 15 && hora <= 18) {
        // BOA TARDE2
        img.src = './imagens/tarde2.jpeg'
        window.document.body.style.background = '#BD3E3D'
    }
    else if (hora >= 18 && hora <= 23) {
        // BOA NOITE
        img.src = './imagens/noite.jpeg'
        window.document.body.style.background = '#091B1D'
    }
    else {
        // BOA MADRUGADA
        img.src = './imagens/madrugada.jpeg'
        window.document.body.style.background = '#121923'
    }
}

