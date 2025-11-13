 // Responsive navbar toggle
  let menuIcon = document.querySelector('#menu-icon');
  let navbar = document.querySelector('.navbar');

  menuIcon.onclick = () => {
    navbar.classList.toggle('active');
    menuIcon.classList.toggle('bx-x'); // change icon to X
  };

  // Close navbar when any link is clicked
  window.onscroll = () => {
    navbar.classList.remove('active');
    menuIcon.classList.remove('bx-x');
  };

 document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector(".contact form");

    // create popup dynamically
    const popup = document.createElement("div");
    popup.style.position = "fixed";
    popup.style.top = "50%";
    popup.style.left = "50%";
    popup.style.transform = "translate(-50%, -50%)";
    popup.style.background = "white";
    popup.style.padding = "20px 40px";
    popup.style.borderRadius = "10px";
    popup.style.boxShadow = "0 0 20px rgba(0,0,0,0.3)";
    popup.style.textAlign = "center";
    popup.style.display = "none";
    popup.style.zIndex = "9999";
    popup.style.fontSize = "1.5rem";
    popup.innerHTML = `
      <i style="font-size:50px;color:#00cc66;">✔</i>
      <h3 style="margin-top:10px;">Thank You!</h3>
      <p>Your message has been submitted successfully.</p>
      <button id="closePopup" style="margin-top:10px;background:#0078ff;color:#fff;border:none;padding:8px 20px;border-radius:6px;cursor:pointer;">OK</button>
    `;
    document.body.appendChild(popup);

    // add overlay
    const overlay = document.createElement("div");
    overlay.style.position = "fixed";
    overlay.style.top = "0";
    overlay.style.left = "0";
    overlay.style.width = "100%";
    overlay.style.height = "100%";
    overlay.style.background = "rgba(0,0,0,0.5)";
    overlay.style.display = "none";
    overlay.style.zIndex = "9998";
    document.body.appendChild(overlay);

    // form submit event
    form.addEventListener("submit", function(e) {
      e.preventDefault(); // stop page reload
      overlay.style.display = "block";
      popup.style.display = "block";
      form.reset(); // clear fields
    });

    // close popup button
    document.addEventListener("click", function(e) {
      if (e.target.id === "closePopup" || e.target === overlay) {
        popup.style.display = "none";
        overlay.style.display = "none";
      }
    });
  });
   document.addEventListener("DOMContentLoaded", function () {
    // Buttons select karo
    const hireBtn = document.querySelector(".btn-box .btn:first-child");
    const talkBtn = document.querySelector(".btn-box .btn:last-child");

    // Create popup dynamically (same style both use karenge)
    const popup = document.createElement("div");
    popup.style.position = "fixed";
    popup.style.top = "50%";
    popup.style.left = "50%";
    popup.style.transform = "translate(-50%, -50%)";
    popup.style.background = "white";
    popup.style.padding = "25px 40px";
    popup.style.borderRadius = "12px";
    popup.style.boxShadow = "0 0 25px rgba(0,0,0,0.3)";
    popup.style.textAlign = "center";
    popup.style.display = "none";
    popup.style.zIndex = "9999";
    popup.style.fontSize = "1.6rem";
    popup.innerHTML = `
      <i style="font-size:45px;color:#00cc66;">✔</i>
      <h3 style="margin-top:10px;" id="popupTitle">Thank You!</h3>
      <p id="popupMessage">Your message here.</p>
      <button id="closePopup" style="margin-top:10px;background:#0078ff;color:#fff;border:none;padding:8px 20px;border-radius:6px;cursor:pointer;">OK</button>
    `;
    document.body.appendChild(popup);

    // Overlay background
    const overlay = document.createElement("div");
    overlay.style.position = "fixed";
    overlay.style.top = "0";
    overlay.style.left = "0";
    overlay.style.width = "100%";
    overlay.style.height = "100%";
    overlay.style.background = "rgba(0,0,0,0.5)";
    overlay.style.display = "none";
    overlay.style.zIndex = "9998";
    document.body.appendChild(overlay);

    // Function to show popup with custom message
    function showPopup(title, message) {
      document.getElementById("popupTitle").innerText = title;
      document.getElementById("popupMessage").innerText = message;
      overlay.style.display = "block";
      popup.style.display = "block";
    }

    // Event listeners for both buttons
    hireBtn.addEventListener("click", function (e) {
      e.preventDefault();
      showPopup("Hire Me", "Thank you for your interest! I’ll get back to you soon 😊");
    });

    talkBtn.addEventListener("click", function (e) {
      e.preventDefault();
      showPopup("Let's Talk", "I'd love to connect and discuss more — reach me via the Contact section 📩");
    });

    // Close popup
    document.addEventListener("click", function (e) {
      if (e.target.id === "closePopup" || e.target === overlay) {
        popup.style.display = "none";
        overlay.style.display = "none";
      }
    });
  });