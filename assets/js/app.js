$(document).ready(function(){

let image= [];
let name= [];
let description=[]
let precio=[]
  for (let i = 0; i < shirtMarket.length; i++) {
    name.push(shirtMarket[i].name);
    $('.thumbnail').append(`<h5>${name}</h5>`)
  }
  for (var i = 0; i < shirtMarket.length; i++) {
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
  }

});
