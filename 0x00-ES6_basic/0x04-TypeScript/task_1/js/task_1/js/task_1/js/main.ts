// Define an interface for the constructor
interface StudentConstructor {
    new (firstName: string, lastName: string): StudentClass;
  }
  
  // Define an interface for the class
  interface StudentClass {
    workOnHomework(): string;
    displayName(): string;
  }
  
  const Student: StudentConstructor = class StudentClass implements StudentClass {
    private firstName: string;
    private lastName: string;
  
    constructor(firstName: string, lastName: string) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
  
    workOnHomework(): string {
      return 'Currently working';
    }
  
    displayName(): string {
      return this.firstName;
    }
  };
  
  // Usage
  const student = new Student('John', 'Doe');
  console.log(student.displayName()); // Output: John
  console.log(student.workOnHomework()); // Output: Currently working