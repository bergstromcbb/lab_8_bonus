

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

	for (var i=0; i<shoppingList.length; i++){
		console.log(shoppingList[i].name, "$" + shoppingList[i].price.toFixed(2));
	
		var printedList = document.createElement('div');

		printedList.innerHTML = shoppingList[i].name + "$" + shoppingList[i].price.toFixed(2);

		document.body.appendChild(printedList);
	};

shoppingList.totalAmount = function(){

	var total = 0;
	for (var i = 0; i < shoppingList.length; i++) {
		total += shoppingList[i].price;
	}
	return total.toFixed(2);
};

var printedTotal = document.getElementById('TotalBox');

	printedTotal.innerHTML = "Total $ " + shoppingList.totalAmount();


function addToList(){
	var newGroceryItem = document.getElementById('newGroceryItem').value;
	var newItemPrice = Number(document.getElementById('newItemPrice').value);

	var obj = {
		name: newGroceryItem,
		price: newItemPrice
	};

	shoppingList.push(obj);

	var newPrint = document.createElement('div');

	newPrint.innerHTML = obj.name + ' $' + obj.price.toFixed(2);
	document.body.appendChild(newPrint);

	shoppingList.totalAmount = function(){

		var total = 0;
		for (var i = 0; i < shoppingList.length; i++) {
			total += shoppingList[i].price;
		}
		return total.toFixed(2);


	};
	document.getElementById('newGroceryItem').value = "";
	document.getElementById('newItemPrice').value = "";


	var printedTotal = document.getElementById('TotalBox');

	printedTotal.innerHTML = "Total $ " + shoppingList.totalAmount();

	document.body.appendChild(printedTotal);

};


