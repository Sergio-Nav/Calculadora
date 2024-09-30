{
    function Principio(){
        let num1 = prompt("Introduce el primer numero");
        let num2 = prompt("Introduce el segundo numero");

        Suma(num1,num2);
        Resta(num1,num2);
        Mult(num1,num2);
        Dividir(num1,num2);
    }
    function Suma(num1,num2){
        //Suma modificada
        let res = num1 + num2;
        console.log("Suma: "+ res);
    }
    function Mult(num1,num2){
        let res = num1 * num2;
        console.log("Multiplicación: "+ res);
    }
    function Mult(num1,num2){
        let res = num1 * num2;
        console.log("Multiplicación: "+ res);
    }
    function Dividir(num1,num2){
        let res = num1 / num2;
        console.log("Division: "+ res);
    }
}