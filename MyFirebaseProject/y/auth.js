const firebaseConfig = {
    apiKey: "AIzaSyCOwWXMTEbfCiN9V5P5MvYTiOHv_CTuie0",
    authDomain: "capstone-51f7a.firebaseapp.com",
    databaseURL: "https://capstone-51f7a-default-rtdb.firebaseio.com",
    projectId: "capstone-51f7a",
    storageBucket: "capstone-51f7a.appspot.com",
    messagingSenderId: "890831157760",
    appId: "1:890831157760:web:8283d94d6037f51db0f6e5"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth(); 


// auth.onAuthStateChanged((user) => {
//     if (user) {
//       console.log('User logged in:', user);
//       window.location.href = 'transition.html';
//     }
//   });
  

  const loginForm = document.querySelector('#loginForm');  
  const btnLogin = document.querySelector('#btnLogin');    
  

  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('Login form submitted');
    

    const email = loginForm['email'].value;
    const password = loginForm['password'].value;
  

    auth.signInWithEmailAndPassword(email, password)
      .then((cred) => {
        console.log('Login successful:', cred.user);

        loginForm.reset();
        window.location.href = 'transition.html';
      })
      .catch((err) => {
        console.error('Login error:', err.message);
        alert('Error: ' + err.message);
      });



      auth.onAuthStateChanged((user) => {
        if (user) {
            console.log('User is logged in:', user);
           
            if (window.location.pathname === '/login.html') {
                window.location.href = 'transition.html';
            }
        } else {
            console.log('No user is logged in.');
          
            if (window.location.pathname !== '/login.html') {
                window.location.href = 'login.html';
            }
        }
    });
    
  });