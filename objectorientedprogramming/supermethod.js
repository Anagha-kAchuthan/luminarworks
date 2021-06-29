// supermethod is used by calling parent method

class Parent{
    phone(){
        console.log("samsung");
    }

}
class Child extends Parent{
    phone(){
        super.phone();
        console.log("iPhone");
    }

}

var ch=new Child();
ch.phone();