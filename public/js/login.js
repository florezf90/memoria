//TODO replace commented out areas with corresponding document id/class names

const loginFormHandler = async (event) => {
  console.log("attempting login...");
  event.preventDefault();

  const name = document.querySelector("#username-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();

  if (name && password) {
    const response = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({ name, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert("Failed to log in");
    }
  }
};

document
  .querySelector(".login-form")
  .addEventListener("submit", loginFormHandler);
