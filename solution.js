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
  function findlast(data, predicate) {
    result = [];
    for (const item of data) {
      if (predicate(item)) {
        result = item;
      }
    }
  
    return result;
  }
//   function pairIf(data1, data2, predicate) {
//     const pairs = [];
//     for (let i = 0; i < data1.length; i++) {
//       const value1 = data1[i];
//       const value2 = data2[i];
  
//       if (predicate(value1, value2)) {
//         pairs.push([value1, value2]);
//       }
//     }
  
//     return pairs;
//   }

// function reduce(data, callback) {
//     let accumulator = [];
//     for (const item of data) {
//       accumulator = callback(item, accumulator)
//     }
  
//     return accumulator;
//   }
// Custom reduce function
function customReduce(array, reducer, initialValue) {
    let accumulator = initialValue;
  
    for (let i = 0; i < array.length; i++) {
      accumulator = reducer(accumulator, array[i]);
    }
  
    return accumulator;
  }
  
  // Predicate to categorize transactions
  function categorizeTransaction(transactionAmount) {
    if (transactionAmount < 25) {
      return 'small';
    } else if (transactionAmount >= 25 && transactionAmount <= 75) {
      return 'medium';
    } else {
      return 'large';
    }
  }
  
  
  // Use custom reduce function to count transactions by category
  const result = customReduce(
    filter(transactions, isBadProduct),
    (accumulator, transaction) => {
      const category = categorizeTransaction(transaction.amount);
      accumulator[category]++;
      return accumulator;
    },
    { small: 0, medium: 0, large: 0 }
  );
  
  console.log(result);
  
  

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
 function tranactionSize(item, acc){
    const { small, medium, large } = result;
    if (item.amount < 25) {
      result.small.push(item);
    } else if (item.amount < 75) {
      result.medium.push(item);
    } else {
      result.large.push(item);
    }
    return result;
 }
  
  
  
  const badPrices = filter(transactions, isBadPrice);
  const badProducts = filter(transactions, isBadProduct);
  const invalidProducts = badPrices.length + badProducts.length;
  const lastOver200 = findlast(transactions, isPriceOver200);
  console.log("Number of invalid transactions: " + invalidProducts);
  console.log("Number of duplicate customers: TODO");
  console.log("Most recent transaction over $200: $" + lastOver200.amount);
  console.log(reduce(transactions, tranactionSize).small);