

var shoppingList = 
[
{
	name: "lettuce",
	price: 2.00
},
{
	name: "milk",
	price: 4.10
},
{
	name: "chocolate",
	price: 3.50
} 
];


function addToList(){
	var newItemName = document.getElementById('newGroceryItem').value;
	var newItemprice = document.getElementById('newItemPrice').value;

	var obj = {
		name: newItemName,
		price: newItemPrice
	};

	shoppingList.push(obj);

}
//creating the list
function displayedNewItems(){

	for (var i=0; i<shoppingList.length; i++){
		console.log(shoppingList[i].name, "$" + shoppingList[i].price.toFixed(2));

		//printing the list
		var newPrintedList = document.createElement('div');

		newPrintedList.innerHTML = newGroceryItem[i].name + "$" + newItemPrice[i].price.toFixed(2);

		document.body.appendChild(newPrintedList);
	
		var printedList = document.createElement('div');

		printedList.innerHTML = shoppingList[i].name + "$" + shoppingList[i].price.toFixed(2);

		document.body.appendChild(printedList);
	}

	//printing the total

	var printedTotal = document.createElement('div');

	printedTotal.innerHTML = "Total $ " + shoppingList.totalAmount();

	document.body.appendChild(printedTotal);



}

//calculating total

shoppingList.totalAmount = function(){

	var total = 0;
	for (var i = 0; i < shoppingList.length; i++) {
		total = total + shoppingList[i].price;
	}
	return total.toFixed(2);
};


displayedNewItems();




