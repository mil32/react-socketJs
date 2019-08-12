const W_KEY = process.env.W_KEY;
const LAT_LONG = process.env.LAT_LONG;

exports.emitWeather = async socket => {
    try {
        const res = await axios.get(`https://api.darksky.net/forecast/${W_KEY}/${LAT_LONG}?exclude=flags,minutely,hourly,alerts&lang=es&units=ca`);
        console.log("RESPONSE: ", res.data);
        //socket.emit("FromAPI", res.data.currently.temperature);
    } catch (error) {
        console.error(`Error: ${error.code}`);
    }
}

