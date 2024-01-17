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


// quiz 23 progress bar
const textnone = document.querySelector('.text-none');
const textnone2 = document.querySelector('.text-none-2');
const textnone3 = document.querySelector('.text-none-3');
const popup1 = document.getElementById('popup')
const popup2 = document.getElementById('popup-2')
const popup3 = document.getElementById('popup-3')
const secondarycontainer = document.querySelector('.secondary-container');
const textchange = document.querySelector('.text-change');
const thirdcontainer = document.querySelector('.third-container');
const firstprogresscontainer = document.querySelector('.first-progress-container')
const secondprogresscontainer = document.querySelector('.second-progress-container')
const thirdprogresscontainer = document.querySelector('.third-progress-container')
const progressBar = document.getElementById('progress-bar'); // First progress bar
const progressBar2 = document.getElementById('progress-bar-2'); // Second progress bar
const progressBar3 = document.getElementById('progress-bar-3'); // third progress bar
const percentage = document.querySelector('.percentage'); // First percentage bar
const percentage2 = document.querySelector('.percentage-2'); // Second percentage bar
const percentage3 = document.querySelector('.percentage-3'); // third percentage bar
const popupContainer = document.querySelector('.popup-container');
const popupContainer2 = document.querySelector('.popup-container-2'); // Correct popup container for the second progress bar
const popupContainer3 = document.querySelector('.popup-container-3'); // Correct popup container for the third progress bar
const yesButton = document.querySelector('.yes-button');
const noButton = document.querySelector('.no-button');
const yesButtontwo = document.querySelector('.yes-button-2'); // Yes button for the second progress bar
const noButtontwo = document.querySelector('.no-button-2'); // No button for the second progress bar
const yesButtonthree = document.querySelector('.yes-button-3'); // Yes button for the third progress bar
const noButtonthree = document.querySelector('.no-button-3'); // No button for the third progress bar
const completionDiv = document.getElementById('completionDiv');
const completionDivtwo = document.getElementById('completionDiv-two');
const completionDivthree = document.getElementById('completionDiv-three');
const showbutton = document.querySelector('.btn')
const icons = document.querySelector('.icons')


let progress = 0; // Progress for the first progress bar
let progressTwo = 0; // Progress for the second progress bar
let progressthree = 0;// Progress for the third progress bar
let isPopupVisible = false; // Popup visibility for the first progress bar
let isPopupVisible2 = false; // Popup visibility for the second progress bar
let isPopupVisible3 = false; // Popup visibility for the third progress bar



function updateProgressBar() {
    if (!isPopupVisible) {
        progressBar.style.width = `${progress}%`;
        percentage.textContent = `${progress}%`;

        if (progress === 50) {
            // Show the pop-up when the progress reaches 50% for the first progress bar
            popupContainer.style.display = 'flex';
            isPopupVisible = true;
            // Pause the progress
        }
       
        if (progress >= 100) {
            // Hide the first progress bar and show the completion code when it reaches 100%
            textnone.style.display='none';
            progressBar.style.display = 'none';
            percentage.style.display = 'none';
            secondarycontainer.style.display = 'block';
            completionDiv.style.display = 'flex'; // Show the completion code for the first bar
            popupContainer.style.display='none'  
            popup1.style.display='none'
            firstprogresscontainer.style.display='none';
          
            // Reset the progress for the first bar
            progress = 0;
            // Start the second progress bar
            setTimeout(updateProgressBartwo, 0); // Delay the start of the second progress bar
        }

        // Increment the progress for the first bar
        progress++;
        // Update the progress every 100ms
        setTimeout(updateProgressBar, 100);
    }
}

updateProgressBar();


// Event listeners for the Yes and No buttons for the first progress bar
yesButton.addEventListener('click', () => {
    popupContainer.style.display = 'none';
    isPopupVisible = false;
    // Continue the progress bar
    updateProgressBar();
});

noButton.addEventListener('click', () => {
    popupContainer.style.display = 'none';
    isPopupVisible = false;
    // Continue the progress bar
    updateProgressBar();
});

function updateProgressBartwo() {
    if (!isPopupVisible2) {
        progressBar2.style.width = `${progressTwo}%`;
        percentage2.textContent = `${progressTwo}%`;

        // Only show the popup if it's not already visible and the progress reaches 33% or 67% for the second progress bar
        if (progressTwo === 33) {
            // Show the pop-up when the progress reaches 50% for the first progress bar
            popupContainer2.style.display = 'flex';
            isPopupVisible2 = true;
        }
        if (progressTwo === 67) {
            // Show the pop-up when the progress reaches 50% for the first progress bar
            popupContainer2.style.display = 'flex';
            isPopupVisible2 = true;
            textchange.innerHTML='Are you sure?'
        }

        if (progressTwo >= 100) {
            // Hide the second progress bar and show the completion code when it reaches 100%
            textnone2.style.display='none';
            progressBar2.style.display = 'none';
            secondprogresscontainer.style.display='none';
            percentage2.style.display = 'none';
            thirdcontainer.style.display='block';
            completionDivtwo.style.display = 'flex'; // Show the completion code for the second bar
             popupContainer.style.display='none'  
             popup2.style.display='none';
          
             // thirdprogresscontainer.style.display='block'
            
            // Reset the progress for the second bar
            progressTwo = 0;
            
            setTimeout(updateProgressBarthree, 0); // Delay the start of the second progress bar
        
        }
        
        // Increment the progress for the second bar
        progressTwo++;
        // Update the progress every 100ms
        setTimeout(updateProgressBartwo, 100);
    }
}


// Event listeners for the Yes and No buttons for the second progress bar

yesButtontwo.addEventListener('click', () => {
    popupContainer2.style.display = 'none'; // Use the correct popup container
    isPopupVisible2 = false; // Reset the popup visibility for the second progress bar
    // Continue the progress bar for the second progress bar
    updateProgressBartwo();
});

noButtontwo.addEventListener('click', () => {
    popupContainer2.style.display = 'none'; // Use the correct popup container
    isPopupVisible2 = false; // Reset the popup visibility for the second progress bar
    // Continue the progress bar for the second progress bar
    updateProgressBartwo();
});

function updateProgressBarthree() {
    if (!isPopupVisible3) {
        progressBar3.style.width = `${progressthree}%`;
        percentage3.textContent = `${progressthree}%`;

        if (progressthree === 50) {
            // Show the pop-up when the progress reaches 50% for the third progress bar
            popupContainer3.style.display = 'flex';
            isPopupVisible3 = true;
            // Pause the progress
        }

        if (progressthree >= 100) {
            // Hide the third progress bar and show the completion code when it reaches 100%
            icons.style.display='none'
            showbutton.style.display='block';
            textnone3.style.display='none';
            progressBar3.style.display = 'none';
            percentage3.style.display = 'none';
            thirdprogresscontainer.style.display='none';
            completionDivthree.style.display = 'flex'; // Show the completion code for the third bar
            popup3.style.display = 'none';
            thirdprogresscontainer.style.display = 'none';
            // Reset the progress for the third bar
            progressthree = 0;
        }

        // Increment the progress for the third bar
        progressthree++;
        // Update the progress every 100ms
        setTimeout(updateProgressBarthree, 100);
    }
}

// Event listeners for the Yes and No buttons for the third progress bar

yesButtonthree.addEventListener('click', () => {
    popupContainer3.style.display = 'none'; // Use the correct popup container
    isPopupVisible3 = false; // Reset the popup visibility for the second progress bar
    // Continue the progress bar for the second progress bar
    updateProgressBarthree();
});

noButtonthree.addEventListener('click', () => {
    popupContainer3.style.display = 'none'; // Use the correct popup container
    isPopupVisible3 = false; // Reset the popup visibility for the second progress bar
    // Continue the progress bar for the second progress bar
    updateProgressBarthree();
});



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

// Add click event listeners to open and close the popup
// openPopupButton.addEventListener('click', openPopup);
closePopupButton.addEventListener('click', closePopup);
Odisappears.addEventListener('click', secondclosebtn);
Tablinksopen.addEventListener('click', opensecondtablinks)
openfirsttablink.addEventListener('click',  Tablinkfirstopen);