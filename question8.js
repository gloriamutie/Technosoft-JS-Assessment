
// convert the JSON object to array
var objectArray = [];

for(var i in obj) {

    var myObject = {};
    if(obj.hasOwnProperty(i)) {
        myObject.id = i;
        myObject.name = obj[i].name;
        myObject.title = obj[i].title;
       arr.push(myObject); 
    }        
} 
objectArray.sort(function (m,n) {
    m.id - n.id;
 });
 console.log(objectArray);
 
   