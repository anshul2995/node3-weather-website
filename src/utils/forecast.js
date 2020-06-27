const request = require('request');

const forcast = (latitude, longitude, callback) => {

    const url = 'http://api.weatherstack.com/current?access_key=bc4267e67b1f47919d545f559d9137ff&query=' + latitude + ',' + longitude

    request({ url: url, json: true }, (error, {body}) => { //we are only using body of the response, so destructure it.
        if(error) {
            callback('Unable to connect to weather service!', undefined);
        }
        else if (body.error) {
            callback('Unable to find location', undefined);
        } else {
            callback(undefined, body.current.weather_descriptions[0] + ' weather.' + ' It is currently ' + body.current.temperature + ' degress out. There is a ' + body.current.precip + '% chance of rain.')
        } 
    })
}

module.exports = forcast;