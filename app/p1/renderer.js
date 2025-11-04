let nome1 = "Guesst";
function pegarNome1(){ 
     nome1 = document.getElementById("nome1").value;
    return nome1;
}
function enviarMsg1(){
 let msgenv = document.getElementById("msg1").value;
  document.getElementById("msgrecebida1").innerHTML += nome1+`: ${msgenv}<br> `;
}
