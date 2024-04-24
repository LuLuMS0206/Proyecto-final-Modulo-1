
//Conversor 

let urlConversor = 'https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json'

let eur;
let gbp;

//variables para cada id de mi selector
const opcion1 = document.getElementById('opcion1')
const opcion2 = document.getElementById('opcion2')
const opcion3 = document.getElementById('opcion3')

//variables para guardar el cambio de moneda
let precioEuroProfessional;
let precioEuroProfessionalFinal;
let precioEuroPremium;
let precioEuroPremiumFinal;

let precioLibraProfessional;
let precioLibraProfessionalFinal;
let precioLibraPremium;
let precioLibraPremiumFinal;

//variables para cada precio
const basic = document.getElementById('basic')
const professional = document.getElementById('professional')
const premium = document.getElementById('premium')

fetch(urlConversor).then ((response) => {
    if (response.ok){
        response.json()
        .then((jsonData) => {
            eur = jsonData.usd.eur;
            gbp = jsonData.usd.gbp;
            precioEuroProfessional = 25 * eur;
            precioEuroProfessionalFinal = precioEuroProfessional.toFixed(2);
            precioEuroPremium = 60 * eur;
            precioEuroPremiumFinal = precioEuroPremium.toFixed(2);

            precioLibraProfessional = 25 * gbp;
            precioLibraProfessionalFinal = precioLibraProfessional.toFixed(2);
            precioLibraPremium = 60 * gbp;
            precioLibraPremiumFinal = precioLibraPremium.toFixed(2)

        })
        opcion1.addEventListener('click', (event) => {
            basic.innerText = '';
            basic.innerText = `€0`;
            professional.innerText = '';
            professional.innerText = `€${precioEuroProfessionalFinal}`;
            premium.innerText = '';
            premium.innerText = `€${precioEuroPremiumFinal}`;
        })

        opcion2.addEventListener('click', (event) => {
            basic.innerText = '';
            basic.innerText = `$0`;
            professional.innerText = '';
            professional.innerText = `$25`;
            premium.innerText = '';
            premium.innerText = `$60`;
        })

        opcion3.addEventListener('click', (event) => {
            basic.innerText = '';
            basic.innerText = `£0`;
            professional.innerText = '';
            professional.innerText = `£${precioLibraProfessionalFinal}`;
            premium.innerText = '';
            premium.innerText = `£${precioLibraPremiumFinal}`;
        })
    }
} )

