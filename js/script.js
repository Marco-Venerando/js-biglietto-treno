// Chiede i dati all'utente
const km = parseFloat(prompt("Quanti chilometri vuoi percorrere?"));
const age = parseInt(prompt("Quanti anni hai?"));
console.log(km);
console.log(age);

// Prezzo per km
const pricePerKm = 0.21;

// Calcolo prezzo base
let ticketPrice = km * pricePerKm;
console.log(ticketPrice);

// Sconti

const basePrice = ticketPrice;

if (age < 18) {
  ticketPrice *= 0.8; // 20% di sconto
} else if (age >= 65) {
  ticketPrice *= 0.6; // 40% di sconto
}

// extra per vedere quanto ho scontato nella console
let discount = basePrice - ticketPrice;

discount = discount.toFixed(2);

console.log(discount);

// Arrotonda a 2 decimali
ticketPrice = ticketPrice.toFixed(2);

// Risultato
alert(`Il prezzo del biglietto è €${ticketPrice}`);
console.log(`Il prezzo del biglietto è €${ticketPrice}`);
