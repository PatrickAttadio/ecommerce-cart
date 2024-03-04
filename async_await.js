// Dichiaro una funzione asincrona (cioè che contiene operazioni asincrone) attraverso la keywords "async"
// La funzione essendo asincrona permette di utilizzare la keyword "await" quando vengono invocate operazioni
// asincrone.
const makeRequest = async () => {
      try {
        // fetch ritorna una Promise e con "await" indico a Javascript di attendere la fine dell'esecuzione
        // e cioè il .resolve() della Promise prima di andare all'istruzione successiva.
        
        // La parola await fa in modo che la riga console.log(await data.json()); venga eseguita solo se 
      // torna una risposta
      const data = await fetch ('http://jsonplaceholder.typicode.com/posts');
     
      // Il metodo .json() ritorna una promise e usando "await" Javascript aspetterà che l'operazione asincrona
      // sia conclusa.
      const jsonResult = await data.json();
      console.log (jsonResult.length);
      } catch (err) {
            console.log (err);
      }
      console.log('Termine della funzione');
};

// makeRequest è dichiarata "async" e quindi restituisce una Promise.
makeRequest();
console.log ('Fine esecuzione');