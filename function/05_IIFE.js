//IIFE => IMMEDIATELY INVOKED FUNCTION EXPRESSION

(function chai(){
    console.log(`DB CONNECTED`);
})();

/* JO FUNCTION IMMEDIATELY INVOKED HO JAYE X
   GLOBAL SCOPE K SOLUTION S PROBLEM HOTI H KAI BAAR US POLUTION KO HATANE K LIYE
   ISKA USE KIYA 
   They are typically used to create a local scope for variables to prevent them from polluting the global scope.*/

( () => {
    console.log("DB CONNECTED TWO");
} )();

((name) =>{
    console.log(`His name is ${name}.`)
} )("Dalpat");