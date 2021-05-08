/*
    函数function的创建
    函数也是一个对象
*/
//创建一个函数对象，可以将要封装的代码以字符串的形式传递给构造函数
    //var fun=new Function("console.log('Hello')");
//函数调用  语法：函数对象()
    //fun();


/*
 *  使用函数声明来创建函数
        语法：function 函数名(形参1，形参2，形参3...形参N){
                }
 */
    // function fun2(){
    //     console.log("函数创建2");
    //     alert("这是第二种方式");
    //     document.write("请注意");
    // }
    // fun2();



/*
 *  使用函数表达式来创建一个函数
 *      var 函数名=new function(形参1，形参2，形参3...形参N){
 *              语句...
 *          }    
 */
    // var fun3=function(){
    //     console.log("函数创建3");
    // }


//函数的参数
/*
 *  可以在函数的()来指定一个或者多个形式参数，但是并不赋值
    
    在调用函数中可以在()中指定实参，实参将会赋值给对应的实参
    调用函数时解析器不会检查实参的类型和数量
 */
    // function sum(a,b){
    //     console.log(a+b);
    // }
    // sum(12,34);
    // sum(123,"Hello");
    // sum(123,"Hello");
    // sum(true,false);
    // sum(123,456,true,null);  //多余不赋值，少于没有对应的实参为undefined
    // sum(123);  //多余不赋值，少于没有对应的实参为undefined


    //实参可以为任何值
    /*
     *  当实参个数过多时，可以将实参封装在一个对象中 ,在对象中可以不用对应实参位置
        实参可以一个对象，也可以是一个函数
     */
    /*
     function sayHello(o){
        console.log("我是"+o.name+",今年我"+o.age+"岁了。")
    }
    var obj={
        name:"lisy",
        age:18
    };
    sayHello(obj);

    function sayHello2(a){
        console.log("a="+a);
    }
        sayHello2(sayHello);
        */

//立即执行函数
/**
 * 函数调用完，立即调用  可以是()()、+()、-()、~()、
 * 往往只会被调用一次
 * 
*/    
   /* (function(){
        console.log("我是一个匿名函数");
    })();

    (function(a,b){
        console.log("a="+a);
        console.log("b="+b);
    })(12,34);
    */

//对象的属性值可以是函数
/**
 *  var obj=new Object();
 *  obj.name="李四";
 *  obj.name=18;
 *  obj.sayName=function(){
 *       console.log(obj.name);
 *  }
 *  obj.sayname();
 * 
 * 
 *  var obj2={
 *      name:"张三",
 *      age:18,
 *      sayName:function(){
 *          console.log(obj2.sayname)
 * };
 *  obj2.sayName();
 */

//枚举对象中的属性
/**
 * for(var 变量  in  对象){
 * }
 *      对象中有几个属性，循环体就会执行几次
 * 
 * 
 * var obj={
 *      name:"张三",
 *      age:18,
 *      sex:"男"，
 *      adress:"一路"
 * };
 * 
 * for(var n in obj){
 *      console.log("属性名: "+n);
 *      console.log("属性值: "+obj[n]);
 *  }
 */

 //构造函数

/**
 *  构造函数和普通函数的区别就是
 *      构造函数习惯上首字母大写
 * 构造函数和普通函数的区别是调用方式不同
 *      普通函数就是直接使用，而构造函数需要new关键字来调用
 * 构造函数的执行流程
 *   1.立刻创建一个函数
 *   2、将新建的对象设置为函数中的this，在构造函数中可以用this来引用新建的对象
 *   3、逐行执行函数中的代码
 *   4、将新建的对象作为返回值返回
 * 
 * 使用同一个构造函数创建的对象，我们称为一类对象，也将一个构造函数称为一个类
 *      我们将通过一个构造函数创建的对象，称为类的实例
 */
    /*
    function Person(name,age,sex){
        this.name=name;
        this.age=age;
        this.sex=sex;
        this.sayName=function(){
            console.log(this.name);
        };
    }
     function Dog(){

     }
    var per=new Person("lisy",15,"女");
    var per=new Person("pite",3,"男");
    var per=new Person("son",18,"男");
    var dog=new dog();
    //console.log(per.name);

    */

    /**
     *  使用instanceof可以检查一个对象是否是一个类的实例
     *      语法：
     *          对象instanceof 构造函数
     *      如果是，则返回true，否则返回false
     * 所有的对象都是Object的后代
     * 所以任何对象和Object做instaceof检查时都会返回true
     */

     //console.log(per instanceof Person);  true 
     //console.log(dog instanceof Person);  true
     //console.log(per instanceof Object);  true
     //console.log(dog instanceof Object);  true