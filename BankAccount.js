import { useState } from "react";
import BalanceDisplay from "./BalanceDisplay";

//Parent Component
function BankAccount() {
  const [balance, setBalance] = useState(0.0);
  const [name, setName] = useState('user');
  const deposit = (amount) => {
    setBalance((prev) => prev + parseFloat(amount));
  };
  const withdraw = (amount) => {
    setBalance((prev) => prev - parseFloat(amount));
  };

  const addInterest = (rate) => {
    setBalance((prev) => prev + prev * (parseFloat(rate) / 100));
  };
  const chargeFee = (fee) => {
    setBalance((prev) => prev - parseFloat(fee));
  };
  return (
    <div>
      <BalanceDisplay balance={balance}name={name} />
      <input type="number" id="amount" />
      <button onClick={() => deposit(document.getElementById("amount").value)}>
        Deposit
      </button>
      <button onClick={() => withdraw(document.getElementById("amount").value)}>
        Withdraw
      </button>
      <input type="number" id="rate" placeholder="Interest Rate(%)" />
      <button
        onClick={() => addInterest(document.getElementById("rate").value)}
      >
        Add Interest
      </button>
      <input type="number" id="fee" placeholder="Bank Fee" />
      <button onClick={() => chargeFee(document.getElementById("fee").value)}>
        Charge Fee
      </button>
    </div>
  );
}

export default BankAccount;
