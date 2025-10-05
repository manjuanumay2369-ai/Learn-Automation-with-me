//1. String
// let name = "John Doe";
// console.log("My name is " + name);
// console.log(typeof name); //string      




// let mysnm="manjugowda"
// console.log(mysnm)



// let myname =("manju")

// console.log(myname+"Gowda")

// let Fnm=("Manju")
//     Lnm =("Gowda")

//     Fullname=(Fnm+Lnm)
// console.log(Fullname+"27")


// //2. Number
// let age = 25;
// console.log("My age is " + age);
// console.log(typeof age); //number   



// let myage=28
// console.log(myage)


// let mineage=28
// console.log(typeof mineage)





//3. Boolean


//3. Boolean
// let isStudent = true;
// console.log("Am I a student? " + isStudent);
// console.log(typeof isStudent); //boolean    




// let myrole=true;

// console.log ("QA Engineer is my role " +myrole);
// console.log(typeof myrole);



//Undefined

// let mgfname

// console.log("myname is  "+ mgfname)
// console.log(typeof mgfname)


//Null return as object

// let myname = null
// //console.log("manju"+myname)
// console.log(typeof myname)



 //6. Symbol
// let myid= Symbol("id")
// console.log("my id number is "+ myid.toString(25) )
// console.log(typeof myid)



// //6. Symbol
// let uniqueId = Symbol ("my rollnumber");
// console.log("My unique ID is " + uniqueId.toString());
// console.log(typeof uniqueId); //symbol  


 //7. bigint

// let mybignumber=BigInt(123456787654334566765455)
// console.log("my number is " +mybignumber)
// console.log(typeof mybignumber)


//NON-PREMETIVE DATA TYPES



//object

// let mine ={
//     myfname: "manju",
//     MyLname: "gowda",
//     myrole:"QA"
  
// }

// console.log (mine.myfname)
//  console.log(mine.MyLname)
//  console.log(mine.myrole +" Engineer" )
//  console.log(typeof mine )


//Array


// let electronics= ["ironbox","indection","electriccocker","waterheater"]

// console.log(electronics)

// electronics.forEach((electronics, index)=>{
//  console.log(`${index +1}  ${electronics}`)
// })
    



// let mapps
// {

// let colors=["white", "red","green", "yellow"]


// // Print each color in the array as a list
// console.log(colors);
// colors.forEach((colors, index) => {
//     console.log(`${index + 1}. ${colors}`);
// })

// console.log(typeof colors)}


 
//Function

// function greet(){

//     return "hello manju , good morning"
// } 
// console.log(greet())
// console.log(typeof greet)


//date

// let todaydate = new Date();
// console.log(todaydate);
// console.log(typeof todaydate);


// 4. Date
// let currentDate = new Date();
// console.log("Current Date: " + currentDate);
// console.log(typeof currentDate); //object (dates are a type of object in JavaScript)


// let todaydates = new Date();
// console.log("Today date and time is:"+ todaydates)

// console.log(typeof todaydates)

// 5. RegExp
// let pattern = /ab+c/;
// console.log("Pattern: " + pattern);
// console.log(typeof pattern); //object (regular expressions are a type of object in JavaScript)


//6. Map

// let map = new Map();            
// map.set("name", "Alice");
// map.set("age", 28);
// console.log("Map: " + JSON.stringify(Array.from(map.entries())));
// console.log(typeof map); //object (maps are a type of object in JavaScript)






// let map = new Map();
// map.set("name", "Age","ph");
// map.set("manju",28,949182723647)

// console.log("Mapping: "+ JSON.stringify(Array.from(map.entries())))
// console.log(typeof map)


//10. Error
// let error = new Error("Something went wrong!");
// console.log("Error message: " + error.message);
// console.log(typeof error); //object (errors are a type of object in JavaScript)


// let errormsg= new Error ("Something went worng")
// console.log("Errormsg :" + errormsg.message)

// console.log (typeof errormsg)

//11. Promise
// let promise = new Promise((resolve, reject) => 
// {
//     resolve("Promise resolved!");
// });
// promise.then((message) => console.log(message));
// console.log(typeof promise);

// 'shouldResolve' is a user-defined variable, not an inbuilt keyword. You can name it anything you like.

// let promise1 = new Promise((Resolver, Rejecter) => {

//     setTimeout(() => {
//         const shouldresolve = true;
//         if (shouldresolve) {
//             Resolver("promised Resolved");
//         } else {
//             Rejecter(" Promise Rejected")
//         }
//     }, 1000);
// })
// promise1
//     .then((message) => console.log(message))
//     .catch((error) => console.log(error))
// console.log(typeof promise1)



    //for false



// let promise2 = new Promise((Resolve, Reject) => {

//     setTimeout(() => {
//         const ShouldResolve = false;

//         if (ShouldResolve) {
//             Resolve(" Promise is Accepted")

//         } else {
//             Reject("Promise is Rejected")

//         };
//     }, 2000)
// });

// promise2
//     .then((message) => console.log(message))
//     .catch((error) => console.log(error))
//     .finally(() => console.log(typeof promise2))



// const promise3 = new Promise ((Reject, Resolve)=>{
// setTimeout (()=> {

//     const Success=true ;

//     if (Success) {Resolve ("Promise is accepted")

//     } else { Reject (new Error( "Promise is declined"))

//     }

//     }, 2000);
// });
// promise3
//         .then((result) =>console.log(result))
//         .catch((error)=> console.log(error))
//         .finally (()=> console.log(typeof promise3))




//12. ArrayBuffer
// let buffer = new ArrayBuffer(16);   

// console.log("ArrayBuffer byte length: " + buffer.byteLength);
// console.log(typeof buffer); //object (array buffers are a type of object in JavaScript) 


//13. DataView
// let buffer = new ArrayBuffer(16); // Define buffer before using it
// let dataView = new DataView(buffer);
// dataView.setInt8(0, 42);
// console.log("DataView value at byte 0: " + dataView.getInt8(0));
// console.log(typeof dataView); //object (data views are a type of object in JavaScript)




// let arrydata = new ArrayBuffer (32)

// let dataView = new DataView (arrydata)

// dataView.setInt16(0, 89)
//  console.log("DataView value at int  "+ dataView.getInt32 (0))
// console.log( typeof dataView)


// console.log(parseInt("10110011", 2)); // Output: 89


// console.log((890).toString(2)); // Output: "1011001"



//14. TypedArray (e.g., Int8Array)

// let int8Array = new Int8Array(8);       
// int8Array[0] = 10;
// int8Array[1] = 20;
// int8Array[2] = 30;
// int8Array[3] = 40;
// int8Array[4] = 10;
// int8Array[5] = 20;
// int8Array[6] = 30;
// int8Array[7] = 40;
// console.log("Int8Array: " + int8Array);
// console.log(typeof int8Array); 




//16. Intl (Internationalization)



// let numberFormatter = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });
// console.log("Formatted number: " + numberFormatter.format(123456.789));
// console.log(typeof numberFormatter); 

//object (Intl objects are a type of object in JavaScript)     

// new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(123456.789);
// ₹1,23,456.79

// new Intl.NumberFormat('ja-JP', { style: 'currency', currency: 'JPY' }).format(123456.789);
// ￥123,457


// const Numberform = new Intl.NumberFormat ('en-IN',
// {style: 'currency',
// currency: 'INR' 
// }).format(723467.7)

// console.log("newcurrencyby country:" + Numberform)
// console.log(typeof Numberform)



//17. Generator Function



// function* generatorFunction() { 
//     yield 1;
//     yield 2;
//     yield 3;
// }               
// let generator = generatorFunction();
// console.log("Generator values: " + [generator.next().value, generator.next().value, generator.next().value]);
// console.log(typeof generator); //object (generators are a type of object in JavaScript) 


// function* generatorFunction () {
// yield 1;
// yield 2;
// yield 3;

// }


// let Generate = generatorFunction ()
// console.log("Generating the function " + [Generate.next().value , Generate.next().value , Generate.next().value ]),
// console.log(typeof Generate)



//18. Async Function    
// async function asyncFunction() {
//     return "Async function result!";    
// }
// asyncFunction().then((result) => console.log(result));
// console.log(typeof asyncFunction); //function (async functions are a type of function in JavaScript)        











// async function asyncFunction () {
//       return "manju practiced the promise result will come here "

// }  
// asyncFunction().then((result)=> console.log (result))
//             .finally(()=> console.log(typeof asyncFunction))



