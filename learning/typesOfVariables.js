//------------------------------------------------
//Type of Variables
//number
var num1 = 10;
//String
var myName = 'Thomas';
//boolean
var learningTypeScript = true;
//undefined - zmienna jest stworzona 
//ale nie jest przypisania do żadnego typu
var u = undefined;
//null - to jest przypisana wartość i może być 
//prezentowany jako bez wartości (no value)
var n = null;
var y;
console.log(y);
console.log(n);
//null i undefined are sub types i mogą być przypisane
//do boolean, number i string
//Arrays
var list1 = [1, 2, 3];
var list2 = [1, 2, 3];
console.log(list1[1]);
//Tuple - dla wartości stały ale innych typów
var tuple1;
tuple1 = [10, 'hello'];
// tuple1 = ['hello', 10]; error
console.log(tuple1[1].substring(1));
//Enum - jest ponumerwony jak tabela ale możemy 
//przypisać im pozycje według uznania
var color;
(function (color) {
    color[color["Blue"] = 4] = "Blue";
    color[color["Red"] = 7] = "Red";
    color[color["Green"] = 10] = "Green";
})(color || (color = {}));
// let c: color = color.Green;
// console.log(c)
var colorName = color[7];
console.log(colorName);
//Unknown - kiedy potrzebuje zmiennej ale jeszcze nie wiemy
//jakie dane będzie przechowywać.
//Nie da rady też stworzyć funkcji ani używać metod
// let notSure: unknown = 4;
var notSure;
console.log(notSure);
//nie da się 
// notSure()
// notSure.toUpperCase()
//any - tutaj możemy przypisywać różne wartości
//możemy też tworzyć funkcje i korzystać z metod.
var anyValue;
anyValue = 10;
anyValue = 'hello';
anyValue = true;
// anyValue()
// anyValue.toUpperCase()
//void - nic nie zwraca z funkcji 
function myFun() {
    console.log('message');
    //nie ma return w takiej funkcji 
}
myFun();
//------------------------------------------------
//Union of Types
//1. Wiele typów do tej samej zmiennej
var peopleAllowed;
peopleAllowed = 10;
peopleAllowed = false;
