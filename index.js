import { add3Product, getAmount, getQuantity, deleteCart1 } from "./cart/cart.js";
/**
 * 1) Permettere di inserire nel carrello dei prodotti. "Add to cart"
 * 2) Aggiungiamo 3 prodotti nel carrello 
 * 3) Calcolo del totale da pagare "Get amount"
 * 4) Calcolo del totale quantità prodotti "Get total qty"
 * 5) Funzionanilità che svuota il carrello "Reset cart"
*/
let cart = []; // Carrello globale

console.log(add3Product(cart));
console.log(getAmount(cart));
console.log(getQuantity(cart));
console.log(deleteCart1(cart));