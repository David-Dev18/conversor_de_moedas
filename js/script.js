function convert() {
    const amount = document.getElementById('amount').value;
    const from = document.getElementById('from').value;
    const to = document.getElementById('to').value;

    let rate = 1;
    let symbol = ''; 

    // Definindo as taxas para as moedas
    if (from === 'USD' && to === 'BRL') {
        rate = 5.25;
        symbol = 'R$'; 
    } else if (from === 'BRL' && to === 'USD') {
        rate = 0.19;
        symbol = '$'; 
    } else if (from === 'EUR' && to === 'BRL') {
        rate = 5.9;
        symbol = 'R$'; 
    } else if (from === 'BRL' && to === 'EUR') {
        rate = 0.17;
        symbol = '€'; 
    } else if (from === 'USD' && to === 'EUR') {
        rate = 0.85;
        symbol = '€'; 
    } else if (from === 'EUR' && to === 'USD') {
        rate = 1.18;
        symbol = '$';
    } else if (from === 'USD' && to === 'JPY') {
        rate = 110;
        symbol = '¥'; 
    } else if (from === 'JPY' && to === 'USD') {
        rate = 0.0091;
        symbol = '$'; 
    } else if (from === 'BRL' && to === 'JPY') {
        rate = 21.10;
        symbol = '¥';
    } else if (from === 'JPY' && to === 'BRL') {
        rate = 0.047;
        symbol = 'R$'; 
    }

    const result = (amount * rate).toFixed(2);
    document.getElementById('result').innerText = symbol + ' ' + result;

}
