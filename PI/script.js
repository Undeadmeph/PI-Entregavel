var count = 1

setInterval( function(){
    nextImage()
}, 5000)

function nextImage(){
    count++;
    if(count>3){
        count = 1;
    }

    document.getElementById("radio"+count).checked = true;
}


function validateForm(){
    console.log("validando form")
    var name = document.getElementById ("nome").value
    console.log(name.length)
    if(name.length <= 3){
        alert("Nome Invalido") 
        return

    } 

    var sobrenome = document.getElementById ("sobrenome").value
    if(sobrenome.length <=3){
        alert("Sobrenome Invalido") 
        return
    }
    var email = document.getElementById ("email").value
    if(email.length <=3 && email.includes("@")){
        alert("e-mail invalido") 
        return
    } 


    var telefone = document.getElementById ("telefone").value
    if(telefone.length<=3){
        alert("Telefone Invalido") 
        return
    } 
    var finalForm = "Nome = " + name
    finalForm += "\nSobrenome = " + sobrenome 
    finalForm += "\nEmail = " + email 
    finalForm += "\nTelefone = " + telefone 

    alert (finalForm)

}


   




