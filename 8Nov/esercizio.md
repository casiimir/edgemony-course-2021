### 1. Aprite la pagina HTML più carina che avete creato fin'ora e aggiunge una MODALE

che appaia 10 secondi dopo aver caricato il sito. La modale presenta due bottoni,
uno che la chiude e uno che non fa nulla.

### 2. Sulla base dell'oggetto `solarSystem` visto a lezione, creare delle funzioni che:

- convertano il valore della chiave `name` in Italiano.
  Per esempio, Saturn diverrà Saturno.

- considerato che il diametro è il raggio per due volte,
  scrivere una funzione `planetDiameter` che ne ritorni il diametro.
  Usate come riferimento le prime arrow function viste a lezione...

### AVANZATO

sulla base dell'esercizio della modale, il bottone che prima non faceva nulla
adesso deve ripulire tutto quello che sta sotto alla modale, così da lasciare
uno spazio bianco.
La modale di prima si chiude.

             Nella schermata bianca, dopo 5 secondi comparirà un'altra modale, che avvisa
             l'utente di non aver accettato la politica per accedere al sito e che (in via del tutto scherzosa)
             una equipe di scimmie assassine usciranno fuori dal monitor.

             Dopo 5 secondi dall'avviso, ogni singolo nome delle scimmie (e i relativi AKA), comparirà a centro dello schermo.
             Ad intervalli, il nome cambia. In modo da far spaventare ancora di più l'utente.

             Requisiti:
                - qualunque listener o timeout deve essere ripulito, il core (browser) di JS non deve essere
                  compromesso in alcun modo. (tutto deve scorrere fluidissimo, come sempre!)

                - (mi sto girando a terra dalle risate... buon divertimento, :lol)

```javascript
// La lista delle scimmie assassine:
const monkeysEquipe = [
  { name: "John", aka: "lo spaventa passeri", surname: "Ross" },
  { name: "Ector", aka: "il corsaro", surname: "Mauss" },
  { name: "Franco", aka: "ciccio bello", surname: "La croix" },
  { name: "Mika", aka: "la regina del male", surname: "Peretti" },
  { name: "Lucy", aka: "il male", surname: "sconosciuto" },
];
```
