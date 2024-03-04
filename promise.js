const myPromise = new Promise(
      (resolve) => {
            setTimeout(() => {
                  console.log('Inside of myPromise');
                  resolve("Ciao");
            }, 1000);
      }
);

myPromise.then((value) => {
      // Recupero l'ordine
      console.log(value); // Stampa "Ciao"
      return value+" Patrick";
})
.then((value) => {
      // Recupero il tracciamnto spedizione
      console.log(value); // Stampa "pippo"
});