function getWeather() {
    const apiKey = "f6df7f5c811a4aafbc4163303230212";
    const city = document.getElementById('cityInput').value;
    const apiUrl = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            return response.json();
        })
        .then(data => {
            const weatherResult = document.getElementById('weatherResult');

            weatherResult.innerHTML = `
            <h2> City: ${data.location.name} <br>  Country: ${data.location.country}<h2>
            <h2> The Current Temperature Is: ${data.current.temp_c} c<h2>`;
        })

        .catch(error => {
            console.error('Error Fetching data', error);
        });
    
    console.log("test")
};
