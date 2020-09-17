"use strict";

// ========== Firebase sign in functionality ========== //

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-4KTzeiWlMv0RkZFrdhPjHqWGY5DwDBU",
  authDomain: "web-app-ae1f3.firebaseapp.com",
  databaseURL: "https://web-app-ae1f3.firebaseio.com",
  projectId: "web-app-ae1f3",
  storageBucket: "web-app-ae1f3.appspot.com",
  messagingSenderId: "409005069691",
  appId: "1:409005069691:web:983769dc4b050df29ad9de",
  measurementId: "G-8XVHT8Y30Z"
};



// Initialize Firebase
firebase.initializeApp(firebaseConfig);
let _firebaseUI;

// ========== FIREBASE AUTH ========== //
// Listen on authentication state change
firebase.auth().onAuthStateChanged(function (user) {
  if (user) { // if user exists and is authenticated
    userAuthenticated(user);
  } else { // if user is not logged in
    userNotAuthenticated();
  }
});

function userAuthenticated(user) {
  appendUserData(user);
  showPage("home");
  showLoader(false);
}

// function home() {
//  showPage("home");
//  hideTabbar(false); 
//  document.getElementById("interests").style.display = 'none';
//}



function userNotAuthenticated() {
  showPage("login");

  // Firebase UI configuration
  const uiConfig = {
    credentialHelper: firebaseui.auth.CredentialHelper.NONE,
    signInOptions: [
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
      firebase.auth.GoogleAuthProvider.PROVIDER_ID
    ],
    signInSuccessUrl: '#interests'
  };
  // Init Firebase UI Authentication
  if (!_firebaseUI) {
    _firebaseUI = new firebaseui.auth.AuthUI(firebase.auth());
  }
  _firebaseUI.start('#firebaseui-auth-container', uiConfig);
  showLoader(false);
}




// sign out user
function logout() {
  firebase.auth().signOut();
}

function appendUserData(user) {
  document.querySelector('#profilename').innerHTML += `
    <h4>${user.displayName}</h4>
  `;
}


// gå til forrige side funktion (pernille)

function goBack() {
  window.history.back();
}