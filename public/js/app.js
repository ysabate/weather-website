
const weatherForm = document.querySelector('form');
const messageOne = document.getElementById('message-1');
const messageTwo = document.getElementById("message-2");


weatherForm.addEventListener('submit', (event) => {
    event.preventDefault()
    const address = document.getElementById("address").value;

    messageOne.textContent = "LOADING...";
    messageTwo.textContent = '';

    fetch(`http://localhost:3000/weather?address=${address}`).then(
      (response) => {
        response.json().then((data) => {
          if (data.error) {
            messageOne.textContent = data.error;
          }
          messageOne.textContent = data.location;
          messageTwo.textContent = data.forecast;
          
        });
      }
    );

})


