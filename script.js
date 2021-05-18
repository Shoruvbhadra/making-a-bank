let loginBtn = document.getElementById("loginbtn");
loginBtn.addEventListener('click',function(){
    let loginArea = document.getElementById("login");
    loginArea.style.display = "none";
    let takaArea = document.getElementById("takaArea");
    takaArea.style.display = "block";
})

// adding event on my deposit button;
let depositHere = document.getElementById("depositHere");
depositHere.addEventListener("click",function(){
    let depositNumber = getInput("depositAmount");

updateAmount ("currentDeposite", depositNumber);
updateAmount ("currentBalance", depositNumber);

document.getElementById("depositAmount").value = '';
})

function updateAmount(id, depositNumber){
   let current = document.getElementById(id).innerText;
   let currentNumber = parseFloat(current);
   let total = depositNumber + currentNumber;
   document.getElementById(id).innerText = total;
}

function getInput (id){
    let amount = document.getElementById(id).value;
    let number = parseFloat(amount);
    return number; 
}

// withdraw button event handler.
let withdrawHere = document.getElementById("withdrawHere");
withdrawHere.addEventListener("click", function(){
    let withdrawNumber = getInput("withdrawAmount");

    updateAmount("currentWithdraw", withdrawNumber);
    updateAmount ("currentBalance", -1*withdrawNumber);

    document.getElementById("withdrawAmount").value = '';
})

