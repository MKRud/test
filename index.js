const request = require('request');

var objShazam = {};

request('https://www.shazam.com/shazam/v3/ru/UA/web/-/tracks/world-chart-world?pageSize=200&startFrom=0', (error, response, html) => {
    if (!error && response.statusCode == 200) {

        var jsonObj = JSON.parse(html);

        jsonObj = jsonObj['tracks'];
       
        for (keyFirst in jsonObj) {
            const name = jsonObj[keyFirst]['share']['subject'];
            const shazam = jsonObj[keyFirst]['share']['href'];

            keyFirstN = Number(keyFirst) + 1;

            objShazam[keyFirstN] = {
                [name]: {
                    shazam
                }
            }
        }
    }
    console.log(objShazam)
})
