var arr=[1,2,3,4];

var elem=6;

// for(let num1 of arr){
//     //num=1
//     for(let num2 of arr){ //num2=2
//      let total=num1+num2;
//      if(elem==total){
//         console.log(`pairs are ${num1} ${num2}`);
//         break;
//      }
//     }
// }



//second method


for(let i=0;i<arr.length;i++){
    //num=1
    for(let j=i+1;j<arr.length;j++){ //num2=2
     let total=arr[i]+arr[j];
     if(elem==total){
        console.log(`pairs are ${arr[i]} ${arr[j]}`);
        break;
     }
    }
}

