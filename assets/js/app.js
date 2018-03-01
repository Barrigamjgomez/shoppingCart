$(document).ready(function(){
  for (let i = 0; i < shirtMarket.length; i++) {

      $('.muestrate').append('<div class="contenedor"><img class="imagen" src="' + shirtMarket[i].image
        +'"><div class="caption row"><div class="col-sm-12"><h5>'
        + shirtMarket[i].name+ '</h5><p>' + shirtMarket[i].description
        + '</p><span>' + shirtMarket[i].precio +'</span></div></div>'
        //parte boton
        + '<div class="row"><div class="col-sm-5 "><div class="paypal">'
        + '<form action="https://www.sandbox.paypal.com/cgi-bin/webscr" method="post" target="_top">'
        + '<input type="hidden" name="cmd" value="_s-xclick">'
        + '<input type="hidden" name="hosted_button_id" value="5A34WFDB5F8G4">'
        + '<input type="image" src="https://www.sandbox.paypal.com/en_US/i/btn/btn_buynow_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">'
        + '<img alt="" border="0" src="https://www.sandbox.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1">'
        + '</form></div></div></div></div></div></div></div>')

  }


// Get the modal1
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
   modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
   modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
   if (event.target == modal) {
       modal.style.display = "none";
   }
}
//FIN MODAL
});
