var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}


var sidemenu = document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.right = "0";
}
function closemenu(){
    sidemenu.style.right = "-200px";
}


// -------------- About ------------

// Get references to the elements
const envelope = document.getElementById('envelope');
const tooltip = document.getElementById('tooltip');
const mailLink = document.getElementById('mail-link');
const tooltipContent = document.querySelector('.tooltip-content');
const originalTooltipText = 'Click to copy email address';

// Function to reset the tooltip text to the original text
function resetTooltipText() {
  tooltipContent.textContent = originalTooltipText;
}

// Function to hide the tooltip when the mouse moves away from the envelope
function hideTooltipOnMouseLeave() {
  tooltip.classList.remove('active');
  resetTooltipText(); // Reset the tooltip text
}

// Attach a click event listener to the envelope icon to copy the email address to the clipboard
envelope.addEventListener('click', function () {
  const emailAddress = 'juldiaz81@gmail.com'; // Replace with the actual email address
  copyToClipboard(emailAddress);
  tooltipContent.textContent = 'Email address copied to clipboard';
  tooltip.classList.add('active');
  setTimeout(function () {
    tooltip.classList.remove('active');
    resetTooltipText(); // Reset the tooltip text after a delay
  }, 2000);
});

// Attach a mouseleave event listener to the envelope icon to hide the tooltip and reset the text
envelope.addEventListener('mouseleave', hideTooltipOnMouseLeave);

// Prevent the default behavior of the mail link (prevents opening the email client)
mailLink.addEventListener('click', function (e) {
  e.preventDefault();
});

// Function to copy text to clipboard
function copyToClipboard(text) {
  const dummy = document.createElement('textarea');
  dummy.value = text;
  document.body.appendChild(dummy);
  dummy.select();
  document.execCommand('copy');
  document.body.removeChild(dummy);
}



// ------------ Portfolio ----------

// Get references to the button and .row-2
const seeMoreBtn = document.getElementById('see-more-btn');
const row2 = document.querySelector('.row-2');

// Function to toggle the "show" class on .row-2
function toggleRow2() {
  row2.classList.toggle('show');
}

let isShowingLess = false; // Variable to track whether "Show less" is active

// Function to update the button text based on the current state
function updateButtonText() {
  if (isShowingLess) {
    seeMoreBtn.textContent = 'Show less';
  } else {
    seeMoreBtn.textContent = 'Show more';
  }
}

// Attach a click event listener to the "See more" button
seeMoreBtn.addEventListener('click', function (e) {
  e.preventDefault();
  toggleRow2(); // Toggle the "show" class on .row-2
  isShowingLess = !isShowingLess; // Toggle the state
  updateButtonText(); // Update the button text
});




// ------------- Portfolio Modal ----------

    // Get all elements with the open-modal class
    const openModalButtons = document.querySelectorAll(".open-modal");

    // Add click event listeners to open modals
    openModalButtons.forEach((button) => {
        button.addEventListener("click", function (e) {
            e.preventDefault(); // Prevent the default link behavior
            // Get the corresponding modal based on the button's href attribute
            const modalId = this.getAttribute("href").replace("#", "");
            const modal = document.getElementById(modalId);

            // Display the modal
            if (modal) {
                modal.style.display = "flex";
            }
        });
    });

    // JavaScript to close the modal (similar to your previous code)
    const closeButtons = document.querySelectorAll(".close");
    closeButtons.forEach((button) => {
        button.addEventListener("click", function () {
            const modal = this.closest(".modal");
            if (modal) {
                console.log(modal.style.display);
                modal.style.display = "none";
            }
        });
    });

    window.addEventListener("click", function (event) {
        if (event.target.classList.contains("modal")) {
            event.target.style.display = "none";
        }
    });



    const line1 = "Hi, I'm Julian.";
    const line1Element = document.getElementById("line1");
    
    // Function to replace animated text with static text
    function replaceWithStaticText() {
        console.log()
        line1Element.textContent = line1; // Replace with static text
        line1Element.style.borderRight = "none"; // Hide cursor
        line1Element.style.animation = "none"; // Stop animation
    }
    
    // Set a timeout to replace with static text after animation is complete
    setTimeout(replaceWithStaticText, 3500); // Adjust the timing to match your animation duration
    
    