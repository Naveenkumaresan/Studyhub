document.addEventListener("DOMContentLoaded", function () {
  var navbar = document.getElementById("leftNavbar");
  navbar.style.left = "-200px"; // Initialize navbar to be closed
});

document.getElementById("studyhubToggle").addEventListener("click", function (event) {
    var navbar = document.getElementById("leftNavbar");
    if (navbar.style.left === "0px") {
        navbar.style.left = "-200px";
        event.target.innerHTML = ''; // Change toggle button icon to bars
    } else {
        navbar.style.left = "0px";
        event.target.innerHTML = ''; // Change toggle button icon to times
    }
    event.stopPropagation(); 
});

document.getElementById("studyhub").addEventListener("click", function (event) {
  var navbar = document.getElementById("leftNavbar");
  if (navbar.style.left === "0px") {
    navbar.style.left = "-200px";
  } else {
    navbar.style.left = "0px";
  }
  event.stopPropagation(); 
});

document.addEventListener("click", function (event) {
  var navbar = document.getElementById("leftNavbar");
  var toggleButton = document.getElementById("studyhub"); 
  if (
    navbar.style.left === "0px" &&
    !event.target.closest("#leftNavbar") &&
    event.target !== toggleButton
  ) {
    navbar.style.left = "-200px";
    document.getElementById("studyhubToggle").innerHTML =
      '<i class="fa fa-bars" aria-hidden="true"></i>'; // Change toggle button icon to bars
  }
});

document
  .getElementById("studyhubToggle")
  .addEventListener("click", function () {
    var icon = this.querySelector("i.fa");
    icon.classList.toggle("fa-bars");
    icon.classList.toggle("fa-times");
    // Toggle additional class for X shape if needed
    this.classList.toggle("x-shape");
  });

window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");

  loader.classList.add("loader--hidden");

  loader.addEventListener("transitionend", () => {
    document.body.removeChild(loader);
  });
});

function myFunction(element) {
  var copyText = element.parentNode.previousElementSibling;
  copyText.select();
  copyText.setSelectionRange(0, 99999); 
  navigator.clipboard
    .writeText(copyText.value)
    .then(function () {
      var button = element.parentNode;
      button.classList.add("copied");
      setTimeout(function () {
        button.classList.remove("copied");
      }, 1000);
    })
    .catch(function (err) {
      console.error("Failed to copy: ", err);
    });
}

function copyText(button) {
  var textToCopy = button.parentNode.querySelector("input");
  textToCopy.select();
  textToCopy.setSelectionRange(0, 99999); 
  try {
    var successful = document.execCommand("copy");
    if (successful) {
      button.classList.add("copied");
      setTimeout(function () {
        button.classList.remove("copied");
      }, 2000); // Reset after 2 seconds
    } else {
      console.error("Failed to copy text. Please select and copy manually.");
    }
  } catch (err) {
    console.error("Failed to copy text. Please select and copy manually.");
  }
}
document.addEventListener("DOMContentLoaded", function () {
    let online = document.getElementById("online");
    let offline = document.getElementById("offline");
  
    function hideOnlineIndicator() {
      online.style.display = "none";
    }
  
    window.addEventListener("online", function () {
      online.style.display = "block";
      setTimeout(hideOnlineIndicator, 10000); 
    });
  
    window.addEventListener("offline", function () {
      offline.style.display = "block";
    });
  });
  

var toastElement = document.getElementById('myToast');
var toast = new bootstrap.Toast(toastElement);
toast.show();
setTimeout(function() {
    toast.hide();
}, 5000);



function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}


// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}


document.addEventListener('keydown', (event) => {
  // Disable F12
  if (event.key === 'F12') {
      event.preventDefault();
  }
  // Disable Ctrl + Shift + I
  if (event.ctrlKey && event.shiftKey && event.key === 'I') {
      event.preventDefault();
  }
  // Disable Ctrl + U (View Source)
  if (event.ctrlKey && event.key === 'U') {
      event.preventDefault();
  }
});

