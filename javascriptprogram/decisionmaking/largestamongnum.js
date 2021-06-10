var num1=15,num2=56,num3=5;
if(num1>num2 & num1>num3){
  console.log(`${num1} largest`);
}
else if(num2>num1 & num2>num3){
    console.log(`${num2} largest`);
}
else if(num1>num1 & num3>num2){
    console.log(`${num3} largest`);
}
else if(num1==num2 &num1==num3){
    console.log("equal");
}

