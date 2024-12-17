class MathUtils{
    static PI:number=3.1415;
    static circleArea(redius:number):number{
        return MathUtils.PI*redius*redius;
    }
}


console.log(MathUtils.PI);
console.log(MathUtils.circleArea(5));




// Enum


enum Status{
    pending="PENDING",
    Inprogress="IN_PROGRESS",
    Completed="COMPLETED"
}

let currentStatus:Status=Status.Inprogress;
console.log(currentStatus);
