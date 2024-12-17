let username:number|string;
username=123;
console.log(username);
username="ABC";
console.log(username);





interface Person{
    name:string;
}

interface Employee{
    batchID:number;
}

type User=Person&Employee;
let Username:User;
Username={
    batchID:123,
    name:"ABC"
}
console.log(Username);





function printId(id:number|string){
    if(typeof id ==="string"){
        console.log(`ID is a string: ${id.toLocaleLowerCase()}`);
    }else{
        console.log(`ID is a number: ${id}`);
    }
}
printId(101);
printId("abc");