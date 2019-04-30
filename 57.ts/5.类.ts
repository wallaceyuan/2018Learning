class Person{
  name:string;
  getName():void{
    console.log(this.name)
  }
}
class Person2{
  myname:string;
  constructor(myname:string){
    this.myname = myname
  }
  get name(){
    return this.myname
  }
}


let p2 = new Person2('1')
console.log()
