

      
    function enviar(){
        var sexo=window.document.getElementsByName('sex')
        var respt=window.document.getElementById('resp')
        var data= new Date()
        var ano= data.getFullYear()
        var nasci=window.document.getElementById('anonc')
        var img= window.document.getElementById('imagem')
        var corse=window.document.getElementById('corfun')
        var cort=window.document.getElementById('cortit')
        var idade=ano-Number(nasci.value)

           if(Number(anonc.value)>=ano){
            window.alert('[ERRO]  verifique seu dados e tente novamente!')
              }
            else if(idade<6&&idade>0&&sexo[0].checked){
              respt.innerHTML='Sua idade é '+idade+' anos <br>Seu sexo é masculino e você é um homem bêbê:<p>'
             img.src='homembebe.png'
             corse.style.background='#ffe2c0'
             document.body.style.background='#ffcc91'
             cort.style.background='#ffe2c0'
                }
              else if(idade>6&&idade<18&&sexo[0].checked){
                respt.innerHTML='Sua idade é '+idade+' anos <br>Seu sexo é masculino e você é um homem jovem:<p>'   
               img.src='homemjovem.png'
               corse.style.background='#68a47e'
               document.body.style.background='#3b915c'
               cort.style.background='#68a47e'
                  }
                else if(idade>18&&idade<60&&sexo[0].checked){
                  respt.innerHTML='Sua idade é '+idade+' anos <br>Seu sexo é masculino e você é um homem adulto:<p>'
                 img.src='homemadulto1.png'
                 corse.style.background='#ffd082'
                 document.body.style.background='#eb8c36'
                 cort.style.background='#ffd082'
                    }
                  else if(idade>60&&sexo[0].checked) {
                    respt.innerHTML='Sua idade é '+idade+' anos <br>Seu sexo é masculino e você é um homem idoso:<p>'
                   img.src='homemidoso.png'
                   corse.style.background='#ef8d8d'
                   document.body.style.background='#f54545'
                   cort.style.background='#ef8d8d'
                      }
                    else if(idade<6&&sexo[1].checked){
                      respt.innerHTML='Sua idade é '+idade+' anos <br>Seu sexo é feminino e você é uma mulher bêbê:<p>'
                     img.src='mulherbebe.png'
                     corse.style.background='#bbbbbb'
                     document.body.style.background='#6a6778'
                     cort.style.background='#bbbbbb'
                        }
                      else if(idade>6&&idade<18&&sexo[1].checked){
                        respt.innerHTML='Sua idade é '+idade+' anos <br>Seu sexo é feminino e você é uma mulher jovem:<p>'
                       img.src='mulherjovem.png'
                       corse.style.background='#c0995f'
                       document.body.style.background='#866f4d'
                       cort.style.background='#c0995f'
                          }
                        else if(idade>18&&idade<60&&sexo[1].checked){
                          respt.innerHTML='Sua idade é '+idade+' anos <br>Seu sexo é feminino e você é uma mulher adulta:<p>'
                         img.src='mulheradulta.png'
                         corse.style.background='#a8967b'
                         document.body.style.background='#947f5d'
                         cort.style.background='#a8967b'
                            }
                          else if(idade>60&&sexo[1].checked) {
                            respt.innerHTML='Sua idade é '+idade+' anos <br>Seu sexo é feminino e você é uma mulher idosa:<p>'
                           img.src='mulheridosa.png'
                           corse.style.background ='#bbe2e2'
                           document.body.style.background='#54adad'
                           cort.style.background='#bbe2e2'
                                }
    }

        
       
    