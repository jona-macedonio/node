const axios = require('axios');
class Busquedas {

    historial = ['La Cerquilla', 'Acayucan', 'San Andres Tuxtla'];

    constructor() {
        // TODO: leer la base de datos si existe
    };

    get paramsMapbox () {

        return{
            'access_token': 'pk.eyJ1Ijoiam9uYS1tYWMiLCJhIjoiY2xkd2h4eWYxMDdseDNuanFmc296YjQzMCJ9.9Li9Rbi-AxZQ3CHh3_7Oow',
            'limit':'5',
            'language':'es'
        };

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

            console.log(respuesta.data);

            // console.log('Ciudad: ',lugar);

            return []; // ?retorna los lugares que coincidad con el lugar pasado por parametro
        } catch (error) {

            return [];
        }



    };

};

module.exports = Busquedas;