// check out popups
const openPopupButton = document.getElementById('open-popup');
const popupOverlay = document.getElementById('popup-overlay');
const popupOverlaytwo = document.getElementById('overlay-2');
const closePopupButton = document.getElementById('close-popup');
const Odisappears = document.getElementById('second-close-btn');  //exeptional
const secondpopup = document.querySelector('.second-popup')
const Tablinksopen = document.getElementById('tablinks')
const paypalcontent = document.getElementById('paypal')
const paymentform = document.getElementById('payment-form-open')
const openfirsttablink = document.getElementById('show-first-btn-content')
const btn = document.querySelector('.active')
const overlaytwo = document.getElementById('overlay-2')

// Add click event listeners to open and close the popup
// openPopupButton.addEventListener('click', openPopup);
closePopupButton.addEventListener('click', closePopup);
Odisappears.addEventListener('click', secondclosebtn);
Tablinksopen.addEventListener('click', opensecondtablinks)
openfirsttablink.addEventListener('click',  Tablinkfirstopen);



 // Function to open the popup
 function openPopup() {
    popupOverlay.style.display = 'block';

}

// Function to open the popup
function openPopup() {
    popupOverlay.style.display = 'block';
    console.log("button clicked")
}

// Function to close the popup and show the second popup only once
function closePopup() {
    popupOverlay.style.display = 'none';

    // Check if the second popup has already been shown
    if (!localStorage.getItem('secondPopupShown')) {
        secondpopup.style.display = 'block';
        overlaytwo.style.display = 'block';

        // Set a flag in local storage to indicate that the second popup has been shown
        localStorage.setItem('secondPopupShown', 'true');
    }
}

function secondclosebtn() {
    popupOverlay.style.display = 'none';
    secondpopup.style.display = 'none';
    overlaytwo.style.display = 'none';
}

function opensecondtablinks() {
    paypalcontent.style.display = 'none';
    paymentform.style.display = 'block';
    btn.style.borderColor = 'transparent';
    btn.style.backgroundColor = '#e4e5e7';
    Tablinksopen.classList.add("active");
}

function Tablinkfirstopen() {
    paypalcontent.style.display = 'block';
    paymentform.style.display = 'none';
    btn.style.borderColor = '';
    btn.style.backgroundColor = 'transparent';
    Tablinksopen.classList.remove("active");
}