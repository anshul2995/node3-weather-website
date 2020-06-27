//CLIENT SIDE JAVASCRIPT.
console.log('client side JS file is loaded');

// fetch('http://puzzle.mead.io/puzzle')
//     .then(response => {  // call back fn passed in then, will be called when fetching is done.
//         response.json().then(data => { //callback fn in then, will be called when response.json is done.
//             console.log(data);
//     })
// });

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

//The first thing we want to do is figure out how to run some code when someone submits that form because that code is gonna be responsible for fetching the weather and getting everything rendered correctly. To do this we need to add an event listener onto our element.
weatherForm.addEventListener('submit', (e) => {
    e.preventDefault(); // to prevent the default behaviour, the default behaviour of the form is reload the page;  what we have written in the form and and clicking on the submit button , causing to reload the page and search location empty.

    const location = search.value

    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''

    fetch('http://localhost:3000/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                messageOne.textContent = data.error
            } else {
                messageOne.textContent = data.location
                messageTwo.textContent = data.forecast
            }
        })
    })
})
    