
  // const fruits = ['apple', 'banana', 'cherry', 'date'];
  // const result = fruits.slice(1, 3); // ['banana', 'cherry']

  // console.log('Sliced result:', result);



const fruits = ['apple', 'banana', 'cherry'];
const result=fruits.splice(1, 1, 'blueberry'); 
 
console.log('Splice result:', fruits);

// Removes 'banana', inserts 'blueberry'
// Result: ['apple', 'blueberry', 'cherry']
