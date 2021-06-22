var text="hai hello hai hello"//words seperated by space

var words=text.split(" ")

var obj={}

for(let  word of words){
    if(word in obj){
        obj[word]+=1;
    }
    else{
        obj[word]=1
    
    }
    }
console.log(obj);