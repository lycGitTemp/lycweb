;(function(){
    console.log("This is chestnut");
    return(function (x){
        console.log("This is haw");
        x();
        x.printName=function(){
            console.log("This is x.printName");
            return this.name;
        }
        return 200+x.printName()+x();
    })(()=>{
        this.name=123;
         console.log("This is pitaya");
         return 666;
    })
})();