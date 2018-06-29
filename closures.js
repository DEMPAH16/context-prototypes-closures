function makeCounter() {
    var id = 0;
    
    return () => ++id;
}

const counter = makeCounter();

counter();//?
counter();//?
counter();//?
counter();//?
counter();//?
counter();//?
counter();//?

const counter2 = new makeCounter();

counter2();//?
counter2();//?
counter2();//?
counter2();//?
counter2();//?

counter();//?




function myBankingModule(initialBalance = 0, currentTransactionHistory = []) {
    let balance = initialBalance;
    let transactionHistory = currentTransactionHistory;
    
    // axios.get(`/users/accounts/${userId}`)
    //     .then(account => {
    //         balance = account.balance;
    //         transactionHistory = account.transactionHistory;
    //     });
    
    return {
        addTransaction(amount, description, labels) {
            const previousAmount = balance;
            balance += amount;
            
            transactionHistory.push({
                previousAmount,
                nextAmount: balance,
                description,
                labels: labels || [],
            });
            
            return balance;
        },
        getCurrentBalance() {
            return balance;
        },
        getTransactionHistory() {
            return Object.freeze(transactionHistory);
        },
    };
}



const myAccount = myBankingModule();

myAccount.getCurrentBalance();//?
myAccount.addTransaction(15000, 'First deposit', ['deposits']);//?
myAccount.addTransaction(-1, 'Bought snickers bar', ['grocery']);//?

const ta = myAccount.getTransactionHistory().slice();//?

const lastItem = ta.pop();
lastItem;

ta

delete lastItem.previousAmount;//?
lastItem

myAccount.getTransactionHistory();//?


myAccount.getTransactionHistory();//?

const bradsAccount = myBankingModule(20000, [{
    previousAmount: 22000,
    nextAmount: 20000,
    description: 'Bought new MacBook Pro',
}]);

bradsAccount.getCurrentBalance();//?
bradsAccount.getTransactionHistory();//?





(function angular() {
    const thisIsProtected = 'likeFortKnox';
    
    global.angular = {
        some: 'thing',
        getProtectedThing() {
            return thisIsProtected;
        }
    };
})();

angular.getProtectedThing();//?