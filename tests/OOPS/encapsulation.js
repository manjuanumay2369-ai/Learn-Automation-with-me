//encapsulation

class manju{

detielsofpearson(name,age,address){


    this.myname=name
    this.myage=age
    this.myaddress=address

}
    printdetails() {
        console.log(this.myname)
        console.log(this.myage)
        console.log(this.myaddress)
    
}
 


}
let myobj=new manju()
 myobj.detielsofpearson("manju",24,"hyd") //setter
 //myobj.printdetails() //getter

console.log(myobj.myname) //we cant access directly because it is private
console.log(myobj.myage)
console.log(myobj.myaddress)


