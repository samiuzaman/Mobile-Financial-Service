// Clicked Button Functionality
const defaultBtn = document.getElementById("add-money-menu-btn");
defaultBtn.classList.remove("bg-blue-100", "border-gray-400");
defaultBtn.classList.add("bg-blue-100", "border-blue-700", "border-2");

document
  .getElementById("add-money-menu-btn")
  .addEventListener("click", function () {
    toggleMenuBtn("add-money-menu-btn");
    displaySection("add-money-section");
  });

document
  .getElementById("cash-out-menu-btn")
  .addEventListener("click", function () {
    toggleMenuBtn("cash-out-menu-btn");
    displaySection("cashout-section-section");
  });

document
  .getElementById("transfer-money-menu-btn")
  .addEventListener("click", function () {
    toggleMenuBtn("transfer-money-menu-btn");
    displaySection("transfer-money-section");
  });

document
  .getElementById("get-bonus-menu-btn")
  .addEventListener("click", function () {
    toggleMenuBtn("get-bonus-menu-btn");
    displaySection("get-bonus-section");
  });

document
  .getElementById("pay-bill-menu-btn")
  .addEventListener("click", function () {
    toggleMenuBtn("pay-bill-menu-btn");
  });

document
  .getElementById("transactions-menu-btn")
  .addEventListener("click", function () {
    toggleMenuBtn("transactions-menu-btn");
    displaySection("transaction-history-section");
  });

// Select Ulitls Element
const mainBalance = document.getElementById("main-balance");

// Add Money Functionality
document
  .getElementById("add-money-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();
    const amount = document.getElementById("amount").value;
    let pin = document.getElementById("pin").value;
    pin = parseInt(pin);
    if (pin === 1234) {
      const newBalance = parseFloat(mainBalance.innerHTML) + parseFloat(amount);
      mainBalance.innerText = newBalance;

      // set-transaction-info
      const transactionContainer = document.getElementById(
        "transaction-container",
      );
      const account = document.getElementById("account-number").value;
      const selectedBank = document.getElementById("select-bank").value;
      const div = document.createElement("div");
      div.innerHTML = `
        <div
          class="flex justify-between items-center bg-white px-4 py-2 rounded-lg border border-gray-300 mb-3"
        >
          <div class="flex items-center gap-6">
            <img
              class="bg-gray-200 p-2 rounded-full w-10"
              src="./assets/opt-1.png"
              alt=""
            />
            <div>
              <h5 class="font-medium text-lg">Add Money Form ${selectedBank}</h5>
              <p class="font-bold text-red-600">Account: ${account}</p> 
              <p class="font-bold text-green-600">৳${amount}</p> 
            </div>

          <div class="cursor-pointer p-2">
            <i class="fa-solid fa-ellipsis-vertical"></i>
          </div>
        </div>`;
      transactionContainer.append(div);
    } else {
      alert("Invalid Pin");
    }
  });

// Cash Out Functionality
document.getElementById("cash-out-btn").addEventListener("click", function (e) {
  e.preventDefault();
  let cashoutAmount = document.getElementById("cashout-amount").value;
  cashoutAmount = parseFloat(cashoutAmount);
  let cashoutPin = document.getElementById("cashout-pin").value;
  cashoutPin = parseInt(cashoutPin);
  if (cashoutPin === 1234) {
    const currentBalance = mainBalance.innerText - cashoutAmount;
    mainBalance.innerText = currentBalance;
  } else {
    alert("Invalid Pin");
  }
});
