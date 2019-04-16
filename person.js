class Person{
    constructor(age,name){
        this.age =age;
        this.name=name;

    }

    saySomething(){
        console.log(`My name is ${this.name} and my age is ${this.age}`);
    }
}

module.exports = Person;