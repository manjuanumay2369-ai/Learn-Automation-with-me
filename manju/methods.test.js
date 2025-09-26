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


//reduce
const productPrices = [499, 1299, 899, 349, 699]; // Prices in INR // USD equivalent approx: [6, 16, 11, 4, 8]

const totalCost = productPrices.reduce((sum, price) => sum + price, 0);// summing up all prices

console.log('Total cost:', totalCost); 
// Output: 3745

//filter
const module = electronics.filter(item => item.includes('Module'));// filtering items that contain 'Module'
console.log('Modules:', module); 

// ['Voice Detection Module', 'Dot Matrix Module']

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
