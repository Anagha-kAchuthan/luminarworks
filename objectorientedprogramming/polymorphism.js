class Calculation{
    add(){
        console.log("inside no arg method");
    }
    add(num1){
        console.log("inside one arg method");
    }
    add(num1,num2){
        console.log("inside two arg method");
    }
}

var calc=new Calculation();
calc.add();
calc.add(2)
calc.add(4,6)