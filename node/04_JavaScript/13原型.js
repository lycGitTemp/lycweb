/*
    原型prototype
        我们所创建的每一个函数，解析器都会添加一个属性prototype
        这个属性对应着每一个对象，这个对象就是原型对象
    如果函数作为普通函数调用prototype没有任何作用
    当函数以构造函数的形式调用时，它所创建的对象中都会有一个隐含的属性
        指向该构造函数的原型对象，可通过__proto__来访问该属性

    原型对象相当于一个公共的区域，所有同一个类的实例都可以访问到这个原型对象
        我们可以将对象中的内容，统一设置到原型对象中
    当我们访问对象的一个属性或方法时，它会先在自身中寻找，如果有则直接使用
        如果没有则去原型对象中寻找，找到则使用  
    以后我们在创建构造函数时，我们可以将对象共有的属性和方法，统一添加到构造函数的原型对象中，
        这样不用分别为每一个对象添加，也不会影响全局作用域，就可以使每一个对象都具有这些属性和方法了
*/
// function Person(){
// }
// console.log(Person.prototype);
 
/*
function MyClass(){
}

//向MyClass的原型中添加属性a
MyClass.prototype.a=123;

//向MyClass的原型中添加一个方法
MyClass.prototype.sayHello=function(){
    console.log("你好！");
};
var mc=new MyClass();
var mc2=new MyClass();
//console.log(mc.__proto__ ==MyClass.prototype);
//console.log(mc2.__proto__ ==MyClass.prototype);

//向mc中添加a属性
// mc.a="我是mc中的a";
// console.log(mc.a);

mc.sayHello();   

*/


function MyClass(){
}

//向MyClass的原型中添加一个name属性
MyClass.prototype.name="我是原型中的名字";

var mc=new MyClass();
mc.age=18;
// console.log(mc.name);

//使用in检查对象中是否含有某个属性时，如果对象没有，原型中有，也会返回true；
// console.log("name" in mc);

//可以使用对象的hasOwnProperty()来检查对象自身中是否含有该属性，含有返回true
// mc.hasOwnProperty("name");
// mc.hasOwnProperty("age");
/*
    原型对象也是对象,所以它也有原型
        访问对象的一个属性或方法时，它会先在自身中寻找，如果有则直接使用
        如果没有则去原型对象中寻找，找到则使用
        如果没有则去原型的原型中寻找，找到则使用
        直到找到Object对象的原型没有，则返回underfined



*/
//console.log(mc.__proto__.hasOwnProperty("hasOwnProperty"));
//console.log(mc.__proto__.__proto__.hasOwnProperty("hasOwnProperty"));