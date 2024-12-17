class Animal{
    name:string;
    constructor(name:string){
        this.name=name;
    }
    speak():void{
        console.log(`${this.name} makes a noise.`);
    }
}

const animal=new Animal("Dog");
animal.speak();


class Dog extends Animal{
    constructor(name:string){
        super(name);
    }

    speak(): void {
        console.log(`${this.name} barks.`);
    }
}

const dog= new Dog("Rex");
dog.speak();