
const addStock = () => {
    let ticker = document.getElementById('ticker')
    let shares = document.getElementById('shareAmount')
    let table = document.getElementById('table')
    let row = table.insertRow(-1)
    let newText = document.createTextNode('New bottom row');
        // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    cell1.innerHTML = ticker.value;
    cell2.innerHTML = shares.value;
    const prices = new XMLHttpRequest();
    const url='https://finnhub.io/api/v1/quote?symbol='+ticker.value.toUpperCase()+'&token=c36cckiad3ifoi8hn8fg';
    prices.open("GET", url);
    prices.send();
    prices.onreadystatechange = (e) => {
        let values = JSON.parse(prices.responseText)
        number = parseFloat(values.c)
        number2 = parseInt(shares.value)
        number3 = number * number2
        cell3.innerHTML = values.c
        cell4.innerHTML = Math.round(number * number2)
    }
    let sum = 0
    for (let i= 0; i< table.rows.length; i++) {
        sum = sum + table.rows[i].cells[3]
    }

}


const clearInputs = () => {
    let ticker = document.getElementById('ticker')
    let shares = document.getElementById('shareAmount')
    ticker.value = ""
    shares.value = ""
}


