class Person{
    setPerson(name,age){
        this.name=name;
        this.age=age;

    }
    printPerson(){
        console.log(this.age,this.name);
    }
}
    class Student extends Person{
        setStudent(rol,course){
            this.rol=rol;
            this.course=course;
    
        }
        printStudent(){
            console.log(this.rol,this.course);
        }
}

var student=new Student();
student.setPerson("ram",25)
student.setStudent(1,"bca")
student.printStudent()