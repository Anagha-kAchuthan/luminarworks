class Employee{
    setEmployee(eid,e_name,desig,salary){
        this.emp_id=eid;
        this.emp_name=e_name;
        this.emp_desig=desig;
        this.emp_salary=salary;
    }
    printDetails(){
        console.log( this.emp_id,this.emp_name,this.emp_desig,this.emp_salary);
    }
}
var emp=new Employee()
emp.setEmployee(1,"anu","developer",2355)
emp.printDetails()
