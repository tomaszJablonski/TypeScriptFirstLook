//functions and Interface

//****Functions ****

function hello(){
    console.log('hello')
}

hello()

//teraz num2 jest opcjonalne
function sum(num1: number, num2: number = 0): number{
    return num1 + num2
}

console.log(sum(5,5));

//****Interface ****

interface employee {
    firstName: string,
    lastName: string,
    ID: number
}
function getEmployeeDetails(empDetails: employee){
    console.log(empDetails.firstName);
    console.log(empDetails.lastName);
    console.log(empDetails.ID);
}

getEmployeeDetails({
    firstName: 'Thomas',
    lastName: 'Thunder',
    ID: 1
})

// function getEmployeeDetails(empDetails: {firstName: string, lastName: string, ID: number}){
//     console.log(empDetails.firstName);
//     console.log(empDetails.lastName);
//     console.log(empDetails.ID);
// }

// getEmployeeDetails({
//     firstName: 'Thomas',
//     lastName: 'Thunder',
//     ID: 1
// })
