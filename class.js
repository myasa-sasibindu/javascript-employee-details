//es6 class

/*class userwithclass {
    constructor() {

    }
}
new userwithclass();
console.log(typeof userwithclass);
function userwithclass() {
    console.log("iam function");

}

userwithclass();
console.log(typeof userwithcfunction); */

//how creat a object by using classes


/*class Employee {
    constructor(emp_id, emp_name, emp_salary, emp_designation) {
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_salary = emp_salary;
        this.emp_designation = emp_designation;
    }
} 
let mani = new Employee();
console.log(mani);
 //we will give instanese or orgument*/


 /*class Employee {
    constructor(emp_id, emp_name, emp_salary, emp_designation) {
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_salary = emp_salary;
        this.emp_designation = emp_designation;
    }
  getDetails() {
      console.log(`my name is ${this.emp_name}`);
  }
} 
let mani = new Employee("type1", "mani", 20000, "webdeveloper");
let shashi = new Employee("type2", "shashi", 30000, "HTMLdeveloper");
let bindu = new Employee("type3", "bindu", 50000, "reactjsdeveloper");
let bhagya = new Employee("type4", "bhagya", 40000, "bankemployeer");
let lokesh = new Employee("type5", "lokesh", 60000, "engneering");
let girija = new Employee("type6", "girija", 80000, "doctor");

console.log(mani);
console.log(shashi);
console.log(bindu);
console.log(bhagya);
console.log(lokesh);
console.log(girija);*/








//using static method of object using by class
class Employee {
    constructor(emp_id, emp_name, emp_salary, emp_designation) {
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_salary = emp_salary;
        this.emp_designation = emp_designation;
    }
  static username = "iam shashibindu";
  static details() {
      console.log("iam details block");
  }
  getDetails() {
      console.log(`my name is ${this.emp_name}`);
  }
} 
let shashibindu = new Employee(1, "shashibindu", 30000, "software");
let bindu = new Employee(2, "bindu", 30000, "software");
let binduu = new Employee(3, "binduu", 30000, "software");
shashibindu.getDetails();
bindu.getDetails();
bindu.getDetails();
Employee.username;
Employee.details();

































































