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
var newGroceryItem, newItemprice;
function addToList(){
    newGroceryItem = document.getElementById('newGroceryItem').value;
    newItemPrice = Number(document.getElementById('newItemPrice').value);
    var obj = {
        name: newGroceryItem,
        price: newItemPrice
    };
    shoppingList.push(obj);
    console.log(obj);
    var newPrint = document.createElement('div');
    newPrint.innerHTML = obj.name + ' $' + obj.price;
    document.body.appendChild(newPrint);
    shoppingList.totalAmount();
    // displayedNewItems();
}
//creating the list
function displayedNewItems(){
    for (var i=0; i<shoppingList.length; i++){
        console.log(shoppingList[i].name, "$" + shoppingList[i].price.toFixed(2));
    
        var printedList = document.createElement('div');
        printedList.innerHTML = shoppingList[i].name + "$" + shoppingList[i].price.toFixed(2);
        document.body.appendChild(printedList);
    }
//////printing the total
    var printedTotal = document.createElement('div');
    printedTotal.innerHTML = "Total $ " + shoppingList.totalAmount();
    document.body.appendChild(printedTotal);
}
shoppingList.totalAmount = function(){
    var total = 0;
    for (var i = 0; i < shoppingList.length; i++) {
        total += shoppingList[i].price;
    }
    return total.toFixed(2);
};
displayedNewItems();