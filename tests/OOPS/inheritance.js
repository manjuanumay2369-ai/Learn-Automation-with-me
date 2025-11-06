  class A {


    m1(){

        console.log("this is method1 of class A")
    }
    m2(){ console.log("this is meyhod 2")

    }

  }
  class B extends A{
m3(){
    console.log("this is methpd 3 class b")


}

  } class c extends  A{

m4()
{
    console.log("this is method m4 class c")
}


  }

  let obj1=new B()
  obj1.m1()
  obj1.m2()
  obj1.m3()