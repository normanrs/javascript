class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName, this.lastName = lastName
    }

    fullName () {
        return `${this.firstName} ${this.lastName}`;
    }

    get name () {
        return this.fullName();
    }
}
const john = new Person('John', 'Doe');
john.age = 23;
console.log(john);
console.log(john.fullName());
console.log(john.name)
