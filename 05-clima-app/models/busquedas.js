const fs = require('fs');
const axios = require('axios');
class Busquedas {

    historial = [];
    dbPath = './db/database.json';

    constructor() {
        // TODO: leer la base de datos si existe

        this.leerBD();
    };

    get paramsMapbox() {

        return {
            'access_token': process.env.MAPBOX_KEY,
            'limit': '5',
            'language': 'es'
        };

    };

    get openWhater() {

        return {

            'appid': process.env.OPENWEATHER_KEY,
            'units': 'metric',
            'lang': 'es',

        };

    };

    get historialCapitalizado() {

        const newHistorial = [];

        this.historial.forEach(lugar => {

            const des = lugar.split(" ");
            const form = des.map(palabra => {

                return palabra[0].toUpperCase() + palabra.substring(1);
            }).join(" ");

            newHistorial.push(form)
        });

        
        return newHistorial;

    };

    async ciudad(lugar = "") {

        try {
            // !Peticion Http}

            const instance = axios.create({
                baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${lugar}.json`,
                params: this.paramsMapbox,

            });

            // const respuesta = await axios.get('https://api.mapbox.com/geocoding/v5/mapbox.places/madrid.json?limit=5&language=es&access_token=pk.eyJ1Ijoiam9uYS1tYWMiLCJhIjoiY2xkd2h4eWYxMDdseDNuanFmc296YjQzMCJ9.9Li9Rbi-AxZQ3CHh3_7Oow')

            const respuesta = await instance.get();

            return respuesta.data.features.map(lugar => ({
                id: lugar.id,
                nombre: lugar.place_name,
                lng: lugar.center[0],
                lat: lugar.center[1],
            })); // ?retorna los lugares que coincidad con el lugar pasado por parametro
        } catch (error) {

            return [];
        }



    };

    async traerClima(lat, lon) {

        try {

            // !Peticion Http}

            const instanceClima = axios.create({
                baseURL: `https://api.openweathermap.org/data/2.5/weather`,
                params: { ...this.openWhater, lat, lon },

            });

            const respuestaOpen = await instanceClima.get();
            const { description } = respuestaOpen.data.weather[0];
            const { temp, temp_min, temp_max } = respuestaOpen.data.main;
            return {

                desc: description,
                min: temp_min,
                max: temp_max,
                temp: temp,

            };

        } catch (error) {
            console.log(error);
        }


    };

    agregarHistorial(lugar = '') {

        // TODO prevenir duplicados

        if (this.historial.includes(lugar.toLocaleLowerCase())) {

            return;

        };

        this.historial = this.historial.splice(0,4);

        this.historial.unshift(lugar.toLocaleLowerCase());

        this.guardarDB();

    };

    guardarDB() {


        const payload = {
            historial: this.historial,
        };

        fs.writeFileSync(this.dbPath, JSON.stringify(payload));

    };

    leerBD() {

        if (!fs.existsSync(this.dbPath)) {
            return null;
        };

        const dataJSON = fs.readFileSync(this.dbPath, { encoding: 'utf-8' });

        const data = JSON.parse(dataJSON);

        const { historial } = data;

        this.historial = historial;

    };

};

module.exports = Busquedas;