// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAMeTnYqzTHuOwEs96S3gFA-umYwZrodgE",
  authDomain: "bobjeffco-4ab29.firebaseapp.com",
  databaseURL: "https://bobjeffco-4ab29.firebaseio.com",
  projectId: "bobjeffco-4ab29",
  storageBucket: "bobjeffco-4ab29.appspot.com",
  messagingSenderId: "996699709767",
  appId: "1:996699709767:web:2eb1c349b44de7a307ac62",
  measurementId: "G-DKRY422D24"
}
firebase.initializeApp(firebaseConfig);
firebase.analytics();
const google = new firebase.auth.GoogleAuthProvider();
const github = new firebase.auth.GithubAuthProvider();
/*
 * o(*●ω●*)ブ Hi!
 * We are BobJeffCo!
 * Welcome to the code!
 * Why are you here!
----------------------------------------------------------------------------------------------------------------------------
 * © Bob & Jeff Co.
 * © Google LLC
 * © Fonticons Inc.
 * © Twitter & Bootstrap authors
 * Made with 💖
 * A Note: Rowan C is awesome and coded all of this.
 * ( ﾟ ω ﾟ)つ Bye!
 */

function signUp() {
	firebase.auth().createUserWithEmailAndPassword(document.getElementById('email').value, document.getElementById('password').value)
		.then((user) => {
			msgSignUp('Signed Up!', false);
		})
		.catch((error) => {
			msgSignUp('Error ' + error.code + ' ' + error.message, true)
		});
	firebase.analytics().logEvent('signedUp', { name: 'signedUp'});
}
function signIn() {// 🅱
	firebase.auth().signInWithEmailAndPassword(document.getElementById('email').value, document.getElementById('password').value)
		.then((user) => {
			msgSignUp('Signed In!', false);
		})
		.catch((error) => {
			msgSignUp('Error ' + error.code + ' ' + error.message, true);
		});
}
function signOut() {
	firebase.auth().signOut();
	msgSignUp('Signed Out', false);
}
function boxShadowGSign() {
	document.querySelector('.google-sign-in').style.boxShadow = `1px 1px 0px #999,
				2px 2px 0px #999,
                3px 3px 0px #999,
                4px 4px 0px #999,
                5px 5px 0px #999,
                6px 6px 0px #999`;
}
function boxShadowGSign() {
	document.querySelector('.google-sign-in').style.boxShadow = `1px 1px 0px #999,
				2px 2px 0px #999,
                3px 3px 0px #999,
                4px 4px 0px #999,
                5px 5px 0px #999,
                6px 6px 0px #999`;
}
function boxShadowGiSign() {
	document.querySelector('.github-sign-in').style.boxShadow = `1px 1px 0px #999,
				2px 2px 0px #999,
                3px 3px 0px #999,
                4px 4px 0px #999,
                5px 5px 0px #999,
                6px 6px 0px #999`;
}
function signInGoogle() {
	firebase.auth().signInWithPopup(google).then((result) => {
		msgSignUp('Signed In!', false);
	}).catch((error) => {
		msgSignUp(`Error ${error.code} ${error.email} ${error.credential} ${error.message}`, true);
	});
}
function signInGithub() {
	firebase.auth().signInWithPopup(github).then((result) => {
		msgSignUp('Signed Up!', false);
	}).catch((error) => {
		msgSignUp(`Error ${error.code} ${error.email} ${error.credential} ${error.message}`, true);
	});
}

function openCss() { // ©🅿®!
	document.getElementById('signUp').style.display = 'block';
	document.getElementById('signUp').style.width = '400px';
	document.getElementById('signUp').style.height = window.outerHeight + 'px';
	if (window.outerWidth < 980) {
		document.getElementById('signUp').style.width = window.outerWidth + 'px';
		document.getElementById('signUp').style.height = window.outerHeight + 'px';
	}
	document.getElementById('signUpBtnTxt').innerHTML = 'Close';
	document.getElementById('signUpClose').setAttribute('onclick', 'closeCss()');
}
function closeCss() {
	document.getElementById('signUp').style.display = 'none';
	document.getElementById('signUp').style.width = '0px';
	document.getElementById('signUp').style.height = '0px';
	document.getElementById('signUpBtnTxt').innerHTML = 'Sign Up';
	document.getElementById('signUpClose').setAttribute('onclick', 'openCss()');
}

function msgSignUp(msg, err) {
	var msgArea = document.getElementById('messageSignUp');
	msgArea.style.height = window.outerHeight;
	msgArea.style.width = window.outerHeight;
	if (err) {
		msgArea.style.backgroundColor = 'Crimson';
		msgArea.innerHTML = '<span class="fas fa-skull-crossbones"></span><span style="color:yellow;">' + '	' + msg + '</span>';
	} else {
		msgArea.innerHTML = '<span style="color:LawnGreen; font-size:20px;">' + msg + '</span>';
	}
	var time = 0;
	for (var i = 0; i < msg.length; i++) {
		var time = time + 50;
	}
	var time = time + 1000;
	setTimeout(() => {
		msgArea.innerHTML = '';
		msgArea.style.backgroundColor = 'white';
		msgArea.style.width = 'auto'
		msgArea.style.height = 'auto'
	}, time);
}
