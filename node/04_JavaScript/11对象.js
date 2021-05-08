//对象很大部分相同时，可以进行批量生产
/*
var obj={
    name:"张三",
    age:18,
    gender:"男",
    sayName:function(){
        console.log(this.name);
    }
};

var obj2={
    name:"李四",
    age:28,
    gender:"男",
    sayName:function(){
        console.log(this.name);
    }
};
var obj3={
    name:"王五",
    age:38,
    gender:"男",
    sayName:function(){
        console.log(this.name);
    }
};
*/

/**
 * 使用工厂方法创建对象
 *  通过该方法可以大批量的创建对象
 *  
 */
    function createPerson(name,age,gender){
        //创建一个新对象
        var obj =new Object();

        //向对象添加属性
        obj.name=name;
        obj.age=age;
        obj.gender=gender;
         obj.sayName=function(){
        console.log(this.name);
    };
        //将新的对象返回
        return obj;
    }
    var obj2=createPerson("张三",18,"男");
    var obj3=createPerson("李四",28,"男");
    var obj4=createPerson("王五",38,"男");
    console.log(obj2);
    console.log(obj3);
    console.log(obj4);
    obj2.sayName();