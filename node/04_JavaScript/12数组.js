/**
 * 数组(Array)
 *      -数组也是一个对象
 *      -它和普通对象功能相似，都是用来存储一些值的
 *      -不同的是普通对象是使用字符串作为属性名
 *        而数组是使用数字作为索引操作
 *      -索引从0开始
 * 
 */
   /*
    //创建构造函数数组对象
    var arr=new Array();
    //使用typeof检查一个数组时，会返回object
    console.log(typeof arr)
    //向数组添加元素  数组[索引]=值
    arr[0]=10;
    arr[1]=20;
    //读取数组中的元素  数组[索引]   读取不存在的索引，不会报错返回undefined
    console.log(arr[1]);
    //可以用length属性来获取数组的长度
    console.log(arr.length);
    //向数组的最后一个位置添加元素，语法：数组[数组.length]=值
    arr[arr.length]=70;
    */


    //使用字面量来创建数组  语法：[]
    var arr=[];
    //使用字面量创建数组，可以在创建时就指定数组中的元素
    var arr=[1,2,3,4,5];
    console.log(arr[1]);
    //使用构造函数创建数组时也可以添加元素
    var arr2=new Array(1,2,3)
    console.log(arr2);
    //两种方式有区别，
    arr3=[10];     //只是元素是10
    arr4=new Array(10);   //长度为10

    //数组可以放任意的数据类型 
    arr5=['hello',1,true,null,undefined,function,obj]
  