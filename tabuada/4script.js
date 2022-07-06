function contar(){
    var ini=window.document.getElementById('txti')
    var fim=window.document.getElementById('txtf')
    var passo=window.document.getElementById('txtp')
    var resp=window.document.getElementById('resp')
    
   
    if(ini.Value==0 || fim.Value ==0 || passo.value==0) {
        window.alert('[ERRO]  verifique seu dados e tente novamente!')
    }
    else {
        var i=1
        var f=22
        var p=2
        for (c=i; c<= f; c+=p) {
           
         resp.innerHTML ='contando ..'+c
        }
       
    }
    }
 
    
   