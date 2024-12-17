function search<T>(data:T[], item:T):T|undefined{
    return data.find(value=>value===item);
}

let userID:Array<number>=[1,2,3,4,5];
let userNameList:Array<string>=["Mubassam","skills","career"];

let resIds=search(userID,5);
let resNames=search(userNameList,"skills");


console.log(resIds);
console.log(resNames);
