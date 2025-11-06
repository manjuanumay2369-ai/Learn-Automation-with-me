class A {

    add(num1,num2){
        console.log(num1)
        console.log(num2)
        console.log(num1+num2)

    }


    
displaymessage(){
console.log("this is parent class method")
}
}


class B extends A {


    add (num1, num2,num3){

        console.log(num1)
        console.log(num2)
        console.log(num3)
        console.log(num1 + num2 + num3)
    }
    displaymessage(){

        console.log("this is method two of class B")
    }
}

const Obj1 = new A()  // parent class object
//const Obj2 = new B()  // child class object


Obj1.displaymessage()
 Obj1.add(10,20,30)  // method overloading

// const Obj2 = new B()  // child class object
// Obj2.displaymessage()  // method overriding
// Obj2.add(10,20)  // method overloading