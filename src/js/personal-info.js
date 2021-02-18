function hideSingle(){
    var temp1=document.getElementById("ms_single");
    var hide=document.getElementById("spouseDiv");
    if(temp1.checked==true){
        hide.style.display="none";
    }else{
        hide.style.display="flex";
    }
}

function nricdiv(x){
    var p=document.getElementById(x);
    var n=p.value;
    
    n = n.split('-').join(''); 
   
    let finalVal = n.match(/.{1,6}/g).join('-');
    finalVal = finalVal.match(/.{1,11}/g).join('-');
    if(finalVal.length!=14){
        p.value = "";
        alert("Length of NRIC field should be 12")
    }else{
        p.value = finalVal;
    }
    
}