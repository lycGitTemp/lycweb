/**
 *  解析器在调用函数时，每次都会向函数内部传递一个隐含的参数
 *      这个隐含的参数就是this
 *  this指向的是一个对象，这个对象我们称为函数执行的上下文对象
 *      根据函数的调用方式不同，this会指向不同的对象
 *      1.以函数的形式调用时,this永远是window
 *      2.以方法的形式调用时，this就是调用方法的那个对象
 *      3.以构造函数的形式调用时，this就是新创建的对象
 */
    /*
    var name="我是全局的name属性";
    function fun(){
        //console.log(this);
        console.log(this.name);
    }
    var obj={
        name:"李四",
        sayName:fun
    };
    var obj2={
        name:"张三",
        sayName:fun
    };
    console.log(obj.sayName==fun); //true

    //我们希望调用obj.sayName()打印出obj里的名字
    obj.sayName();
    //我们希望调用obj2.sayName()打印出obj2里的名字
    obj2.sayName();
    fun();
    */

