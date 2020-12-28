function city(name,area,postcode,regions){
    this.name=String(name);
    this.area=Number(area);
    this.postcode=String(postcode);
    this.regions=[
        {
          "Name":"orgionName",
          "type":"String"
        },
        {
            "Name":"orgionPostcode",
            "type":"String"
        },
        { 
            "name":"orgionArea",
            "type":"number"
        }
    ];   
    }
     city.prototype.printName=function(){
         console.log(this.name);
         console.log(this.area);
         console.log(this.postcode);
         console.log(fun);
        
     }   
     function fun(){
         for(i=0;i<3;i++){
             console.log(this.regions[i])
         }
     }
    var c1=new city("南昌",7000,"341000",["湾里区","a12345",5000]);
    c1.printName();
    
