//functions and Interface
//****Functions ****
function hello() {
    console.log('hello');
}
hello();
//teraz num2 jest opcjonalne
function sum(num1, num2) {
    if (num2 === void 0) { num2 = 0; }
    return num1 + num2;
}
console.log(sum(5, 5));
function getEmployeeDetails(empDetails) {
    console.log(empDetails.firstName);
    console.log(empDetails.lastName);
    console.log(empDetails.ID);
}
getEmployeeDetails({
    firstName: 'Thomas',
    lastName: 'Thunder',
    ID: 1
});
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
