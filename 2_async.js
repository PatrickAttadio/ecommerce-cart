console.log('Starting app'); // 1)

const callbackPerSetTimeout = () => {
      setTimeout(() => console.log('Inside of callbackPerSetTimeout'), 5000) // 6) --> 20000
      console.log('Inside of call back'); // 5) --> 15000
}

// Se va a buon fine chiama callbackPerSetTimeout
setTimeout(callbackPerSetTimeout, 15000); // setTimeout è una funzione asincrona

setTimeout(
      () => {
            setTimeout(() => {
                  console.log('First setTimeout'); // 4) --> 5000+2000
            }, 2000);
            console.log('Second setTimeout'); // 3) --> 5000
      }, 5000
);
console.log('Finishing up'); // 2)