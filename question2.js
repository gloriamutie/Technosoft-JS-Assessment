var arr = [1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1];
var consecutiveNumbers = (arr = []) => {
   var start = 0;
   var end = 0;
   var max = 0;
   while (end < arr.length) {
      if (arr[end] === 0) {
         if (end - start > max) {
            max = end - start
         };
         end++;
         start = end;
      } else {
         end++
      };
   };
   return end - start > max ? end - start : max;
}
console.log(consecutiveNumbers(arr));