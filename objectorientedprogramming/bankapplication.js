class Bank{
    createAccount(account_number,name,balance){
        this.account_number=account_number;
        this.name=name;
        this.balance=balance
}

deposit(amt){
    this.balance+=amt;
    console.log(`your account${this.account_number},has been credited with amount${amt} your avail balance:${this.balance}`);

}

withdrawal(amt){
    if(this.balance<amt)
    console.log(`transaction failed insufficient balance`);
    else{
        this.balance=amt;
        console.log(`your account${this.account_number},has been debit with amount${amt} your avail balance:${this.balance}`);
    }

}

balance(){
    this.balance-=amt
    console.log(`${this.balance}`);

}
printBank(){
    console.log(this.account_number,this.name,this.balance);

}
}
var obj1=new Bank()
obj1.createAccount(10989,"shan",67676)
obj1.deposit(45)
obj1.withdrawal(10)
obj1.balance()
printBank()
