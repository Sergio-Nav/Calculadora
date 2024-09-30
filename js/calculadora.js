{
    function Principio(){
        let num1 = prompt("Introduce el primer numero");
        let num2 = prompt("Introduce el segundo numero");

        Suma(num1,num2);
    }
    function Suma(num1,num2){
        let res = num1 + num2;
        console.log("Suma: "+ res);
    }
}