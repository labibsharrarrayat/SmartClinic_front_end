var patientModal = document.getElementById("printmodal");

var printerbtn = document.getElementById("printerbtn");

printerbtn.onclick = function() {
    patientModal.style.display = "block";
}

window.onclick = function(event) {
    if (event.target == patientModal) {
        patientModal.style.display = "none";
    }
}
function hidespouse(){
    var t1=document.getElementById("sng");
    var t2=document.getElementById("mrd");
    if(t1.checked){
        document.getElementById("hide1").style.display="none";
        document.getElementById("hide2").style.display="none";
        document.getElementById("hide3").style.display="none";
    }else if(t2.checked){
        document.getElementById("hide1").style.display="block";
        document.getElementById("hide2").style.display="block";
        document.getElementById("hide3").style.display="block";
    }
}
//delete modal
var patientdModal = document.getElementById("dlModal");

var deletebtn = document.getElementById("dlbtn");

deletebtn.onclick = function() {
    patientdModal.style.display = "block";
}

window.onclick = function(event) {
    if (event.target == patientModal) {
        patientModal.style.display = "none";
    }
    if (event.target == patientdModal) {
        patientdModal.style.display = "none";
    }
}

//savemodal

var savemodal = document.getElementById("saveModal");

var cancelModal = document.getElementById("cl-button");


cancelModal.onclick = function() {
    savemodal.style.display = "block";
}

window.onclick = function(event) {
    if (event.target == savemodal) {
        savemodal.style.display = "none";
    }

}

function calcAge(d,a){
    console.log("In function");
    var temp=document.getElementById(d);
    var dob_entry=temp.value;
    if(dob_entry!=""){
        console.log(dob_entry);
        var split_dob = dob_entry.split("/");
        var month = split_dob[0];
        var day = split_dob[1];
        var year = split_dob[2];
        var ageValue = 0;
        var condition1 = parseInt(month+day);

        var today_date = new Date();
        var today_year = (today_date.getFullYear()).toString();
        var today_day = (today_date.getDate()).toString();
        var today_month= (today_date.getMonth()+1).toString();
        var condition2 = parseInt(today_month+today_day);

        if(condition2>=condition1){
            ageValue = parseInt(today_year-parseInt(year));
        }else{
            ageValue = parseInt(today_year-parseInt(year)-1);
        }
        console.log(ageValue);

        document.getElementById(a).value=ageValue;
    }
   
}




/*for personal inf page validation*/
function nricdiv(x){
    var p=document.getElementById(x);
    var n=p.value;
    
    n = n.split('-').join(''); 
   
    let finalVal = n.match(/.{1,6}/g).join('-');
    finalVal = finalVal.match(/.{1,11}/g).join('-');
    if(finalVal.length>14){
        p.value = "";
        alert("Length of NRIC field should be 12")
    }else{
        p.value = finalVal;
    }
    
}