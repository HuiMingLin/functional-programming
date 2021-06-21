var withdraw = curry(function (amount, account) {
  return account.balance >= amount ?
    Maybe.of({ balance: account.balance - amount }) :
    Maybe.of(null);
});


// 假定这两个函数已经在别处定义好了
//  finishTransaction :: Account -> String
var finishTransaction = compose(remainingBalance, updateLedger); 

//  maybe :: b -> (a -> b) -> Maybe a -> b
var maybe = curry(function (x, f, m) {
  return m.isNothing() ? x : f(m.__value);
});

//  getTwenty :: Account -> String
var getTwenty = compose(
  maybe("You're broke!", finishTransaction), withdraw(20)
);

getTwenty({ balance: 200.00 });
// "Your balance is $180.00"

getTwenty({ balance: 10.00 });
// "You're broke!"