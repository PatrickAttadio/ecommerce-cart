      /**
       * 1) Permettere di inserire nel carrello dei prodotti. "Add to cart"
       * 2) Aggiungiamo 3 prodotti nel carrello 
       * 3) Calcolo del totale da pagare "Get amount"
       * 4) Calcolo del totale quantità prodotti "Get total qty"
       * 5) Funzionanilità che svuota il carrello "Reset cart"
       */

      /**
       * Permettere di inserire nel carrello dei prodotti "Add to cart"
       * Dichiarazione della funzione
       * Input: prodotti
       */
      export const addToCart = (_cart, prod) => {
            try {
                  if(prod.qty === 0) throw new Error(`Error prod. ${prod.name}: Quantity must be greater than 0`);
                  if(prod.price <= 0) throw new Error(`Error prod. ${prod.name}: Price must be greater than 0`);
                  _cart.push(prod);
            } catch (error) {
                  console.log(error.message);
            }
            return _cart;
      }

      /** 
       * 2) Aggiungiamo 3 prodotti differenti nel carrello
       * Input: Il carrello
       * Output: carrello 
      */
      export const add3Product = (_cart) => {
            let newCart;
            newCart = addToCart(_cart, { 
                  name: 'iPhone', 
                  price: 1500, 
                  qty: 0 
            });
            newCart = addToCart(_cart, { 
                  name: 'Galaxy S24', 
                  price: 1000, 
                  qty: 1 
            });
            newCart = addToCart(_cart, { 
                  name: 'Pixel 8',
                  price: 700,
                  qty: 3 
            });
            return newCart;
      };

      // 3) Calcolo del totale da pagare "Get amount"
      export const getAmount = (_cart) => {
            let amount = _cart.reduce((accumulatore, numero)=>{
                  return accumulatore + numero.price * numero.qty;
            }, 0);
            return amount;
      };

      // 4) Calcolo totale delle qt.à
      export const getQuantity = (_cart) => {
            let quantity = _cart.reduce((accumulatore, numero)=>{
                  return accumulatore + numero.qty;
            }, 0);
            return quantity;
      };

      // 5.1) Opzione 1: svuota il carrello
      export const deleteCart1 = (_cart) => {
            _cart.length = 0;
            return _cart;
      };
      // 5.2) Opzione 2: svuota il carrello
      export const deleteCart2 = (_cart) => {
            _cart.splice(0, _cart.length);
            return _cart;
      };
      // 5.3) Opzione 2: svuota il carrello
      export const deleteCart3 = (_cart) => {
            for (let i = _cart.length; i > 0; i--) {
                  _cart.pop();
            }
            return _cart;
      };