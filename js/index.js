function getInputValue(inputId){
    // income-input catch
    const inputField = document.getElementById(inputId);
    const inputText = inputField.value;
    const inputAmount = parseFloat(inputText);
    // inputField.value = '';
    return inputAmount;
}
document.getElementById('calculate-button').addEventListener('click', function () {
    // income-input catch
    const incomeAmount = getInputValue('income-input');
    //Expenses catch
    const expenseAmount = getInputValue('expense-input');
    //rent catch
    const rentAmount = getInputValue('rent-input');
    //cloth catch
    const clothsAmount = getInputValue('cloth-input');

    const expensesAmount = expenseAmount + rentAmount + clothsAmount;

        //error handalling
    if (isNaN(incomeAmount) || isNaN(expenseAmount) || isNaN(rentAmount) || isNaN(clothsAmount)){
        document.getElementById("errormassage").style.backgroundColor="lightblue";
        document.getElementById("massage").style.color="black";
        document.getElementById("massage").innerHTML="negative value is not allowed";
    } 
    else if(incomeAmount < 0 || expenseAmount < 0 || rentAmount < 0 || clothsAmount < 0  ){
        document.getElementById("errormassage").style.backgroundColor="lightblue";
        document.getElementById("massage").style.color ="black";
        document.getElementById("massage").innerHTML="negative value is not allowed";
    }
    else if (incomeAmount < expensesAmount) {
        document.getElementById("errormassage").style.backgroundColor="lightblue";
        document.getElementById("massage").style.color="black";
        document.getElementById("massage").innerHTML="you can not buy more than your budget";
        }
    
    else{
        const balanceAmount = incomeAmount - expensesAmount;

            //calculation for expenses
        const totalExpenses = document.getElementById('total-expenses');
        totalExpenses.innerText = expensesAmount;
        
        const balanceTotal = document.getElementById('balance-total');
        balanceTotal.innerText = balanceAmount;

    }
    console.log(expensesAmount);

});

document.getElementById('save-button').addEventListener('click', function(){
    const myIncome = getInputValue('income-input');
    const mysavingAmount = getInputValue('save-input');
    //saving amount calaculation
    const saving = myIncome * (mysavingAmount / 100);
    const balance = parseFloat(document.getElementById('balance-total').innerText);

     //error handalling
    if (isNaN(myIncome) || isNaN(mysavingAmount) ) {
        document.getElementById("errormassage").style.backgroundColor="lightblue";
        document.getElementById("massage").style.color="black";
        document.getElementById("massage").innerHTML="string type variable is not allowed";
    }
    else if (mysavingAmount < 0 ) {
        document.getElementById("errormassage").style.backgroundColor="lightblue";
        document.getElementById("massage").style.color="black";
        document.getElementById("massage").innerHTML="negative number is not allowed.";
        
    }
    else if (saving > balance) {
        document.getElementById("errormassage").style.backgroundColor="lightblue";
        document.getElementById("massage").style.color="black";
        document.getElementById("massage").innerHTML="Please enter a low amount.";
    } 
    else{
        const savingAmount = document.getElementById('saving-amount');
        savingAmount.innerText = saving;
        const remainingBalance = document.getElementById('remaning-balance');
        const totalBalance = document.getElementById('balance-total');
        remainingBalance.innerText = totalBalance.innerText - saving;
    }

});
