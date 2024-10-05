const modal = document.getElementById("popupModal");
const closeBtn = document.getElementById("continueBtn");
const userOptionsButton = document.getElementById("userOptionsButton");
const dropdownMenu = document.querySelector(".dropdown-menu");
const studyhubSection = document.querySelector(".container-fluid.nb");

window.onload = () => { 
  const popupShown = sessionStorage.getItem("popupShown");
  if (!popupShown) {
    modal.style.display = "block";
    document.body.classList.add('modal-overlay', 'modal-disabled'); 
    userOptionsButton.classList.add('disabled'); 
    dropdownMenu.classList.add('disabled'); 
    studyhubSection.classList.add('disabled'); 

    window.addEventListener("storage", (event) => {
      if (event.key === "popupShown" && event.newValue === "true") {
        closePopup(); 
      }
    });
  }
};

closeBtn.onclick = () => {
  closePopup();
};

function closePopup() {
  modal.style.display = "none"; 
  sessionStorage.setItem("popupShown", "true"); 
  localStorage.setItem("popupShown", "true");

  // Debugging logs
  console.log("Closing popup and removing disabled classes");

  document.body.classList.remove('modal-overlay', 'modal-disabled'); 
  userOptionsButton.classList.remove('disabled'); 
  dropdownMenu.classList.remove('disabled'); 
  studyhubSection.classList.remove('disabled'); 
}

window.onclick = (event) => {
  if (event.target === modal) {
    return; 
  }
};
