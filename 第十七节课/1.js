
    var a=123
    var b="apple"
    var c=function apple(){
        console.log("apple");
    }

    let d=456
    let e="lemon"
    let f=function orange(){
        console.log("orange");
    }

    function lemon(){
        console.log("lemon")
    }
    lemon()
    let le=function banana(){
        console.long("banana")
    }
    le();
    banana()
    let le2=function(){
        console.log("banana le2")
    }

    le2()

    function apple2(){
        let name="apple2";
        function apple2Son(){
            console.log("apple2Son");
        }
        apple2Son()
        return {
            apple2Son:apple2Son
        }
    }
    apple2().apple2Son()
   