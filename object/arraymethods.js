// arrow methods

let add=(num1,num2)=> num1+num2;
console.log(add(3,4));

let sub=(num1,num2)=> num1-num2;
console.log(sub(3,4));

let mul=(num1,num2)=> num1*num2;
console.log(mul(3,4));

let cube=(num)=> num**3;
console.log(cube(3));

//print even number

var arr=[3,4,2,8,7,9]
let num_chk=num=>num%2==0?"even":"odd"

var even=arr.filter(num=>num%2==0)
console.log(even);
