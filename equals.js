let stringNumber = "42";
let actualNumber = 42;

// Utilizzando == 
if(stringNumber == actualNumber){
      console.log("La coercizione di tipo converte la stringa a numero e sono uguali.");
}
else {
      console.log("La coercizione di tipo li rende diversi.");
}

// Utilizzando ===
if(stringNumber === actualNumber){
      console.log("La rigorosa uguaglianza considera il tipo, quindi sono diversi.");
}
else {
      console.log("La rigorosa uguaglianza tiene conto del tipo e sono diversi.");
}