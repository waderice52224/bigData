
let count1 = 0;
let count2 = 0;
for(let i = 0; i < transactions.length; i++){
    if(transactions[i].amount == 0 || transactions[i].amount == null){
        // console.log(transactions[i].id + " is invalid, " + transactions[i].amount)
        // console.log(transactions[i])
        count1++;
        continue;
        //FIG_JAM, FIG_JELLY, SPICY_FIG_JAM, or ORANGE_FIG_JELLY.
    }else if(transactions[i].product != 'FIG_JAM' && transactions[i].product != 'FIG_JELLY' && transactions[i].product != 'SPICY_FIG_JAM' && transactions[i].product != 'ORANGE_FIG_JELLY'){
        // console.log(transactions[i].product)
        count2++;
    }
}


console.log("There are "+ count1 + " transactions that have a null amount, and "+ count2 + " have an invalid product name for a total of " + (count1 + count2) + " bad transactions")

function filter(data, predicate) {
    const result = [];
  
    for (const item of data) {
      if (predicate(item)) {
        result.push(item);
      }
    }
  
    return result;
  }
  
  // Custom predicate function
  function isBadPrice(transaction) {
    return transaction.amount === null;
  }

  function isBadProduct(transaction) {
    return transaction.product != 'FIG_JAM' && transaction.product != 'FIG_JELLY' && transaction.product != 'SPICY_FIG_JAM' && transaction.product != 'ORANGE_FIG_JELLY';
  }
  
  
  const badPrices = filter(transactions, isBadPrice);
  const badProducts = filter(transactions, isBadProduct);
  
  console.log("There are "+ badPrices.length + " transactions that have a null amount, and "+ badProducts.length + " have an invalid product name for a total of " + (count1 + count2) + " bad transactions")
