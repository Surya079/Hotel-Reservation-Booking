const firebaseConfig = {
    apiKey: "AIzaSyDCZE4y_EcJZFH6A6XhR963g2-ruXbFaKI",
    authDomain: "subu-ekart.firebaseapp.com",
    databaseURL: "https://subu-ekart-default-rtdb.firebaseio.com",
    projectId: "subu-ekart",
    storageBucket: "subu-ekart.appspot.com",
    messagingSenderId: "428392577927",
    appId: "1:428392577927:web:2ef551bedb7a7d094bf122",
    measurementId: "G-NC04XFTFZR"
  };

// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();

    var name = getElementVal("name");
    var phno = getElementVal("number");
    var mail = getElementVal("email");

      
    let nameField = document.querySelector(".name");
    let PhnoField = document.querySelector('.number');
    let emailField = document.querySelector('.email');
    
    
    if (!name ){
            //   enable alert
       nameField.style.display = "block";
       setTimeout(() => {
            nameField.style.display = "none";
  
        }, 3000);
    }
    else if(!phno){
        PhnoField.style.display = "block";
        setTimeout(() => {
            PhnoField.style.display = "none";
        }, 3000);
    }else if(!mail){
        emailField.style.display ="block";
        setTimeout(() => {
            emailField.style.display = "none";
        }, 3000);
    }else{
            //   remove the alert
         
        PhnoField.style.display = "none";
        emailField.style.display = "none";
        document.querySelector(".alert").style.display = "block";
        saveMessages(name, phno, mail, address);
        document.getElementById("contactForm").reset();
        setTimeout(() => {
            document.querySelector(".alert").style.display = "none";
        }, 3000);
        
    }
   
    //   reset the form
    
}

const saveMessages = (name, phno, mail) => {
    var newContactForm = contactFormDB.push();

    newContactForm.set({
        name: name,
        mail: mail,
        phno: phno,
    });
};

const getElementVal = (id) => {
    return document.getElementById(id).value;
};