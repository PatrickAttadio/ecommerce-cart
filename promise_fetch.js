// Se utilizzo Javascript all'interno di un browser non devo avere nessun import e
// l'oggetto "fetch" è già disponibile

const promiseFetch = fetch(
      'http://www.omdbapi.com/?i=tt3896198&apikey=4fb63998'
);

promiseFetch
      .then(
            (res) => {
                  if (res) return res.json(); // Se res esiste ritornami il json 
            }
      )
      .then((resjson) => {
            console.info(resjson); // STAMPA TUTTO IL DB
            console.info(resjson.Title);
            console.info(resjson.Genre);
            console.info(resjson.Awards);
      })
      .catch((err) => {
            console.error(err);
      })
      .finally(() => {
            console.log("Viene sempre eseguito anche in caso di errore alla fine");
      });
      console.log("Fuori dal catch: Viene sempre eseguito anche in caso di errore alla fine");
      console.log("Fine");