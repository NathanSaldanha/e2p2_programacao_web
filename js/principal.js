function contar(valor){         
            
            
            var cont = valor.split(" ").length - 1;
                        
            if(cont == "1" || cont == "0"){
                document.getElementById("quantidade1").value = cont + " Palavra";
            }else{
                document.getElementById("quantidade1").value = cont + " Palavras";
            }
        }