document.getElementById("donate-noakhali").addEventListener("click", function () {
    const donationAmount = getValueById('donate-tk-noakhali');
    const Total = getInnerTextById('noakhali-amount');
    const userBalance = getInnerTextById('user-balance');
    const modal = document.getElementById("my_modal_1");

    const newBalance = donationAmount + Total;
    const userNewBalance = userBalance - donationAmount;

   

    if (isNaN(donationAmount) || donationAmount <= 0) {
        alert("Please enter a valid donation amount.");

        document.getElementById("donate-tk-noakhali").value = '';
        return;
    }

    if ((donationAmount) > (userBalance)) {
        alert("You don't have enoght balance.");
        document.getElementById("donate-tk-noakhali").value = '';
        return;
    }
    else {

        document.getElementById("noakhali-amount").innerText = newBalance;
        document.getElementById("user-balance").innerText = userNewBalance;
        document.getElementById("donate-tk-noakhali").value = '';

        modal.showModal(); 

        const currentDate = new Date();
        const div = document.createElement('div');
        div.innerHTML = `
        <h4> ${donationAmount} taka is donated to Donate for Flood at Noakhali, Bangladesh</h4>
        <p> Date: ${currentDate.toString()} </p>
        `
        document.getElementById("transactions").appendChild(div);

        div.style.margin = '10px 8%';
        div.style.padding = '15px';
        div.style.border = '2px solid #1111111a';
        div.style.backgroundColor = 'white';
        div.style.color = '#333';
        div.style.borderRadius = '8px';

        const h4 = div.querySelector('h4');
        h4.style.fontSize = '16px';
        h4.style.color = 'black';
        h4.style.fontWeight = 'bold'
    }

})

document.getElementById("donate-feni").addEventListener("click", function () {
    const donationAmount = getValueById('donate-tk-feni');
    const Total = getInnerTextById('feni-amount');
    const userBalance = getInnerTextById('user-balance');
    const modal = document.getElementById("my_modal_1");

    const newBalance = donationAmount + Total;
    const userNewBalance = userBalance - donationAmount;

   

    if (isNaN(donationAmount) || donationAmount <= 0) {
        alert("Please enter a valid donation amount.");

        document.getElementById("donate-tk-feni").value = '';
        return;
    }

    if ((donationAmount) > (userBalance)) {
        alert("You don't have enoght balance.");
        document.getElementById("donate-tk-feni").value = '';
        return;
    }
    else {

        document.getElementById("feni-amount").innerText = newBalance;
        document.getElementById("user-balance").innerText = userNewBalance;
        document.getElementById("donate-tk-feni").value = '';

        modal.showModal(); 

        const currentDate = new Date();
        const div = document.createElement('div');
        div.innerHTML = `
        <h4> ${donationAmount} taka is donated to Donate for Flood Relief in Feni,Bangladesh</h4>
        <p> Date: ${currentDate.toString()} </p>
        `
        document.getElementById("transactions").appendChild(div);

        div.style.margin = '10px 8%';
        div.style.padding = '15px';
        div.style.border = '2px solid #1111111a';
        div.style.backgroundColor = 'white';
        div.style.color = '#333';
        div.style.borderRadius = '8px';

        const h4 = div.querySelector('h4');
        h4.style.fontSize = '16px';
        h4.style.color = 'black';
        h4.style.fontWeight = 'bold'
    }

})

document.getElementById("donate-quota").addEventListener("click", function () {
    const donationAmount = getValueById('donate-tk-quota');
    const Total = getInnerTextById('quota-amount');
    const userBalance = getInnerTextById('user-balance');
    const modal = document.getElementById("my_modal_1");

    const newBalance = donationAmount + Total;
    const userNewBalance = userBalance - donationAmount;

   

    if (isNaN(donationAmount) || donationAmount <= 0) {
        alert("Please enter a valid donation amount.");

        document.getElementById("donate-tk-quota").value = '';
        return;
    }

    if ((donationAmount) > (userBalance)) {
        alert("You don't have enoght balance.");
        document.getElementById("donate-tk-quota").value = '';
        return;
    }
    else {

        document.getElementById("quota-amount").innerText = newBalance;
        document.getElementById("user-balance").innerText = userNewBalance;
        document.getElementById("donate-tk-quota").value = '';

        modal.showModal(); 

        const currentDate = new Date();
        const div = document.createElement('div');
        div.innerHTML = `
        <h4> ${donationAmount} taka is donated to Aid for Injured in the Quota Movement</h4>
        <p> Date: ${currentDate.toString()} </p>
        `
        document.getElementById("transactions").appendChild(div);

        div.style.margin = '10px 8%';
        div.style.padding = '15px';
        div.style.border = '2px solid #1111111a';
        div.style.backgroundColor = 'white';
        div.style.color = '#333';
        div.style.borderRadius = '8px';

        const h4 = div.querySelector('h4');
        h4.style.fontSize = '16px';
        h4.style.color = 'black';
        h4.style.fontWeight = 'bold'
    }

})


 

document.getElementById("blog-home").addEventListener("click", function () {
    window.location.href = "blog.html";

});

document.getElementById('btn-history').addEventListener("click", function () {
    getElementHideById("transactions"); 

    document.getElementById('btn-donate').classList.remove('bg-[#B4F461]');
    document.getElementById('btn-donate').classList.add('bg-[#1111111a]');

    document.getElementById('btn-history').classList.remove('bg-[#1111111a]');
    document.getElementById('btn-history').classList.add('bg-[#B4F461]');

});


document.getElementById('btn-donate').addEventListener("click", function () {
    getElementHideById("donation"); 

    document.getElementById('btn-history').classList.remove('bg-[#B4F461]');
    document.getElementById('btn-history').classList.add('bg-[#1111111a]');

    document.getElementById('btn-donate').classList.remove('bg-[#1111111a]');
    document.getElementById('btn-donate').classList.add('bg-[#B4F461]');
});

// Shared Functions start
function getElementHideById(id) {

    document.getElementById("donation").classList.add('hidden');
    document.getElementById("transactions").classList.add('hidden');

    document.getElementById(id).classList.remove('hidden');
}


function getInnerTextById(id) {
    const inputValue = document.getElementById(id).innerText;
    const inputNumber = parseFloat(inputValue);

    return inputNumber
}

function getValueById(id) {
    const inputValue = document.getElementById(id).value;
    const donation_amount = parseFloat(inputValue);

    return donation_amount
}

