//api url
const api = "https://api.exchangeratesapi.io/";

//element
const elCurrencyOne = document.getElementById("currencyOne");
const elCurrencyTwo = document.getElementById("currencyTwo");
const elAmount = document.getElementById("amount");
const elBtnCalculte = document.getElementById("btnCalculate");
const elResult = document.getElementById("result");

//load symbols

fetch("./currencies.json")
    .then(res => res.json())
    .then(data => {
        const keys = Object.keys(data);
        const values = Object.values(data);

        let options;

        for (let i = 0; i < keys.length; i++) {
            options += `<option value="${keys[i]}">${values[i]}</option>`;
        }

        elCurrencyOne.innerHTML += options;
        elCurrencyTwo.innerHTML += options;
    })

    elBtnCalculte.addEventListener("click", function(){

        const baseCurrency = elCurrencyOne.value;
        const to = elCurrencyTwo.value;
        const amount = elAmount.value;

        fetch(`${api}latest?base=${baseCurrency}`)
        .then(res => res.json())
        .then(data => {
            const rate = data.rates[to];
            //console.log(rate);
            elResult.innerHTML = `${amount} ${baseCurrency} = ${amount * rate} ${to
            }`;
        })
        

    });