class Account {
    constructor(acc_holder_name, acc_no, balance) {
        this.acc_holder_name = acc_holder_name;
        this.acc_no = acc_no;
        this.balance = balance;
    }
    // details=[];
    deposit(data) {
        this.balance += data;
        console.log(`${data} credited to your account
        Available Balance: ${this.balance}`);
    }
    withdraw(data) {
        if (this.balance >= data) {
            this.balance -= data;
            console.log("Withdrawn done")
            console.log(`${data} withdrawn from accunt ${new Date().toLocaleDateString()}`);

        }
        else {
            console.log(`Insufficient balance`);

        }
    }
    checkbalance() {
        return this.balance;
    }
    displaydetails() {
        console.log(`ACC Holder name: ${this.acc_holder_name}`);
        console.log(`Acc number: ${this.acc_no}`);
        console.log(`Available Balanace: ${this.balance}`);
    }
}

class Savingaccount extends Account {
    constructor(acc_holder_name, acc_no, balance, interest = 0.02) {
        super(acc_holder_name, acc_no, balance);
        this.interest = interest;
    }
    deposit(data) {
        const interestamount = data * this.interest / 100;
        super.deposit(data + interestamount);
    }

    displaydetails() {
        super.displaydetails();
        console.log(`Interest Rate: ${this.interest}`);


    }
}
class Currentaccount extends Account{
    constructor(acc_holder_name, acc_no, balance, overdraftlimit = 500) {
        super(acc_holder_name, acc_no, balance);
        this.overdraftlimit = overdraftlimit;
    }

    withdraw(data) {
        if (this.balance <= this.balance + this.overdraftlimit) {
            super.withdraw(data);
        }
        else {
            console.log("insufficient amount");

        }
    }
    displaydetails() {
        super.displaydetails();
        console.log(`Ovrdraftlimit: ${this.overdraftlimit}`);


    }
}
class userinterface {
    constructor() {
        this.acc = null;
    }
    createaccount() {
        this.acc= new Savingaccount('Anshika Mittal', '1222', 2332, 0.04);
    }
    getbalance(){
        console.log("balance: " +this.acc.getbalance());
        
    }
    getdetails(){
        this.acc.displaydetails();
    }
    deposit(data){
        this.acc.deposit(data);
    }
    withdraw(data){
        this.acc.withdraw(data)
    }
}

const list = new Savingaccount('Anshika', 8666, 70000);
// list.Savingaccount();
list.deposit(1000);
list.withdraw(5000);
list.checkbalance();
list.displaydetails();
// list.Savingaccount.deposit(100);
// list.Savingaccount.displaydetails();
// // console.log(list.checkbalance());

