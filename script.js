 // script.js
document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");
    const signUpForm = document.getElementById("signUpForm");
    const goToSignUp = document.getElementById("goToSignUp");
    const goToLogin = document.getElementById("goToLogin");
  
    // Show Sign-Up Form
    goToSignUp.addEventListener("click", () => {
      loginForm.classList.add("hidden");
      signUpForm.classList.remove("hidden");
    });
  
    // Show Login Form
    goToLogin.addEventListener("click", () => {
      signUpForm.classList.add("hidden");
      loginForm.classList.remove("hidden");
    });
  });
  