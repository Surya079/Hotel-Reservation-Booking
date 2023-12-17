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
var contactFormDB = firebase.database().ref("contactForm2");

document.getElementById("contactForm2").addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();

    var name = getElementVal("name");
    var email = getElementVal("email");
    var phone = getElementVal("phone");
    var adult = getElementVal("adult");
    var child = getElementVal("child");
    var checkin_date = getElementVal("checkin-date");
    var checkout_date = getElementVal("checkout-date");
    var room_selection = getElementVal("room-selection");
    var message = getElementVal("message");
    
   
        //   enable alert
        document.querySelector('.popup').classList.add("open-popup");
        //   remove the alert
        // setTimeout(() => {
        //     document.querySelector(".alert").style.display = "none";
        // }, 3000);

        saveMessages(name, email, phone, adult,child,checkin_date,checkout_date,room_selection,message);
        //   reset the form
        document.getElementById("contactForm2").reset();
    }


const saveMessages = (name, email, phone, adult,child,checkin_date,checkout_date,room_selection,message) => {
    var newContactForm = contactFormDB.push();

    newContactForm.set({
        name :name,
        email : email,
        phone : phone, 
        adult : adult,
        child : child ,
        checkin_date:checkin_date,
        checkout_date:checkout_date,
        room_selection:room_selection,
        message:message,
    });
};

const getElementVal = (id) => {
    return document.getElementById(id).value;
};