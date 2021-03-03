var cognomi = ["Bianchi", "Rossi", "Duzioni", "Balsano", "Verdi"];
var cognomeUtente;

cognomeUtente = prompt("Inserisci il tuo cognome");
cognomeUtente = cognomeUtente.charAt(0).toUpperCase() + cognomeUtente.slice(1);
cognomi.push(cognomeUtente);

for(var i = 0; i < cognomi.length; i++){
  cognomi.sort();
  document.getElementById("cognomi").innerHTML += "<li>" + cognomi[i] + "</li>";
}
