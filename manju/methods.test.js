const electronics = [
  'Arduino Starter Kit',
  'Bluetooth LED Speaker',
  'Gaming Keyboard',
  'Ultrasonic Sensor',
  'LCD Display',
  'Voice Detection Module',
  'Mini Table Fan',
  'Dot Matrix Module'
];

//slice
const featured = electronics.slice(1, 3); //will start from 1 and end with 3 but not include 3
console.log('Featured products:', featured);

// ['Bluetooth LED Speaker', 'Gaming Keyboard']

const featuredmini = electronics.slice(3, -1); //will start from 3 and end with -1 but not include -1
console.log('Products:', featuredmini);

// Featured products: [
//   'Ultrasonic Sensor',
//   'LCD Display',
//   'Voice Detection Module',
//   'Mini Table Fan']

const featurdmini = electronics.slice(0);// will start from 0 and end with length of array
console.log('Products:', featurdmini);
// Products: [
// 'Arduino Starter Kit',
//   'Bluetooth LED Speaker',
//   'Gaming Keyboard',
//   'Ultrasonic Sensor',
//   'LCD Display',
//   'Voice Detection Module',
//   'Mini Table Fan',
//   'Dot Matrix Module']



//splice
// Replace 'Gaming Keyboard' with 'Mechanical Keyboard'
electronics.splice(2, 1, 'Mechanical Keyboard');// at index 2, remove 1 item, add 'Mechanical Keyboard'

console.log('Updated list:', electronics);

// 'Arduino Starter Kit',
//   'Bluetooth LED Speaker',
//   'Mechanical Keyboard',
//   'Ultrasonic Sensor',
//   'LCD Display',
//   'Voice Detection Module',
//   'Mini Table Fan',
//   'Dot Matrix Module'

electronics.splice(4, 2, 'lcd Keyboard', 'Led keyboard');// at index 4, remove 2 item, replace the 'lcd Keyboard', 'Led keyboard'

console.log('Updated:', electronics);

// 'Arduino Starter Kit',
//   'Bluetooth LED Speaker',
//   'Mechanical Keyboard',
//   'Ultrasonic Sensor',
//   'lcd Keyboard',
//   'Led keyboard',
//   'Mini Table Fan',
//   'Dot Matrix Module'



//reduce
const productPrices = [499, 1299, 899, 349, 699]; // Prices in INR // USD equivalent approx: [6, 16, 11, 4, 8]

const totalCost = productPrices.reduce((sum, price) => sum + price, 0);// summing up all prices

console.log('Total cost:', totalCost); 
// Output: 3745
const tCost = productPrices.reduce((sum, price) => sum - price, 10);// subtracting all prices from initial value 10

console.log('Total cost:', tCost); 

// Output: -3735


//filter
const module = electronics.filter(item => item.includes('Module'));// filtering items that contain 'Module'
console.log('Modules:', module); 

// ['Voice Detection Module', 'Dot Matrix Module']

//filter
const module2 = electronics.filter(item => item.includes('Sensor'));// filtering items that contain 'Sensor'
console.log('Sensor:', module2); 

//map
const tagged = electronics.map(item => `Electronics: ${item}`);// adding 'Electronics: ' prefix to each item
console.log('Tagged:', tagged);

//   'Electronics: Arduino Starter Kit',
//   'Electronics: Bluetooth LED Speaker',
//   'Electronics: Gaming Keyboard',
//   'Electronics: Ultrasonic Sensor',
//   'Electronics: LCD Display',
//   'Electronics: Voice Detection Module',
//   'Electronics: Mini Table Fan',
//   'Electronics: Dot Matrix Module'

const tagging = electronics.map(item => `MPS:${item}`);// adding MPS: ' prefix to each item
console.log('Tagmap:', tagging);


// Tagmap: [
//   'MPS:Arduino Starter Kit',
//   'MPS:Bluetooth LED Speaker',
//   'MPS:Mechanical Keyboard',
//   'MPS:Ultrasonic Sensor',
//   'MPS:lcd Keyboard',
//   'MPS:Led keyboard',
//   'MPS:Mini Table Fan',
//   'MPS:Dot Matrix Module'
// ]