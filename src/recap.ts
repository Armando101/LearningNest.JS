const myName = 'Armando';
const myAge = 12;

const sum = (a: number, b: number) => {
  return a + b;
};

sum(12, 23);

class Person {
  // age: number;
  // name: string;

  // constructor(age: number, name: string) {
  //   this.age = age;
  //   this.name = name;
  // }

  constructor(private age: number, private name: string) {}

  getSymmary() {
    return `My name is ${this.name}, I'm ${this.age}`;
  }
}

const armando = new Person(23, 'Armando');
armando.getSymmary();
