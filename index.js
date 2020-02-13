function calcBill ()  {

    let billValue = Number(document.getElementById('bill').value);
    let tipPercentage = Number(document.getElementById('percentages').value);
    let persons = Number(document.getElementById('persons').value);



    if (tipPercentage >= 1) {
        let totalPay = billValue - Math.round((billValue / 100) * tipPercentage);

        let billPerPersons = Math.round(totalPay / persons).toFixed(2); 

        persons > 1 ? 
        document.getElementById('show-result').innerHTML = `Each persons pay N${billPerPersons}` : 
        document.getElementById('show-result').innerHTML = `You're to pay  N${billPerPersons}`;
   
    } else {       

        let totalPay = (billValue / persons).toFixed(2);

        if (persons > 1) {
            document.getElementById('no-tip').innerHTML = `No tip!`;
            document.getElementById('show-result').innerHTML = `Each persons pay N${totalPay}`;
        } else {
            document.getElementById('no-tip').innerHTML = `No tip!`;
            document.getElementById('show-result').innerHTML = ` You're to pay  N${totalPay}`;

        }
    }

}

document.getElementById('button').addEventListener('click', function () {
    calcBill();
})



function clear () {
    let billValue = document.getElementById('bill').value = '';
    let tipPercentage = document.getElementById('percentages').value = '';
    let persons = document.getElementById('persons').value = '';

    document.getElementById('no-tip').innerHTML = ``;
    document.getElementById('show-result').innerHTML = ``;
}


document.getElementById('clear').addEventListener('click', function () {
    clear();
});