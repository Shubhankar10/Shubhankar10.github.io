/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("Drop").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  } 
function myFunction2() {
  document.getElementById("Drop2").classList.toggle("show");
}

function openlogin(){
//If condition to close QR form if open when you open Login form
  if(document.getElementById('QRForm').style.display=='block'){
  document.getElementById('QRForm').style.display='none' ;
  }
  document.getElementById("LogForm").style.display="block";
  return 1;
}

function closelogin(){
  document.getElementById('LogForm').style.display='none' ;
}


function openQR(){ 
//If condition to close Login form if open when you open QR form
  if(openlogin()){
    closelogin();
  }
  document.getElementById('QRForm').style.display='block' ;
  return 1;
}

function closeQR(){
  document.getElementById('QRForm').style.display='none' ;
}

