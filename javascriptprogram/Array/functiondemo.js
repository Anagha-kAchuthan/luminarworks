// print the given num is even or odd

function even(num){
    return num%2==0?true:false
}
console.log(even(3));


// factorial of anumber

function factorial(num){
    let res=1
    for(let i=1;i<=num;i++){
    res=res*i
    }
    return res
}
console.log(factorial(5));


// subtract num1,num2

function sub(num1,num2){
    if(num1<num2){
        return num2-num1
    }
    else{
        return num1-num2
    }
    
}
console.log(sub(20,30));


function addNumbers(...params){
    let res=0;
    for(let num of params)
    res+=num
}
addNumbers(10,20);
addNumbers(10,20,30);
