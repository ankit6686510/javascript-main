//Immediate Invoked Function Expression(IIFE)
 (function chai(){
    //names iife
    console.log(`DB connected`);
 })();

 ((name)=>{
    console.log(`DB connected two ${name}`);
 })(`ankit`)