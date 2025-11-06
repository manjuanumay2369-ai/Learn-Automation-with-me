//Array

// array =[1,2,3,4,5,6,7]
// array1 =["manju",null,undefined,"",0,true,false]

// console.log(array.length)
// console.log(array[3])

// console.log(array1[0])
// console.log(array[array.length -1])//last second element

// join 2 arrays


// array2 = array.concat (array1)

// console.log(array2)


//.sort

// array3 =["manju","nag","manish","pritam","prem"] //if all are in small letters it will give ascending order
 
//  array4=array3.sort()
//  console.log(array4)

//[ 'manish', 'manju', 'nag', 'prem', 'pritam' ]

//  array5 = ["manju","Nag","manish","Pritam"] 
 // if capitals there in strinmgs it will returns first capitals in order then small letters ascending

//  array6= array5.sort()
//  console.log(array6)
 //[ 'Nag', 'Pritam', 'manish', 'manju' ]



//  array7 =[1,2,3,4,5,6,7]
//  array8 =["Manju",null,undefined,"",0,true,false,"mani"].sort()
//  console.log(array8)

 // [ '', 0, 'Manju', false, 'mani', null, true, undefined ]

 //split

//  str ="manjunath is a good boy but only some body knows the originality"
   
//  array1=str.split("")
//  console.log(array1)

 
//  str ="manjunath, is a good boy,but only, some, body, knows, the , originality"
   
//  array2=str.split(",")
//  console.log(array2)


//join the string, array to string


//  str =["manjunath" ,"is a bad boy that", "limited" ,"knows the originality"]
   
//  array1=str.join(" ")
// //  console.log(array1)


// str ="Manjunath"

// array4= str.split("").sort().reverse().join("")

// console.log(array4)  //capital letters will come into firast place if revrse also

//PUSH 

arr1=["wakeup","brush","bath","eat","go to school"]
// arr2=arr1.push("play","sleep") //it will add the elements at the end of the array
// console.log(arr1)

// arr1.unshift("getup","exercise") //it will add the elements at the begining of the array
// console.log(arr1)

// arr1.shift("") //it will remove the first element of the array
// console.log(arr1)

// arr1.pop() //it will remove the last element of the array   
// console.log(arr1)

// arr1.splice(2,0,"take rest","do homework") //it will add the elements at the given index
// console.log(arr1)

// arr1.splice(3,1) //it will remove the elements from the given index
// console.log(arr1)

//slice
// arr3=arr1.slice(2,5) //it will give the elements from the given index but it will not modify the original array
// console.log(arr3)
// console.log(arr1)   

// forEach
// arr1.forEach(function(value,index){
//     console.log(index,value)
// })

//map
// arr2=arr1.map(function(value){
//  return value.toUpperCase()
// }
// )
// console.log(arr2)
// console.log(arr1)


//it will not modify the original array(arr1) 
// it will give the new array with modified values with capital letters(arr2)

//filter

// arr3=arr1.filter(function(value){
//  return value.length=3  //it will give the elements which are having length 3 and == will give excatly 3
 // === will give more exactly 3
 // > will give more than 3
 // < will give less than 3
// >= will give more than and equal to 3
// <= will give less than and equal to 3

// })
// console.log(arr3)
// console.log(arr1)




//reduce

// arr4=[1,2,3,4,5,6,7,8,9,10]  // it will add all the elements of the array and give the sum
// sum=arr4.reduce(function(acc,cur){
// return acc+cur
// },10)  //0 is the initial value of acc it adds to the sum 
// //if we give initial value as 10 it will add 10 to the sum
// //sum=55+10=65
// console.log(sum) //inivalue=0 =>55, inivalue=10 =>65
// console.log(arr4)    

//find

// arr5=[10,20,30,40,50,60,70,80,90,100]
// num=arr5.find(function(value){
// return value>50  //it will give the first element which is greater than 50
// })
// console.log(num) //60
// console.log(arr5)    

//findIndex
// arr6=[10,20,30,40,50,60,70,80,90,100]            
// index=arr6.findIndex(function(value){
// return value>50  //it will give the index of the first element which is greater than 50
// })
// console.log(index) //5
// console.log(arr6)


// arr2=arr1.findIndex(function(value){
//     return value.length==3  //it will give the index of the first element which is having length greater than 3
//     })
//     console.log(arr2) //2
//     console.log(arr1)   


//some
// arr7=[10,20,30,40,50,60,70,80,90,100]
// result=arr7.some(function(value){
// return value>50  //it will return true if any element is greater than 50
// })
// console.log(result) //true
// console.log(arr7)    

//every
// arr8=[10,20,30,40,50,60,70,80,90,100]
// result=arr8.every(function(value){           
// return value>15  //it will return true if all the elements are greater than 5, otherwise false
// })
// console.log(result) //true
// console.log(arr8)

//includes

// arr9=[10,20,30,40,50,60,70,80,90,100]
// result=arr9.includes(50)  //it will return true if the element is present in the array otherwise false
// console.log(result) //true
// console.log(arr9)
// index=arr9.indexOf(50)  //it will return the index of the element if the element is present in the array otherwise -1
// console.log(index) //4
// console.log(arr9)

// arr2=arr1.includes("eat")  //it will return true if the element is present in the array otherwise false
// console.log(arr2) //true
// console.log(arr1)
// index=arr1.indexOf("eat")  //it will return the index of the element if the element is present in the array otherwise -1
// console.log(index) //3
// console.log(arr1)   

//flat

// arr10=[1,2,[3,4],[5,6,[7,8]]]
// arr11=arr10.flat(2) //it will flatten the array upto the given depth
// console.log(arr11) //[ 1, 2, 3, 4, 5, 6, 7, 8 ]
// console.log(arr10)   


// arr3=[1,2,[4,4,[5,6,[7],6],5,4],3,2,1]
// arr4=arr3.flat(3) //it will flatten the array upto the given depth
// console.log(arr4) //[ 1, 2, 4, 4, 5, 6, 7, 6, 5, 4, 3, 2, 1 ]
// console.log(arr3)



//fill

// arr12=[1,2,3,4,5,6,7,8,9,10]
// arr13=arr12.fill(0,2,5) //it will fill the array with the given value from the given start index to the given end index
// console.log(arr13) //[ 1, 2, 0, 0, 0, 6, 7, 8, 9, 10 ]
// console.log(arr12)

// arr14=["manju","nag","manish","pritam","prem"]
// arr15=arr14.fill("hello",1,4) //it will fill the array with the given value from the given start index to the given end index
// console.log(arr15) //[ 'manju', 'hello', 'hello', 'hello', 'prem' ]
// console.log(arr14)

//reverse

// arr16=[1,2,3,4,5,6,7,8,9,10]
// arr17=arr16.reverse() //it will reverse the array
// console.log(arr17) //[ 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 ]
// console.log(arr16)       
// arr18=["manju","nag","manish","pritam","prem"]
// arr19=arr18.reverse() //it will reverse the array
// console.log(arr19) //[ 'prem', 'pritam', 'manish', 'nag', 'manju' ]
// console.log(arr18)  


//at
// arr20=[1,2,3,4,5,6,7,8,9,10]
// num=arr20.at(3) //it will return the element at the given index
// console.log(num) //4
// console.log(arr20)    

// num1=arr20.at(-3) //it will return the element at the given index from the end
// console.log(num1) //8
// console.log(arr20)


// arr21=["manju","nag","manish","pritam","prem"]
// str=arr21.at(2) //it will return the element at the given index
// console.log(str) //manish
// console.log(arr21)   
    
// str1=arr21.at(-2) //it will return the element at the given index from the end
// console.log(str1) //pritam
// console.log(arr21)       

//Array.from

// str="manjunath"
// arr22=Array.from(str) //it will convert the string to array
// console.log(arr22) //[ 'm', 'a', 'n', 'j', 'u', 'n', 'a', 't', 'h' ]
// console.log(str)     
// arr23=Array.from("manjunath") //it will convert the string to array
// console.log(arr23) //[ 'm', 'a', 'n', 'j', 'u', 'n', 'a', 't', 'h' ]
// console.log(str)
// arr24=Array.from([1,2,3,4,5,6,7,8,9,10]) //it will convert the array to array
// console.log(arr24) //[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
// console.log(arr24)
// arr25=Array.from({name:"manjunath",age:26}) //it will convert the object to array
// console.log(arr25) //[ { name: 'manjunath', age: 26 } ]
// console.log({name:"manjunath",age:26})
// arr26=Array.from({length:10},(v,i)=>i+1) //it will create an array of given length with the given value
// console.log(arr26) //[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
// console.log({length:10}) 

// arr27=Array.from({length:5},()=>Math.floor(Math.random()*10)) //it will create an array of given length with random values
// console.log(arr27) //[ 7, 1, 1, 5, 6 ]
// console.log({length:5})


let str = "abc";
let rotated = str.slice(1) + str[0];
console.log(rotated); // Output: "bca"



function rotateLeft(str) {
  return str.slice(1) + str[0];
}

console.log(rotateLeft("hello")); // Output: "elloh"

