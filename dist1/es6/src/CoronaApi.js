import Axios from "axios";

let country = process.argv.splice(2);
export function getAllByCountry() {
    Axios.get('https://corona.lmao.ninja/countries/' + country)
    .then(response => {
        console.log(response.data);
    })
    .catch(error => console.error(error));
}