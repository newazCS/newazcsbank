
// login button event handler 
const loginBtn = document.getElementById('submitBTN');
loginBtn.addEventListener("click",function(){
    const loginArea = document.getElementById('login-area').style.display="none";
    const transAra = document.getElementById('transaction-area').style.display="block";
})

// deposit button event handler
const depositBtn = document.getElementById('addDeposit');
depositBtn.addEventListener("click",function(){
    
    const depositAmount = document.getElementById("depositAmount").value;
    const depositNumber = parseFloat(depositAmount);

    const currentDeposit = document.getElementById('currentDeposit').innerText;
    const currentDepositNumber = parseFloat(currentDeposit);
    const totalDeposit = depositNumber + currentDepositNumber;

    document.getElementById('currentDeposit').innerHTML = totalDeposit;
    document.getElementById('depositAmount').value = "";

})