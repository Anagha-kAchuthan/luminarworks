var products=[
    {code:1000,name:"garlic",mrp:120,aval_qty:10},
    {code:1001,name:"chilly",mrp:80,aval_qty:5},
    {code:1002,name:"tomatto",mrp:35,aval_qty:20},
    {code:1003,name:"onion",mrp:40,aval_qty:37},
    {code:1004,name:"potatto",mrp:45,aval_qty:40},
    {code:1005,name:"banana",mrp:55,aval_qty:60},
    {code:1006,name:"brinjal",mrp:43,aval_qty:2},
    {code:1007,name:"beetroot",mrp:38,aval_qty:5},
    {code:1008,name:"carrot",mrp:60,aval_qty:0},
    {code:1009,name:"bittergod",mrp:50,aval_qty:5},



]

// var products_names=arr.products.map(item=>item.name);
// console.log(products_names);

// var p_names=products_names.map(name=>name.toUpperCase());
// console.log(p_names);

//search for product 
var is_available_price=products.some(item=>item.mrp>=30)
console.log(is_available_price);



//search for product 
var srch=products.find(item=>item.name=="potatto")
console.log(srch);

// sort product upon aval_qty desc
// var srt_qty=products.sort((item1,item2)=>item1.aval_qty - item2.aval_qty)
// console.log(srch);
products.sort((item1,item2)=>item1.aval_qty - item2.aval_qty).forEach(item)
console.log(srch);

//print product  mrp is less below fifty
var below_fifty=products.filter(item=>item.mrp<50)
console.log(below_fifty);

// print product mrp less than 30 greater than 50
var range_thirty_fifty=products.filter(item=>item.mrp>=30 & item.mrp<=50)
console.log(range_thirty_fifty);


var out_of_stock=products.filter(item=>item.aval_qty==0)
console.log(out_of_stock);

var arr=[4,3,2,7,89,]
var op=arr.map(num=>num>5?num+1:num-1)
console.log(op);

