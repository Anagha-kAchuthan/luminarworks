var arr=[9,3,4,5]
mini=[]
for(let num of arr){
   var min=num[0];
    if(num<min){
        min=num;
        mini.push(min)
        num.pop(min)

    }
    }
    console.log(min);