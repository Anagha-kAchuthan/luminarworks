class Parent{
    m1(){
        console.log("inside parent");
    }
}
class  Child extends Parent{
    m2(){
        console.log("inside child");
    }
}
class  SubChild extends Child{
    m3(){
        console.log("inside  sub child");
    }
}

var sub=new SubChild();
sub.m3();
sub.m2();
sub.m1();
//multilevel inheritance

var child=new Child();
child.m2();
child.m1();

var parent=new Parent();
parent.m1();