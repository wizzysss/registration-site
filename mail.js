const firebaseConfig = {
    apiKey: "AIzaSyBvNt0XIVN0a0hk9Ze2KLOuXrUBuiGk20I",
    authDomain: "register-b7792.firebaseapp.com",
    databaseURL: "https://register-b7792-default-rtdb.firebaseio.com",
    projectId: "register-b7792",
    storageBucket: "register-b7792.appspot.com",
    messagingSenderId: "553933789659",
    appId: "1:553933789659:web:066d4f6c8759fa462e2ffe"
  };
  
  // initialize firebase
  firebase.initializeApp(firebaseConfig);
  
  // reference your database
  var contactFormDB = firebase.database().ref("contactForm");
  
  document.getElementById("contactForm").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    var name = getElementVal("name");
    var emailid = getElementVal("emailid");
    var msgContent = getElementVal("msgContent");
    var course = getElementVal("course");
    var birthday = getElementVal("birthday");
  
    saveMessages(name, emailid, msgContent,course,birthday);
  
    //   enable alert
    document.querySelector(".alert").style.display = "block";
  
    //   remove the alert
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);
  
    //   reset the form
    document.getElementById("contactForm").reset();
  }
  
  const saveMessages = (name, emailid, msgContent,course,birthday) => {
    var newContactForm = contactFormDB.push();
  
    newContactForm.set({
      name: name,
      emailid: emailid,
      msgContent: msgContent,
      course: course,
      birthday: birthday,
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };
