/*
 *  作用域
        作用域指一个变量的作用的范围
        在js中一共有两种作用域

*/

     //全局作用域
/*    
        -直接编写在script标签中的JS代码，都在全局作用域
        -全局作用域在页面打开时创建，在页面关闭时销毁
        -在全局作用域中，有一个全局对象window，可直接使用
            它代表一个浏览器窗口，由浏览器创建
        -在全局作用域中，
            创建的变量都会作为window对象的属性保存
            创建的函数都会作为window对象的方法保存
        -全局作用域中的变量都是全局变量，在页面的任意部分可以访问
*/          
/*
    var a=10;
    var b=20;
    console.log(window.b);
    console.log(window.c);  //undifined
    function fun(){
        console.log("我是window中的fun函数");
    }
    window.fun();
    fun();
    alert("我加window是一样的");
    window.alert("我和上面的时一样的");
*/

//函数作用域
/*  -调用函数时创建作用域，函数执行完毕以后，函数作用域销毁
 *  -每调用一次函数就会创建一个新的函数作用域，他们之间相互独立       
 *  -在函数作用域中可以访问到全局作用域的变量
 *      -在全局作用域中无法访问到函数作用域的变量
 *  -当函数作用域操作一个变量时，它会现在自身作用域中寻找，
 *      然后再在向上一级作用域中寻找，直到找到全局作用域，
 *      如果全局作用域中依然没有找到，只会报错
 *  -在函数中要访问全局变量可以使用window对象
 */
  /*  
    var a=10;
    function fun(){
        var a="我是fun函数中的变量a";
        var b=20;
        console.log("a= "+a);
    }

    function fun2(){
        console.log("a= "+a);
        console.log("a= "+Window.a);
    }
    fun();
    fun2();
   // console.log("b= "+b);  //报错undifined
   // console.log("a= "+a);    //10
   */
    /*
   var a =123;
   function fun(){
       
       console.log("a1= "+a);
        a=456;              //函数内部不用var关键字声明就会变成全局变量
   }
   fun();
   console.log("a2= "+a);
   */