var hora = Number(prompt("Olá, digite a hora do dia"))
var res = document.getElementById('res')
var img = document.getElementById('imagem')

if (hora >= 0 && hora <= 12){
    img.setAttribute('src', './imagens/manha.jpg')
    document.body.style.background = '#FFDEAD'
}
else if( hora > 12 && hora <= 18){
    img.setAttribute('src', './imagens/tarde.jpg')
    document.body.style.background = '#D2691E'
}
else if (hora >= 19 ){
    img.setAttribute('src', './imagens/noite.jpg')
    document.body.style.background = '#4F4F4F'
}
res.innerHTML = `São ${hora} horas.`
res.appendChild(img)
