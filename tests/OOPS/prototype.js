class A {

studentname="manju"
m1(){
    console.log("this is method one of class person")
}

m2(){
    console.log("this is method two of class person")
}

}

class B extends A{
myname="manu"

m3(){
console.log("this is method b")
}

}

// Add prototype method outside the class definition
A.prototype.names="manjunath" // prototype property
A.prototype.m4 = function() {
    console.log("this is method four of class person");// prototype method
};

const obj1=new A()

console.log(obj1.studentname)// accessing parent class property
obj1.m1()
obj1.m2()
console.log(obj1.names) // accessing prototype property

const obj2=new B()// child class object
console.log(obj2.studentname)// accessing parent class property
console.log(obj2.myname) // accessing parent class property

const obj3=new B()
obj1.m4()  // calling prototype method
obj2.m4()  // calling prototype method