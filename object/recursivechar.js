var patten="ABABC"

var dict={}

for(let char of patten){
    if(!(char in dict)){
        dict[char]=1;
    }
    else{
        console.log("first recursive char is "+char);
        break
    }
    }
