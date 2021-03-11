var dt = new Date();

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];
const monthsIndex = dt.getMonth();
var str="";
var str2="";
str=str.concat(String(months[monthsIndex])).concat(" ").concat(String(dt.getDate()));
str=str.concat(", ").concat(String(dt.getFullYear()));

str2=str2.concat('\n').concat(String(dt.getHours())).concat(" : ");
var minutes=(String(dt.getMinutes()))

console.log(minutes.length);
if(minutes.length==1){
    var temp="0";
    console.log(temp);
    temp=temp.concat(minutes);
    console.log(temp);
    str2=str2.concat(temp)
}else{
    str2=str2.concat(minutes);
    console.log(minutes.length);
}


document.getElementById("date").innerHTML=str;
document.getElementById("time").innerHTML=str2;
// var month = (document.getElementById("month").innerHTML = months[monthsIndex]);

// var day = (document.getElementById("day").innerHTML = dt.getDate());

// var year = (document.getElementById("year").innerHTML = dt.getFullYear());

// var hour = (document.getElementById("hour").innerHTML = dt.getHours());
// let minutes = dt.getMinutes();
// var Minutelength = minutes.length;
// if (Minutelength < 1) {
//     var min = (document.getElementById("min").innerHTML = "0" + minutes);
// } else {
//     var min = (document.getElementById("min").innerHTML = minutes);
// }
//bithdaypicker

$(document).ready(function (event) {
    $("#birthday").datepicker();
    $(".fa-calendar-alt").click(function () {
        $("#birthday").focus();
    });

    $(".dropdown3").click(function () {
        $(".dropdown-content3").css("display", "block");
    });

    $("input[name=src]").change(function () {
        $(".dropdown-content3").css("display", "none");
    });
});

//footer icon change
$(document).ready(function () {
    $("#wriSav").click(function () {
        if ($("#change").attr("src") == "src/img/writing.png") {
            $("#change").attr("src", "src/img/save-file.png");
        } else {
            $("#change").attr("src", "src/img/writing.png");
        }
    });
});