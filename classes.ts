// class declaration
class Person {
  //   name: string;
  //   age: number;

  constructor(public name: string, public age: number) {
    this.name = name;
    this.age = age;
  }

  introduction(): void {
    console.log(`Hi, I am ${this.name} and I am ${this.age} years old.`);
  }
}

const person1 = new Person("Ivan", 20);
// person1.introduction(); // Hi, I am Ivan and I am 20 years old.
person1.name;
// console.log("person1.name", person1.name);
person1.age;
person1.name = "Petar";
// console.log("person1.name", person1.name);

// readonly access modifier
class ReadonlyPersonData {
  name: string;
  readonly age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  intro(): void {
    console.log(`Hi, I am ${this.name} and I am ${this.age} years old.`);
  }
}

const person2 = new ReadonlyPersonData("Todor", 25);
console.log("person2.age", person2.age);
console.log("person2.name", person2.name);
person2.name = "Petya";
// person2.age = 20; Cannot assign to 'age' because it is a read-only property.ts(2540)

// private access modifier
class PrivatePersonData {
  private name: string;
  private age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  private displaySecretMssg(): string {
    return "This is a message from private method.";
  }

  intro(): void {
    console.log(`Hi, I am ${this.name} and I am ${this.age} years old.`);
    console.log(this.displaySecretMssg());
  }
}

const person3 = new PrivatePersonData("David", 15);
// person3.name; Property 'name' is private and only accessible within class 'PrivatePersonData'.ts(2341)
// person3.age Property 'age' is private and only accessible within class 'PrivatePersonData'.ts(2341)
// person3.intro();
// person3.displaySecretMssg(); Property 'displaySecretMssg' is private and only accessible within class 'PrivatePersonData'.ts(2341)

//Class Inheritance
class User {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  intro(): void {
    console.log("Nice to meet you!");
  }
}

class UserDetails extends User {
  constructor(name: string) {
    super(name);
  }

  showDetails(): void {
    console.log(`My name is ${this.name}`);
  }
}

const user = new UserDetails("Bobi");
console.log("<----->");
console.log(user.name);
user.showDetails();
user.intro();

// protected access modifier

class ProtectedPerson {
  //    protected name: string;
  //    protected age: number;

  constructor(protected name: string, protected age: number) {
    this.name = name;
    this.age = age;
  }

  protected getProtectedData(): string {
    return `Protected name ${this.name} and protected age ${this.age}`;
  }
}

const protectedPerson = new ProtectedPerson("Protected Pesho", 22);
// protectedPerson.name Property 'name' is protected and only accessible within class 'ProtectedPerson' and its subclasses.
// protectedPerson.getProtectedData() Property 'getProtectedData' is protected and only accessible within class 'ProtectedPerson' and its subclasses.

class Student extends ProtectedPerson {
  private grade: number;

  constructor(name: string, age: number, grade: number) {
    super(name, age);
    this.grade = grade;
  }

  studentIntro(): void {
    console.log(this.getProtectedData());
    console.log(
      `${this.name} is ${this.age} years old with grade ${this.grade}`
    );
  }
}

const student = new Student("Hristo", 25, 6);
console.log("<---->");
student.studentIntro();
// student.grade Property 'grade' is private and only accessible within class 'Student'

export {};
