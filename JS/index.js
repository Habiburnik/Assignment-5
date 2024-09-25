  document.getElementById("donate-feni").addEventListener("click", function(){
        const donation_amount = getValueById('donate-tk-feni');
        const feni_total = getInnerTextById('feni-amount');
        const userBalance = getInnerTextById('user-balance');

        const newBalance = donation_amount + feni_total;
        const userNewBalance = userBalance - donation_amount;

        if (isNaN(donation_amount) || donation_amount <= 0) {
            alert("Please enter a valid donation amount.");
            document.getElementById("donate-tk-feni").value = '';
            return;
        }

        if ((donation_amount) > (userBalance)){
            alert("You don't have enoght balance.");
            document.getElementById("donate-tk-feni").value = '';
            return;
        }

        document.getElementById("feni-amount").innerText = newBalance;
        document.getElementById("user-balance").innerText = userNewBalance;
        document.getElementById("donate-tk-feni").value = '';

  })

  document.getElementById("blog-home").addEventListener("click", function(){
    window.location.href = "blog.html";  
    
});


function getInnerTextById(id){
    const inputValue = document.getElementById(id).innerText;
    const inputNumber = parseFloat(inputValue);

    return inputNumber
}

function getValueById(id){
    const inputValue = document.getElementById(id).value;
    const donation_amount = parseFloat(inputValue);

    return donation_amount
}

