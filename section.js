
fetch('/static/navbar.html')
    .then(response => response.text())
    .then(html => {
    document.getElementById('navi-bar').innerHTML = html;
    });

fetch('/static/footer.html')
    .then(response => response.text())
    .then(html => {
    document.getElementById('footer-sec').innerHTML = html;
    });

fetch('/static/contact_sec.html')
    .then(response => response.text())
    .then(html => {
    document.getElementById('contact-sec').innerHTML = html;
    });

fetch('/static/navbar-services.html')
    .then(response => response.text())
    .then(html => {
    document.getElementById('nav-bar-ser').innerHTML = html;
    });

fetch('/static/footer-services.html')
    .then(response => response.text())
    .then(html => {
    document.getElementById('footer-sec-ser').innerHTML = html;
});

window.addEventListener('load', function() {
    var loadingPage = document.querySelector('.loading-page');
    var mainContent = document.getElementById('main-content');

    // Hide the loading screen
    loadingPage.style.display = 'none';

    // Show the main content
    mainContent.style.display = 'block';
});

  // Check for Firefox and hide scrollbar (for cross-browser compatibility)
  var isFirefox = typeof InstallTrigger !== 'undefined';
  if (isFirefox) {
      document.documentElement.style.overflow = 'auto';
  }

  // let originalTitle = document.title; // Capture the original title

  window.addEventListener("blur", function() {
    document.title = "We are waiting... (AVingenious Team)";
  });

  window.addEventListener("focus", function() {
    document.title = "AVingenious Technologies | Web Design & Development, Digital Marketing Company";
  });
// fetch('/static/navbar.html')
//     .then(response => response.text())
//     .then(html => {
//     document.getElementById('common-section').innerHTML = html;
//     });

// fetch('/static/navbar.html')
//     .then(response => response.text())
//     .then(html => {
//     document.getElementById('common-section').innerHTML = html;
//     });

// fetch('/static/navbar.html')
//     .then(response => response.text())
//     .then(html => {
//     document.getElementById('common-section').innerHTML = html;
//     });

function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 77;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } 
      // Enable this for as if we go up the page again, then it will fade out the reveal claass one, we created another for thisfeature by "reveal-both"
        else {
            reveals[i].classList.remove("active");
        }
    }
  }
  
  window.addEventListener("scroll", reveal);

  

    

  const texttype = document.querySelector(".sec-texttype");

  const textLoad = () => {

    setTimeout(() => {

      texttype.textContent = "WEB DEVELOPMENT (BASIC)";

    }, 0);

    setTimeout(() => {

      texttype.textContent = "FULL-STACK WEB-DEVELOPMENT";

    }, 4000);

    setTimeout(() => {

      texttype.textContent = "DIGITAL MARKETING";

    }, 8000);
    setTimeout(() => {

      texttype.textContent = "MACHINE LEARNING";

    }, 12000);

    setTimeout(() => {

      texttype.textContent = "APP DEVELOPMENT";

    }, 16000);

    setTimeout(() => {

      texttype.textContent = "DATA ANALYTICS";

    }, 20000);

  }

  

  textLoad();

  setInterval(textLoad, 24000);




  // Night Mode Toggle Button

  document.addEventListener("DOMContentLoaded", function () {
    const nightModeToggle = document.getElementById("nightModeToggle");
    const body = document.body;

    // Retrieve the user's preference from local storage (if available)
    const nightModePreference = localStorage.getItem("nightMode");

    // Set the initial theme based on the user's preference
    if (nightModePreference === "true") {
      body.classList.add("dark-mode");
    }

    // Toggle the theme when the button is clicked
    nightModeToggle.addEventListener("click", function () {
      body.classList.toggle("dark-mode");

      // Save the user's preference to local storage
      const isNightModeActive = body.classList.contains("dark-mode");
      localStorage.setItem("nightMode", isNightModeActive.toString());
    });
  });




