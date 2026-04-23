class Account {
    constructor(value) {
        this._value = value;
    }

    get value() {
        return this._value;
    }

    deposit(addMoney) {
        this._value += addMoney;
        console.log(`Your new balance is ${this._value}`);
    }

    withdraw(removeMoney) {
        if (this._value < removeMoney) {
            console.log(`Sorry, you don't have enough money at your account.`);
        } else {
            this._value -= removeMoney;
            console.log(`Your new balance is ${this._value}`);
        }
    }
}

const myAccount = new Account(500);
console.log(`Your current balance is ${myAccount.value}`);
myAccount.deposit(100);
myAccount.withdraw(700);
myAccount.withdraw(200);