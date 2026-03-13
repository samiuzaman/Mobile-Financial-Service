// Toggle Menu button function
function toggleMenuBtn(id) {
  // Remove All Button Focus Style
  document
    .getElementById("add-money-menu-btn")
    .classList.remove("bg-blue-100", "border-blue-700", "border-2");
  document
    .getElementById("cash-out-menu-btn")
    .classList.remove("bg-blue-100", "border-blue-700", "border-2");
  document
    .getElementById("transfer-money-menu-btn")
    .classList.remove("bg-blue-100", "border-blue-700", "border-2");
  document
    .getElementById("get-bonus-menu-btn")
    .classList.remove("bg-blue-100", "border-blue-700", "border-2");
  document
    .getElementById("pay-bill-menu-btn")
    .classList.remove("bg-blue-100", "border-blue-700", "border-2");
  document
    .getElementById("transactions-menu-btn")
    .classList.remove("bg-blue-100", "border-blue-700", "border-2");

  // Add Focus Btn Style
  const menuBtn = document.getElementById(id);
  menuBtn.classList.remove("bg-blue-100", "border-gray-400", "border-2");
  menuBtn.classList.add("bg-blue-100", "border-blue-700", "border-2");
}

// Display Clicked Section
function displaySection(id) {
  // hide all section
  document.getElementById("add-money-section").classList.add("hidden");
  document.getElementById("cashout-section-section").classList.add("hidden");
  document.getElementById("transfer-money-section").classList.add("hidden");
  document.getElementById("get-bonus-section").classList.add("hidden");
  document
    .getElementById("transaction-history-section")
    .classList.add("hidden");
  // display selected section
  document.getElementById(id).classList.remove("hidden");
}
