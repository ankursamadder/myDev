/*Q. 1
Write a JavaScript function or a line of code to check whether an `input` is an array or not.

Test Data :
const data = 'w3resource'
const data1 = [1, 2, 4, 0]

Q.2
Write a JavaScript function or a line of code to clone an array.
const data = ['w3resource','w3resource','w3resource']
const data1 = [1, 2, 4, 0]

Q.3
Write a JavaScript function to get the first element of an array. Passing the parameter 'n' will return the first 'n' elements
of the array.
const data = [[7, 9, 0, -2]]
*/
const testData={
data :'w3resource',
  data1 : [1, 2, 4, 0]
  
}

 function isArray(testData) {
   return Array.isArray(testData)
}
console.log(isArray(testData.data))
  console.log(isArray(testData.data1))

  console.log("------------------------")

/*next answer*/





const data = ['w3resource','w3resource','w3resource']
const data1 = [1, 2, 4, 0]
var cloneData = []
var cloneData1 = []


for(var i=0 ; i<data.length ; i++)
{
    cloneData.push(data[i]);
}

for(i=0 ; i<data1.length ; i++)
{
    cloneData1.push(data1[i]);
}
console.log("Original:") 
console.log(data)
console.log(data1)

console.log("Cloned:")
console.log(cloneData);
console.log(cloneData1)


console.log("------------------------")

/*next answer*/

function getFirstElements(arr, n = 1) {
    if (!Array.isArray(arr)) {
      return [];
    }
    if (n <= 0) {
      return [];
    }
    return arr.slice(0, n);
  }
  const pataNahi = [[7, 9, 0, -2]];
  const firstElement = getFirstElements(pataNahi[0]);

  console.log(firstElement)
  
  
