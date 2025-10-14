class bangalore{

 static empname="manju"
empid=102
empadd="bangalore"

static m1(){
    console.log("this is method one")
}
m2(){ 
    console.log("this is methid 2")
}
static  m3(){
    console.log("this is method 3")
     this.m1()
}
m4 (){
console.log("this is methid 4")
}

 display (){
console.log(this.empname)
console.log(this.empid)
console.log(this.empadd)
}
}
let emp1 = new bangalore ()
console.log(emp1.empid)
console.log(emp1.empname) //undefined value will come
console.log(emp1.empadd)
console.log(bangalore.empname) //static variable call by class name   
emp1.m2()
emp1.m4()
emp1.display() //call by object name , empname will give as undefined

