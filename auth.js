console.log('Hello World!');
var firebaseConfig = {
    apiKey: "AIzaSyClL7pE-1kTSr2ouTpFHnwdvhW36rLgX2s",
    authDomain: "jnvcob.firebaseapp.com",
    databaseURL: "https://jnvcob.firebaseio.com",
    projectId: "jnvcob",
    storageBucket: "jnvcob.appspot.com",
    messagingSenderId: "69566502508",
    appId: "1:69566502508:web:be3e4ad98d78924cb7aa49",
    measurementId: "G-BH23ZFD2KB"
};
//Initialize Firebase
firebase.initializeApp(firebaseConfig);
console.log(firebase);
const auth = firebase.auth();
if (auth.isSignInWithEmailLink(window.location.href)) {
  var email = window.localStorage("emailid");
  if (!email) {
      email = window.prompt('please provide your email');
  }
auth.signInWithEmailLink(email,window.location.href).then(result => {
    window.location = "chat.html";
}).catch( error => {
    alert('something went wrong ,please try again later');
});
}