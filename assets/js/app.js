
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
  /*for (var i = 0; i < shirtMarket.length; i++) {
    image.push(shirtMarket[i].image);
    $('.thumbnail').append(`<img src="${image}" alt="...">`);
  }
  for (var i = 0; i < shirtMarket.length; i++) {
    description.push(shirtMarket[i].description);
    $('.thumbnail').append(`<p>${description}</p>`);
  }
  for (var i = 0; i < shirtMarket.length; i++) {
    precio.push(shirtMarket[i].Precio);
    $('.thumbnail').append(`<span>${precio}</span>`)
  }*/

});


/*
$(document).ready(function(){

 fetch(data.json)
 .then((response)=>{
 	console.log(data)
 	return data.json();
 })
.then(response)

})*/
