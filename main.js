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
var email = document.getElementById("email");
var password = document.getElementById('password');
var btn = document.getElementById('btn');
var loginBtn = document.getElementById('login');
var init = document.getElementById('show_if_logout');
var emailverify = document.getElementById('emailverify');

//check for log in or not
auth.onAuthStateChanged(fUser => {
    if (fUser) {
   if (fUser.emailVerified) {
       window.location="chat.html";
   } else {
     init.style.display='none';
     emailverify.style.display = 'block';
       console.log('not verified');
   }  
      
        
    } else {
     //sign up functionality
btn.addEventListener('click', e => {
    var em = email.value;
    var pass = password.value;
    auth.createUserWithEmailAndPassword(em, pass).then(() => {
        console.log("hi");
        var actionCodesettings = {
            url: "https://jnvcob.firebaseapp.com",
            handleCodeInApp: true
        };
        auth.sendSignInLinkToEmail(em, actionCodesettings).then(() => {
            console.log('ok');
        }).catch((error) => { console.log(error); });
    }).catch(error => { console.log(error); });
})

//log in functionality
loginBtn.addEventListener("click", (y) => {
    var em = email.value;
    var pas = password.value;
    auth.signInWithEmailAndPassword(em, pas);
})

    }
});