function Pear(name,price,origin,weight){
    this.name=name;
    this.price=price;
    this.origin=origin;
    this.weight=weight;
    this.PrintName=function(){
        console.log("this pear is"+this.name);
    }
}
Pear.prototype.PrintName2=function(){
    console.log("this is printname2");
}
var p1=new Pear("一号梨子",12,"河南",10);
p1.PrintName();
p1.PrintName2();

// Pear.PrintName();
// Pear.PrintName2();

console.log(p1.__proto__);
console.log(p1.__proto__.__proto__);
console.log(p1.__proto__.__proto__.__proto__);