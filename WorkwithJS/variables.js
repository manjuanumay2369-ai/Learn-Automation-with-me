

// blocked scpoe varaible -=- let, const 
//let can allow us to giver value again in a block scope
//const cannot allow us to give value again in a block scope
// global scope variable -=- var
// var can allow us to give value again in a global scope
// var can be redeclared and updated
// var is function scoped   
// let and const are block scoped

// var can be accessed before declaration because of hoisting
// let and const cannot be accessed before declaration because of temporal dead zone    
// var can be declared without initialization, default value is undefined
// let can be declared without initialization, default value is undefined
// const must be initialized during declaration, cannot be left uninitialized   


// {let myname="Manju"

// console.log(myname)} 

// {let mg="manju gowda"
//     console.log(mg)
// }

if (4==4){
    let x=45
    console.log(x);

    let y=46
    console.log(y)

    x=46
    console.log(x)

    const z=50
    console.log(z)
    
    var A=80
    console.log(A)
}

if (3>2){
    const z=90
    console.log(z)
    console.log(A)
}



// class mn {
// 	constructor() {
// 		const mnj = "manju";
// 		console.log(mnj);

// 		let mnjj = "gowda";
// 		console.log(mnjj);
// 	}
// }

// // To execute the code inside the class, create an instance:

//  new mn();