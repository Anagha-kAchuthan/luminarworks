var temparature=[
    {district:"tvm",temprature:25},
    {district:"kollam",temprature:27},
    {district:"kottayam",temprature:24},
    {district:"ekm",temprature:27},
    {district:"tsr",temprature:25},
    {district:"pkd",temprature:30},
    {district:"tvm",temprature:27},
    {district:"kollam",temprature:25},
    {district:"kottayam",temprature:28},
    {district:"ekm",temprature:29},
    {district:"tsr",temprature:30},
    {district:"pkd",temprature:31},

]

var weather={}

for(let data of temparature){

    let district=data["district"]
    let temp=data["temprature"]
    if(district in weather){

        let old_temp=weather[district]
        if(old_temp<temp){
            weather[district]=temp
        }
    }
else{

    weather[district]=temp;

}


console.log(weather);

function sortByTemp(data)
return Object.entries(data).sort((district)=>dist2[1]-dist[1])
}
console.log(sortByTemp(weather));