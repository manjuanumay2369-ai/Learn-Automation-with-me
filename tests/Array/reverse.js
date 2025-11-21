

// let arrays= 'Manjunath'

// const reversed=arrays.split('').reverse().join('')

// console.log(reversed)



// function firstuniquechar (str){
//  for (let char of str){
//     if (str.indexOf(char)=== str.lastIndexOf(char)) return char

//     } return null

// }

// console.log(firstuniquechar("aabbccdde"))

// console.log(firstuniquechar("Manju"))

// console.log(firstuniquechar("aabbcc"))


// const arays =['manju','mahi','mala','manju','mani','mala','manju']


// const removeduplicate= [...new Set (arays)]

// console.log(removeduplicate)


// const arays = ['manju','mahi','mala','manju','mani','mala','manju'];

// const duplicates = [...new Set(arays.filter((item, i) => arays.indexOf(item) !== i))];

// console.log(duplicates); 
// // 👉 [ 'manju', 'mala' ]





//  const arays = ['manju','mahi','mala','manju','mani','mala','manju'];


//  const  removeduplicate =[...new Set(arays)]


//  console.log(removeduplicate)



// removing dupkicates from below arays

// const arrays =['bharath','sharath','manju','bharath','sharath']

// const removeduplicate =[...new Set (arrays)]


//     console.log(removeduplicate)


// find duplicates from array 


// const arrays =['bharath','sharath','manju','bharath','sharath']


// const findduplicates = [...new Set (arrays. filter((item,i)=> arrays.indexOf(item) !==i))]


// console.log(findduplicates)


// ////// promise example

// const mypromise = new Promise ((accept, reject) => {

// const success = true/false

// const failure = true

// if (success) { accept ('Transaction accepted')

// } else { reject ('transaction rejected')  } 

// // if (failure) { accept ('its failled transaction')

// // } else { reject ('if its failled transaction will be reject')

// // }

// })

// console.log (mypromise)







// const mypromise = new Promise ( (accept,reject) => {

// const success = true

// if (success) { accept ('Transaction been accepted to proceed')

// } else ( reject ('transaction been rejected to be proceed'))

// }
// )

// console.log(mypromise)


 ///async function

// async function greet(){
//     return 'well come to my world'
// }  

// greet().then(msg=> console.log(msg))


///await example


// function fetchData (){
//  return new  Promise  (resolve=>{
// setTimeout(()=>("Data Fetched Successfully "),2000)
//  })
// }

// async function getData() {
//   console.log("Fetching...");
//   const result = await fetchData();   // waits until Promise resolves
//   console.log(result);
// }


// Simple demo of async/await with setTimeout

// function delay(ms) {
//   return new Promise(resolve => setTimeout(resolve, ms));
// }

// async function demo() {
//   console.log("Start");

//   await delay(2000); // waits for 2 seconds
//   console.log("After 2 seconds");

//   await delay(1000); // waits for 1 second
//   console.log("After 3 seconds total");

//   console.log("End");
// }

// // demo();

// async function greet(){
// return 'My name is Manjunath'

// }  greet().then(msg=> console.log(msg))



let arrays = ['Manjunath']

let reversed = arrays.split('').reverse().join('')

console.log(reversed)


