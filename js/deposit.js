//step-1 : add event listner to the deposit button
document.getElementById('deposit-btn').addEventListener('click', function(){
    //step-2 :get the deposit amount from the deposit field
    const depositField = document.getElementById('deposit-field');
    //for input field use .value to get the value of input
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);

    depositField.value = '';

    if(isNaN(newDepositAmount)){
        alert('Please provide a Number');
        return;
    }

    //step-3 : get the current deposit total
    const depositTotalElement = document.getElementById('deposit-total');
    //for non-input field use innertext to get the value
    const privousdepositTotalString = depositTotalElement.innerHTML;
    const privousdepositTotal = parseFloat(privousdepositTotalString);
    //step-4 : add numbers to get the total deposit
    const currentDepositTotal = privousdepositTotal + newDepositAmount;
    depositTotalElement.innerText = currentDepositTotal;
    //step-5 : get current total balance
    const balanceTotalElement = document.getElementById('balance-total');
    const privousBalanceTotalSring = balanceTotalElement.innerText;
    const privousBalanceTotal = parseFloat(privousBalanceTotalSring);

    const currentBalanceTotal = privousBalanceTotal + newDepositAmount;
    balanceTotalElement.innerText = currentBalanceTotal;
    
})