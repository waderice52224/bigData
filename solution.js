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
  function reduce(data, reducer, initialValue){
        for (const item of data) {
            initialValue = reducer(item, initialValue)
          }
        return initialValue;
  }
  function pairIf(data1, data2, predicate){
    paired = [];
    for (const item1 of data1) {
        for (const item2 of data2) {
            if (predicate(item1, item2)){
                paired.push([item1, item2]);
            }
          }
      }
      return paired;
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
 function tranactionSize(item, acc){
    if (item.amount < 25) {
      acc.small.push(item);
    } else if (item.amount < 75) {
      acc.medium.push(item);
    } else {
      acc.large.push(item);
    }
    return acc;
 }
 function isSame(item1, item2){
    if(item1.emailAddress === item2.emailAddress){
        if(item1.id !== item2.id){
            return true;
        }else{
            false;
        }
    }
}
  function isIDSame(item1, item2){
     return item1.customerId === item2.id;
  }
  function isInList(item, initialValue){
    if(!initialValue.includes(item[1])){
        initialValue.push(item[1])
    }
    return initialValue;
  }
  function customerName(item){
    return item.firstName + " " + item.lastName;
  }
  
        
 
  
  const { small, medium, large } = reduce(transactions, tranactionSize, {small:[], medium:[], large:[]});
  const smallFiltered = small.length - filter(small, isBadPrice).length - filter(small, isBadProduct).length;
  const medFiltered = medium.length - filter(medium, isBadPrice).length - filter(medium, isBadProduct).length;
  const largeFiltered = large.length - filter(large, isBadPrice).length - filter(large, isBadProduct).length;
  const badPrices = filter(transactions, isBadPrice);
  const badProducts = filter(transactions, isBadProduct);
  const invalidProducts = badPrices.length + badProducts.length;
  const lastOver200 = findlast(transactions, isPriceOver200);
  const duplicates = pairIf(customers, customers, isSame);
  const transactionsOver200 = filter(transactions, isPriceOver200);
  const pair200s = pairIf(transactionsOver200, customers, isIDSame)
  const reduced200 = reduce(pair200s, isInList, [])
  const map200s = map(reduced200, customerName)
  console.log("Number of invalid transactions: " + invalidProducts);
  console.log("Number of duplicate customers: " + duplicates.length/4);
  console.log("Most recent transaction over $200: $" + lastOver200.amount);
  console.log("Number of small transactions: " + smallFiltered);
  console.log("Number of medium transactions: " + medFiltered);
  console.log("Number of large transactions: " + largeFiltered);
  console.log("Customers with transactions over $200: " + reduced200);
  console.log("Names of customers with transactions over $200: " + map200s);