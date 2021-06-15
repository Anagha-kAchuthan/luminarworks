// // Array
expenses=[12,34,56,78]
// console.log(expenses);
// expenses[1]=300;//update
// console.log(expenses)
// for(let i=0;i<expenses.length;i++){
//     console.log(expenses[i]);
// }

// expenses[3]+=400;
//     console.log(expenses);

// for(let amount of expenses){
//     console.log(amount);
// }

// print all expenses>30
for(let exp of expenses){
    if(exp>30){
        console.log(exp);
    }
}