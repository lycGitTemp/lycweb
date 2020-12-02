// let li=function lichee(){
//     console.log("this is function")
// }

// 函数调用
// lichee()
// li()

// + - ~ ! void 都会执行函数
// void function haw(){
//     console.log("this is haw")
// }

// let h2=  void function test(){
//     console.log("this is h2")
//     //0 为false  其他数为true
//     return 0;     
// }()
// console.log(h2)

//第一种
// var pty=function pitaya(){
//     console.log("我是火龙果");
// }

//第二种
// let pea1=' return '+' `我是小${name}`';
// let peanut=new Function('name',pea1);
// console.log(peanut("花生"));

// var peanut1=function(name){
//     return "我是小"+name;
// }

// let melon={}
// let melon2={
//     name:"我是甜瓜",
//     price:30,
//     weight:2,
//     origin:"海南省",
//     color:false,
//     nut:{
//         name:"我是甜瓜的种子",
//         price:40
//     },
//     printPrice:function(){
//         console.log("我的价格")
//     },
//     printOrigin:()=>{
//         console.log("原产地")
//     },
// }

// var melon3=new Object();
// var melon4=new Object({提示:"可以把上面的函数传下来"});

// var melon5=new Object("12345")
// function Object(x){
//     x()
//     666
// }
function Person(name,sex,age,address){
    this.name=name;
    this.sex=sex;
    this.age=age;
    this.address=address;
    this.sayName=function(){
        console.log(this.name)
    }
}

Person.prototype.sayName2=function(){
    console.log("this is sayName2");
}
var p1=new Person("张三",'男',18,"南昌市");
 console.log(p1);
console.log(p1.__proto__);
 p1.sayName();
 p1.sayName2();