var myArray = [1,2,3,4,5,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,20]; 
var arr2 = [];

for (var i =0; i<myArray.length;i++){
	if (myArray[i] === myArray[i+1]){
		arr2.push(myArray[i]);
	}
}

console.log("Repeated Numbers are: " + arr2);