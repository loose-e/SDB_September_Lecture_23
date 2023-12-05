//! Global Variables
const image = document.querySelector('div');
const h3 = document.querySelector('h3');
const baseURL = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes';

//! Event Listener
image.addEventListener('click', e => {
    getQuote();
})

//! Display (function)
const getQuote = async() => {
    fetch(baseURL)
        .then(response => response.json())
        .then(object => {
            let quote = object[0];
            h3.textContent = quote
        })
        .catch(err => console.error(err));

    const response = await fetch(baseURL);
    const data = await response.json();
    console.log(data);

    h3. textContent = data[0];
}