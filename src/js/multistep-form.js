window.onresize=formtoggle;
function formtoggle(){
    var f1=document.getElementById("form1");
    var f2=document.getElementById("form2");
    if(window.innerWidth<1091){
        f1.style.display="block";
        f2.style.display="none";
    }else{
        f1.style.display="none";
        f2.style.display="block";
    }
}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab

function showTab(n) {
  // This function will display the specified tab of the form...
  var x = document.getElementsByClassName("tab");
  if(n==1){
    x[n].style.display = "block";
  }else{
    x[n].style.display = "block";
  }
  
  //... and fix the Previous/Next buttons:
  if (n == (x.length - 1)) {
    document.getElementById("nextBtn").innerHTML = "Prev";
    document.getElementById('nextBtn').style.marginTop="28vh"
  } else {
    document.getElementById("nextBtn").innerHTML = "Next";
    document.getElementById('nextBtn').style.marginTop="31vh";

  }

}

function nextPrev() {
  
  // This function will figure out which tab to display
  var x = document.getElementsByClassName("tab");
  // Hide the current tab:
  x[currentTab].style.display = "none";
  if(currentTab==1){
    currentTab=0;
  }else{
    currentTab=1;
  }
  // Otherwise, display the correct tab:
  showTab(currentTab);
}




function spousetoggle(){
  var inp=document.getElementById("singleLabel");
  if(inp.checked==true){
    document.getElementById("togglediv").style.display="none";
  }else{
    document.getElementById("togglediv").style.display="flex";

  }
}