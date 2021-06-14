  var num1=0,num2=0,sum=0;
  console.log(num1,num2);
  while(sum<21){
  sum=num1+num2;
  num1=num2;
  num2=sum;
  console.log(sum);
}