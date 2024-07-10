class Employee {

    public employeeName: string;

    constructor(name){
        this.employeeName = name;
    }

    hello(){
        console.log(`hello ${this.employeeName}`)
    }
}

let emp1 = new Employee('Thomas');
console.log(emp1.employeeName)
emp1.hello();

//inheritance - dziedziczenie
class Manager extends Employee{
    constructor(name){
        super(name)
    }

    greet(){
        console.log(`Hello from manager ${this.employeeName}`)
    }
}

let manager1 = new Manager('Jhon');
console.log(manager1.employeeName);
manager1.hello();
manager1.greet();