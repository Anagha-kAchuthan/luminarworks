//method overriding

// class Parent{
//     phone(){
//         console.log("samsung");
//     }

// }
// class Child extends Parent{
//     phone(){
//         console.log("iPhone");
//     }

// }

// var ch=new Child();
// ch.phone();


class Rectangle{
    area(...args){
        console.log(args);
        console.log("area of rectangle",args[0]*args[1]);
    }

}
class Shape extends Rectangle{
    area(...args){
        console.log(args);
        console.log("shape are",args[2]*args[2]);
        super.area(args[0],args[1])
    }

}

var shape=new Shape();
shape.area(10,10,20);