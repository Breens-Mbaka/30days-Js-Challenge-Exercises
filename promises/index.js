//Read the countries API using fetch and print the name of country, capital, languages, population and area.
const countriesAPI = 'https://restcountries.eu/rest/v2/all'
const countryData = async () => {
    const response =  await fetch(countriesAPI);
    const data = await response.json();
    data.forEach(element => {

        console.log(element.name,element.languages,element.population,element.area);
    });
}
countryData();