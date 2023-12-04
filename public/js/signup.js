const loginFormHandler = async (event) => {
  console.log("attempting to create user...");
  event.preventDefault();

  const name = document.querySelector("#name-signup").value.trim();
  const email = document.querySelector("#email-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();

  if (name && email && password) {
    const data = {
      name: name,
      email: email,
      password: password,
    };
    try {
      const response = await fetch("/api/users", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      });

      const responseData = await response.json();

      if (response.ok) {
        document.location.replace("/");
        alert("success");
      } else {
        alert(
          `Failed to sign up. ${
            responseData.error || "Please try again buddy!"
          }`
        );
      }
    } catch (error) {
      console.error("error during form submission", error);
      alert("An unexpected error has occurred, please try again");
    }
  }
};

document
  .querySelector(".signup-form")
  .addEventListener("submit", loginFormHandler);
