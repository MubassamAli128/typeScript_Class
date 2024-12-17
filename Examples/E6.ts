function ADD(a:number,b:number):number{
    return a+b;
}

console.log(ADD(2,3));





type Add=(a:number, b:number)=> number

let add: Add=(a,b)=>{
    return a+b;
}







type Sum=(a:number,b:number,c?:number)=>number

let checkDate:Sum=(a,b,c=0)=>{
    return a+b+c;
}





function sum(...items:number[]){
    return items.reduce((acc,curr)=>acc+curr,0);
}

console.log(sum(2,3,4));
