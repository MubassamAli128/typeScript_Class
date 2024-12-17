interface User{
    name:string;
    age:number;
    welcome():string;
}

const user:User={
    name:"Mubassam",
    age:19,
    welcome(){
        return `Welcom, ${this.name}.`;
    }
};


console.log(user.welcome());
