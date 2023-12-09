/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {

    let outputData = [];
    let myMap = new Map();
    for(let i=0 ; i< transactions.length ; i++){
        
        if(myMap.has(transactions[i].category)){
            myMap.set(transactions[i].category, myMap.get(transactions[i].category) + transactions[i].price);
        }else{
            myMap.set(transactions[i].category, transactions[i].price);
        }
    }

    myMap.forEach((value, key)=>{
        outputData.push({category: key, totalSpent : value});
    })

  return outputData;
}

module.exports = calculateTotalSpentByCategory;
