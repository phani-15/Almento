function animateLogoAndNavigate() {
  const logo = document.querySelector(".logo");
  const loginPageUrl = "./LoginPage.html"; // Replace with your actual login page URL

  if (logo) {
    // Add the 'animated' class to trigger CSS transitions
    logo.classList.add("animated");

    // Wait for the animation to complete (matching CSS transition duration)
    setTimeout(() => {
      // Navigate to the login page
      window.location.href = loginPageUrl;
    }, 500); // Adjust timeout to match your CSS transition duration
  } else {
    console.error("Logo element not found.");
    window.location.href = loginPageUrl; //navigate even if logo animation failed.
  }
}

// Attach the function to the button's click event
document.addEventListener("DOMContentLoaded", () => {
  const continueBtn = document.getElementById("continueBtn");
  if (continueBtn) {
    continueBtn.addEventListener("click", animateLogoAndNavigate);
  } else {
    console.error("Continue button not found.");
  }
});
