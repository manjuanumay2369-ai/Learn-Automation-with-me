
// function add (a, b){
// console.log(a+b)
// }

// function substract (a, b){
// console.log(a-b)
// }
// function multiply (a, b){
// console.log(a*b)
// }
// function devision (a, b){
// console.log(a/b)
// }
// function squr (a, b){
// console.log(a**b)
// }

// add(5,3)
// substract(5,3)
// multiply(5,3)
// devision(6,3)
// squr(2,3)


class calsi {


    constructor(a,b) {
        console.log("This is constructor")
        console.log(a+b)
    }

    myname = "Manjunath"
    ID = 1431
    mail = "manjunaumay2369@gmail.com"
    addr = "banaglore"

    add(a, b) {
        console.log(a + b)
        console.log(this.myname)

    }

    substract(a, b) {
        console.log(a - b)

        console.log(this.mail)
    }

    devision(a, b) {
        console.log(a / b)

    } Multiplay(a, b) {
        console.log(a * b)
        console.log(this.addr)
    }

    suar(a, b) {
        console.log(a ** b)

    }



    greetMessage() {
        console.log(this.myname + " " + "Welcome to the class")
        console.log(this.ID)
    }
}

 const cal1 = new calsi(3,6) // it will automatically call constructor when we create object
 //we can remove if not needed to call constructor

// cal1 also will give stored values from class calsi

// cal1.substract(40,50)
// cal1.add(50,199)

// cal1.suar(45,2)

// cal1.devision(400,5)
// cal1.Multiplay(45,5)

const cal2 = new calsi(6,8) // it will automatically call constructor when we create object 
// --we can remove if not needed to call constructor


//cal2 also will give stored values from class calsi 


// cal2.substract(40,50)
// cal2.add(50,199)
// cal2.Multiplay(45,3)      // or we can access varaibles from directly like below

// console.log(cal2.mail)
// cal2.greetMessage()
// console.log(cal1.addr)



