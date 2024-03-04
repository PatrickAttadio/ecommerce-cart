/**
 * 1) Permettere di inserire nel carrello dei prodotti. "Add to cart"
 * 2) Aggiungiamo 3 prodotti nel carrello 
 * 3) Calcolo del totale da pagare "Get amount"
 * 4) Calcolo del totale quantità prodotti "Get total qty"
 * 5) Funzionanilità che svuota il carrello "Reset cart"
 */

let cart = []; // Carrello globale

/**
 * Permettere di inserire nel carrello dei prodotti "Add to cart"
 * Dichiarazione della funzione
 * Input: prodotti
 */
const addToCart = (aCart, prod) => {
      aCart.push(prod);
      return aCart;
}

/** 
 * 2) Aggiungiamo 3 prodotti differenti nel carrello
 * Input: Il carrello
 * Output: carrello 
*/
const add3Product = (aCart) => {
      let newCart = addToCart(aCart, {
            name: 'iPhone',
            price: 1500,
            qty: 2
      });

      newCart = addToCart(cart, {
            name: 'Galaxy S24',
            price: 1000,
            qty: 1
      });

      newCart = addToCart(cart, {
            name: 'Pixel 8',
            price: 700,
            qty: 3
      });

      return newCart;
};
cart = add3Product(cart);
console.log(cart);

// 3) Calcolo del totale da pagare "Get amount"
const getAmount = (cart) => {
      let amount = cart.reduce((accumulatore, numero)=>{
            return accumulatore + numero.price * numero.qty;
      }, 0);
      return amount;
};
console.log(getAmount(cart));

// 4) Calcolo totale delle qt.à
const getQuantity = (cart) => {
      let quantity = cart.reduce((accumulatore, numero)=>{
            return accumulatore + numero.qty;
      }, 0);
      return quantity;
};
console.log(getQuantity(cart));

// 5.1) Opzione 1: svuota il carrello
const deleteCart1 = (cart) => {
      cart.length = 0;
      return cart;
};
// 5.2) Opzione 2: svuota il carrello
const deleteCart2 = (cart) => {
      cart.splice(0, cart.length);
      return cart;
};
// 5.3) Opzione 2: svuota il carrello
const deleteCart3 = (cart) => {
      for (let i = cart.length; i > 0; i--) {
            cart.pop();
      }
      return cart;
};
console.log(deleteCart1(cart));
// console.log(deleteCart2(cart));
// console.log(deleteCart3(cart));