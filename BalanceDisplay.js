import React from "react";

//Child Component
function BalanceDisplay({balance,name}) {
  return (
    <div>
      <h1>Hello, {name}!</h1>
      <h2>Current Balance: £ {balance.toFixed(2)}</h2>
    </div>
  );
}

export default BalanceDisplay;
