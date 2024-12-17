interface Person{
    name:string;
    age:number;
}

interface Employee extends Person{
    employeeId:number;
    department:string;
}

const employee:Employee={
    name:"Mubassam",
    age:19,
    employeeId:101,
    department:"IT"
}

console.log(employee);
