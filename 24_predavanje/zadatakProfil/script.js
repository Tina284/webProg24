
function izmjena(event) {
    event.preventDefault(); 
    
    var ime = document.getElementById("ime").value;
    var prezime = document.getElementById("prezime").value;
    var spol = document.getElementById("spol").value;
    var email = document.getElementById("email").value;
    
  
    if (ime && prezime && spol && email) {
  
    document.getElementById("naslov").innerText = ime + " " + prezime;
  
   if (spol === "Ž") {
      document.body.style.backgroundColor = "pink";
    } else {
      document.body.style.backgroundColor = "blue";
    }
    }
   
  };
