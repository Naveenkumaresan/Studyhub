const scriptURL = 'https://script.google.com/macros/s/AKfycbxvtYxkhF5PkJyMAueEq5XfUt7RdRM1isbMkUZLCD_0R2Ps4VGOREA1nxIzqWdnc3HQPQ/exec';
const form = document.forms['submit-to-google-sheet'];
// const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
  e.preventDefault();
  // Run validation function before submitting the form
  if (validate()) {
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
      .then(response => {
        if (response.ok) {
          alert("Thanks for your feedback! 😊");
          // msg.innerHTML = "Your feedback has been submitted. Thank you for taking the time to provide it 😊";
          // setTimeout(function(){
          //   msg.innerHTML = "";
          // },2000)
          form.reset();
        } else {
          throw new Error('Network response was not ok.');
        }
      })
      .catch(error => console.error('Error!', error.message));
  }
});

function validate() {
var nam = document.getElementById("name").value;

  var email = document.getElementById("email").value;
  var emailregex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/;
  var mgf = document.getElementById("msgage").value;

  if (nam ==="") {
    alert("Enter Your Name");
    return false;
  }
  else if (!emailregex.test(email)) {
    alert("Email is Error.");
    return false;
  }   
  else if (mgf === "") {
    alert("Please Fill The Details");
    return false;
  } 
  else{
    alert("Please Wait 2 to 3 sec to submit your form");
  }

  return true; // If all validations pass
}