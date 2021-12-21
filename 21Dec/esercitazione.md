Aggiungere al progetto del social network un nuovo componente <Banner /> che accetta due props:

1. il colore del banner
2. il testo del banner
   Il componente deve essere richiamato quando aggiungiamo un nuovo post, e il testo dovrà pertanto riportare: 'Post aggiunto' e quando un post viene cancellato, e quindi 'post cancellato'.
   Differenziare i due comportamenti in base al `background-color`, magari il rosso per il comportamento delete e celeste per l'aggiunta (alla lista posts).

#### Avanzato:

Sulla base della lezione del giorno, far in modo che il rendering della pagina (relativa ai posts, quindi la Home `/`), aggiorni anche la lista dei posts se il bottone per cancellarne uno viene premuto.
Il comportamente attuale prevede, sì la cancellazione del post nel server, ma non il re-rendering. Attualmente la soluzione a questo problema è dato da un redirect in javascript: `window.location.href = "/";` (sostituire quindi questo comportamento)
