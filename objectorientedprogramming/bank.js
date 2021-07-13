class Bank{
    accounts={
        1000:{account_number:1000,name:"ajay",balance:1000,username:1000,password:"userone"},
        1001:{account_number:1001,name:"vjay",balance:2000,username:1001,password:"usertwo"},
        1002:{account_number:1002,name:"ram",balance:3000,username:1002,password:"userthree"},
        1003:{account_number:1003,name:"ravi",balance:4000,username:1003,password:"userfour"}
    }

    getAccountDetails(){
    return accounts
}

//1000,userone
authentication(username,pwd){
    let account_details=this.accounts
    if(username in account_details)
    if(pwd==account_details[username]["password"]){
        this.status=1;
        return 1
       
    }
}
balanceEnquiry(account_number){
    if(this.status==1){
        return this.accounts[account_number]["balance"]
    }
    return "invalid session"
    }
}
 var obj1=new Bank()
 var user=obj1.authentication(1000,"userone")
 console.log(obj1.balanceEnquiry(user))