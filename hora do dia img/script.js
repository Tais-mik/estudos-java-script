function carregar() {
var msg= window.document.getElementById('msg')
var img= window.document.getElementById('imagem')
var data= new Date()
var hora= data.getHours()
var minut=data.getMinutes()

 if (hora>=0 && hora<12){
   img.src='fotomanha.png'
   msg.innerHTML='agora são '+hora+':'+minut+'<br>Tenha um ótimo dia!!'
   document.body.style.background='#dc7ce5'
} else if (hora>=12 && hora<18){
    img.src='fototarde.png'
    msg.innerHTML='agora são '+hora+':'+minut+'<br>Tenha uma ótima tarde!!'
    document.body.style.background='#df9760'
}else {
    img.src='fotonoite.png'
    msg.innerHTML='agora são '+hora+':'+minut+'<br>Tenha uma ótima noite!!'
    document.body.style.background='#515154'
}
}