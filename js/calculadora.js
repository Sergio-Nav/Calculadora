{
    function Principio(){
        let num1 = prompt("Introduce el primer numero");
        let num2 = prompt("Introduce el segundo numero");

        Resta(num1,num2);
    }
    function Resta(num1,num2){
        let res = num1 - num2;
        console.log("Resta: "+ res);
    }
}