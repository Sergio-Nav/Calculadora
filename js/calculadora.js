{
    function Principio(){
        let num1 = prompt("Introduce el primer numero");
        let num2 = prompt("Introduce el segundo numero");

        Mult(num1,num2);
    }
    function Mult(num1,num2){
        let res = num1 * num2;
        console.log("Multiplicación: "+ res);
    }
}