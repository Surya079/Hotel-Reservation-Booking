
//config
const firebaseConfig = {
    apiKey: "AIzaSyAPxL4A8KfNN_Y_ZJKLJDcoePAdofInbqU",
    authDomain: "royal-resot.firebaseapp.com",
    databaseURL: "https://royal-resot-default-rtdb.firebaseio.com",
    projectId: "royal-resot",
    storageBucket: "royal-resot.appspot.com",
    messagingSenderId: "500347658204",
    appId: "1:500347658204:web:25760c804dc91bda6ef919",
    measurementId: "G-38YGTTC68M"
    };


// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();

    var name = getElementVal("name");
    var mail = getElementVal("mail");
    var mobnum = getElementVal("mobnum");
    
    console.log(name,mail,mobnum);

    if (!name && !mail && !mobnum) {
        document.querySelector(".name").style.display = "block";

        setTimeout(() => {
            document.querySelector(".name").style.display = "none";
        }, 3000);
    } else if (!name) {
        document.querySelector(".name").style.display = "block";

        setTimeout(() => {
            document.querySelector(".name").style.display = "none";
        }, 3000);
    } else if (!mail) {
        document.querySelector(".email").style.display = "block";

        setTimeout(() => {
            document.querySelector(".email").style.display = "none";
        }, 3000);
    }
    else if (!mobnum) {
        document.querySelector(".number").style.display = "block";

        setTimeout(() => {
            document.querySelector(".number").style.display = "none";
        }, 3000);
    }
    else {
        //   enable alert
        document.querySelector(".alert").style.display = "block";

        //   remove the alert
        setTimeout(() => {
            document.querySelector(".alert").style.display = "none";
        }, 3000);

        saveMessages(name, mail, mobnum);
        //   reset the form
        document.getElementById("contactForm").reset();
    }

}

const saveMessages = (name, mail, mobnum) => {
    var newContactForm = contactFormDB.push();

    newContactForm.set({
        name: name,
        mail: mail,
        mobnum: mobnum,
    });
};

const getElementVal = (id) => {
    return document.getElementById(id).value;
};