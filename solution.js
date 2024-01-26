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
  

  function isBadPrice(transaction) {
    return transaction.amount === null || transaction.amount === 0;
  }

  function isBadProduct(transaction) {
    return transaction.product != 'FIG_JAM' && transaction.product != 'FIG_JELLY' && transaction.product != 'SPICY_FIG_JAM' && transaction.product != 'ORANGE_FIG_JELLY';
  }
  function toString(transaction) {
    return `${transaction}`
  }
  
  
  
  const badPrices = filter(transactions, isBadPrice);
  const badProducts = filter(transactions, isBadProduct);
  const badPricesLast = findlast(transactions, isBadPrice);
  const toStringBD = map(badPrices, toString);
  
  console.log("There are "+ badPrices.length + " transactions that have a null amount, and "+ badProducts.length + " have an invalid product name for a total of " + (badPrices.length + badProducts.length) + " bad transactions")
  console.log(badPricesLast)