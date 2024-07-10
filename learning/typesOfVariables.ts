//------------------------------------------------

//Type of Variables

//number

let num1: number = 10;

//String

let myName: string = 'Thomas';

//boolean

let learningTypeScript: boolean = true;

//undefined - zmienna jest stworzona 
//ale nie jest przypisania do żadnego typu

let u: undefined = undefined 

//null - to jest przypisana wartość i może być 
//prezentowany jako bez wartości (no value)

let n: null = null

let y;
console.log(y);

console.log(n);

//null i undefined are sub types i mogą być przypisane
//do boolean, number i string

//Arrays

let list1: number[] = [1,2,3]
let list2: Array<number> = [1,2,3]

console.log(list1[1])

//Tuple - dla wartości stały ale innych typów

let tuple1: [number,string];
tuple1 = [10,'hello'];
// tuple1 = ['hello', 10]; error
console.log(tuple1[1].substring(1))

//Enum - jest ponumerwony jak tabela ale możemy 
//przypisać im pozycje według uznania

enum color {Blue=4, Red=7, Green=10 }
// let c: color = color.Green;
// console.log(c)
let colorName: String = color[7];
console.log(colorName)

//Unknown - kiedy potrzebuje zmiennej ale jeszcze nie wiemy
//jakie dane będzie przechowywać.
//Nie da rady też stworzyć funkcji ani używać metod

// let notSure: unknown = 4;
let notSure: unknown;
console.log(notSure)

//nie da się 
// notSure()
// notSure.toUpperCase()

//any - tutaj możemy przypisywać różne wartości
//możemy też tworzyć funkcje i korzystać z metod.

let anyValue: any;

anyValue = 10;
anyValue = 'hello';
anyValue = true;

// anyValue()
// anyValue.toUpperCase()

//void - nic nie zwraca z funkcji 

function myFun(): void {
    console.log('message')
    //nie ma return w takiej funkcji 
}

myFun()
//------------------------------------------------

//Union of Types

//1. Wiele typów do tej samej zmiennej
let peopleAllowed: number|boolean;
peopleAllowed = 10;
peopleAllowed = false;
