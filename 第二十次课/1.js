function $1(x){
    if(typeof x=="string" ){
        let target=window.document.getElementsByTagName(x);
        if(target.length>0){
            let array=target;
            for(let index=0;index<array.length;index++){
                const element=array[index];
                element.style.backgroundColor="red";
            }
        } 
    }
}
$1("div");