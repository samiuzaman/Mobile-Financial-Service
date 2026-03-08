// Login Functionality
document.getElementById("login-btn").addEventListener("click", function (e) {
  e.preventDefault();
  let mobileNumber = document.getElementById("mobile-number").value;
  let pin = document.getElementById("pin").value;

  if (mobileNumber.length === 11) {
    if (parseInt(mobileNumber) === 12345678910 && parseInt(pin) === 1234) {
      document.location.href = "./home.html";
    } else {
      alert("Invalid User Info");
    }
  } else {
    alert("Need a valid account number");
  }
});

