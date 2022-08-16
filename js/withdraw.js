document.getElementById('withdraw-btn').addEventListener('click', function(){
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    withdrawField.value = '';

    if(isNaN(newWithdrawAmount)){
        alert('Please provide a Number');
        return;
    }

    const withdrawElementTotal = document.getElementById('withdraw-total');
    const privousWithdrawTotalString = withdrawElementTotal.innerText;
    const privousWithdrawTotal = parseFloat(privousWithdrawTotalString);

    const currentWithdrawtotal = newWithdrawAmount + privousWithdrawTotal;
     withdrawElementTotal.innerText = currentWithdrawtotal;


     const balanceTotalElement = document.getElementById('balance-total');
     const balanceTotalString = balanceTotalElement.innerText;
     const balanceTotal = parseFloat(balanceTotalString);

     const currentBalanceTotal = balanceTotal - newWithdrawAmount;
     balanceTotalElement.innerText = currentBalanceTotal;



    
})