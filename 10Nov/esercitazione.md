1. Sulla base della lezione di oggi, completare la modale (date un aspetto più carino anche), rispettando i seguenti punti:
   l'elemento `<h1>Buongiorno [NOME]</h1>` dovrà essere gestito totalemente in Javascript quindi
   `userPage.firstElementChild.textContent = 'Buongiorno ${username}';`
   non dovrà contenere la parola 'Buongiorno' (quindi il Buongiorno lo prende solo da HTML non va aggiunto in JS!)

2. Riprendendo la vostra calcolatrice passata (scegliete voi la più adatta, non importa se la prima o una delle successive):
   implementate `try` e `catch` che sollevino un'eccezzione (`throw`) se:
   1. il numero passato come parametro è uno solo => errore: `Hai passato un solo valore`
   2. non è stato passato alcun parametro => errore: `Nessun parametro passato alla funzione`

#### AVANZATO

Per i più audaci, sempre sulla base dell'ex. della calcolatrice, creare una sorta di log che tenga conto dell'ultima operazione svolta e che la immagazzini nel local storage. Attenzione, con `l'ultima operazione` non si intende il risultato, ma proprio l'operazione, ex: `35 + 22 + 11`
Infine, un ulteriore bottone `Recap`, al suo click, ritornerà (come alert) l'operazione e il suo risultato.
(Grazie per lo spunto :)
