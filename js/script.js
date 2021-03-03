var cognomi = ["Bianchi", "Rossi", "Duzioni", "Balsano", "Verdi"];
var cognomeUtente;
var volere = true;

// RICHIESTA E CONTROLLO ALL'UTENTE SE VUOLE AGGIUNGERE UN NUOVO COGNOME
do{
  var scegli = prompt("Vuoi inserire un altro nome in lista? Rispondi con 's' se vuoi continuare ad aggiungere cognomi alla lista");
  if(scegli.toLowerCase() == "s"){
    cognomeUtente = prompt("Inserisci il tuo cognome");
    cognomeUtente = cognomeUtente.charAt(0).toUpperCase() + cognomeUtente.slice(1);
    cognomi.push(cognomeUtente);
  }else {
    volere = false;
  }
}while(volere == true)

for(var i = 0; i < cognomi.length; i++){
  cognomi.sort();
  document.getElementById("cognomi").innerHTML += "<li>Questo cognome si trova alla " + (i + 1) + "° posizione: " + cognomi[i] + "</li>";
}
