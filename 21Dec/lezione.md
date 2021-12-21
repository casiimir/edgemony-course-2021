### Lo stato cambia sempre quando cambiano props o states

quindi il rendering viene rieseguito. Il rendering è tutto ciò che contiene il `return ()`.
(attenzione, intendo il codice JSX)

### Abbiamo tre approcci per lo userEffect:

- 1: senza dipendenze, e senza parentesi quadre ===> esegue il contenuto di useEffect ad ogni render della pagina
- 2: con le sole parentesi quadre, ma vuote ===> esegue il contenuto di useEffect solo una volta
- 3: specificandone le dipendenze, tra le parentsi quadre ===> esegute il contenuto di useEffect ogni volta che quelle dipendenze cambiano
