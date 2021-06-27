// costructor
// in js constructor name always constructor()
// constructor will automatically invoked during object creation

class Student{
    constructor(roll,name,course,total){
        this.roll=roll;
        this.name=name;
        this.course=course;
        this.total=total;
    }
    printDetails(){
        console.log( this.roll,this.name,this.course,this.total);//instance variable
    }
}
var stud=new Student(1,"anu","MCA",2355)
stud.printDetails()

var stud1=new Student(2,"manu","MCA",2355)
stud1.printDetails()