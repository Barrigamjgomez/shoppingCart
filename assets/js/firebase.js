function Register(){
  console.log("diste un click");
  let email= document.getElementById('email').value;
  let password= document.getElementById('password').value;

  firebase.auth().createUserWithEmailAndPassword(email, password)
  .catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
  });
}

function Ingress(){
  let emails=document.getElementById('emails').value;
  let passwords= document.getElementById('passwords').value;

  firebase.auth().signInWithEmailAndPassword(emails, passwords)
  .catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
});
}

function  Observer(){
  firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    console.log("Existe usuario activo");
    exhibit();
    // User is signed in.
    var displayName = user.displayName;
    var email = user.email;
    console.log();
    var emailVerified = user.emailVerified;
    var photoURL = user.photoURL;
    var isAnonymous = user.isAnonymous;
    var uid = user.uid;
    var providerData = user.providerData;
    // ...
  } else {
    // User is signed out.
    // ...
    console.log("No existe usuario activo");
  }
});
}
Observer();

function exhibit(){
  let content= document.getElementById('content');
  content.innerHTML= `<p>¡Bienvenido!</p>
  <button onclick="Closed()" type="button" name="button">Cerrar Sesión</button>`;
}
