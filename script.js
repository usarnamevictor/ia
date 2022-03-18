function carregar(){
    var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()

msg.innerHTML = `Agora são ${hora} horas. <br><br> Bom dia Diana`
if(hora >= 0 && hora < 12) {
    //Bom dia
    img.src = 'fotomanha.png'
    document.body.style.background = '#e2cd9f'
}else if (hora >= 12 && hora <= 18) {
    msg.innerHTML = `Agora são ${hora} horas. <br><br> Boa Tarde Diana`
    // Boa Tarde!
    img.src =  'fototarde.png'
    document.body.style.background = '#b9846f'
}else{
    // Boa Noite!
    msg.innerHTML = `Agora são ${hora} horas. <br><br> Boa Noite Diana`
    img.src = 'fotonoite.png'
    document.body.style.background = '#515154'
}
}


