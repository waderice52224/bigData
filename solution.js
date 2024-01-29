function filter(data, predicate) {
    const result = [];
  
    for (const item of data) {
      if (predicate(item)) {
        result.push(item);
      }
    }
  
    return result;
  }

  function findlast(data, predicate) {
    result = [];
    for (const item of data) {
      if (predicate(item)) {
        result = item;
      }
    }
  
    return result;
  }

  function map(data, callBack) {
    result = [];
    for (const item of data) {
      result.push(callBack(item))
    }
  
    return result;
  }
  
  function duplateCustomers(transactions){
    let temp = [];
    let temp2 = [];
    for(let i = 0; i < transactions.length; i++){
      if(!temp.includes(transactions[i].emailAddress)){
          temp.push(transactions[i].emailAddress)
      }
    }
    return temp.length
  }

  //predicates
  function isBadPrice(transaction) {
    return transaction.amount === null || transaction.amount === 0;
  }

  function isBadProduct(transaction) {
    return transaction.product != 'FIG_JAM' && transaction.product != 'FIG_JELLY' && transaction.product != 'SPICY_FIG_JAM' && transaction.product != 'ORANGE_FIG_JELLY';
  }
  function toString(transaction) {
    return `${transaction}`
  }
 function isPriceOver200(transaction){
    return transaction.amount > 200;
 }

  
  
  const badPrices = filter(transactions, isBadPrice);
  const badProducts = filter(transactions, isBadProduct);
  const invalidProducts = badPrices.length + badProducts.length;
  const lastOver200 = findlast(transactions, isPriceOver200);
  console.log("Number of invalid transactions: " + invalidProducts);
  console.log("Number of duplicate customers: " + duplateCustomers(customers));
  console.log("Most recent transaction over $200: $" + lastOver200.amount);
