function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }

  window.onclick = function(e) {
    if (!e.target.matches('#dropbtn')) {
    var myDropdown = document.getElementById("myDropdown");
      if (myDropdown.classList.contains('show')) {
        myDropdown.classList.remove('show');
      }
    }
  }

  function alertfunc(){
      alert("Under development!");
  }

function nad(){
  document.getElementById('admis').innerHTML="8780 Students";
}

function fun(){
  prompt ("This is a prompt box", "You tried to exit the website");
}

function fun(){
  prompt ("This is a prompt box", "You tried to exit the website");
}

function redir(){
  window.location = "index.html";  
}

document.cookie = "username = Chetan Amritanshu  expires=Thu, 21 July 2021 12:00:00 UTC";
 function cookies() {
     var x = document.cookie;
     document.getElementById("demo1").innerHTML = "Cookies associated with this document: "+x;
 }
 cookies();
 