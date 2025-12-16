# Biglietto del treno

## richiesta

Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.

Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

TIP:
per controllare che la vostra logica sui prezzi funzioni correttamente, provate a verificare quanto segue:

100km, 10 anni => prezzo corretto: €16.80
100km, 70 anni => prezzo corretto: €12.60

Buon lavoro!

## pseudo codice

### raccolta dati

-chiedo all'utente il numero di chilometri che vuole percorrere (via prompt)
-chiedo all'utente l'età del passeggero.
-trasformo l'input dell'utente in un valore numerico
-valido l'imput dell'utente

### elaborazione

-calcolo il prezzo del biglietto in base al numero di chilometri che vuole percorrere (0.21€ al km)

-calcolo lo sconto sul prezzo del biglietto in base all'eta del passeggero

-SE (l'eta del passeggero è minore di 18anni)
va applicato uno sconto del 20%

-SE (l'eta del passeggero è maggiore di 65anni)
va applicato uno sconto del 40%

-ALTRIMENTI
non applico nessuno sconto

### output

-semplifico il numero ottenuto facendo rimanere 2 decimali

-prezzo del biglietto finale
