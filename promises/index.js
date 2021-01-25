//Read the countries API using fetch and print the name of country, capital, languages, population and area.
const countriesAPI = 'https://restcountries.eu/rest/v2/all'
const countryData = async () => {
    const response =  await fetch(countriesAPI);
    const data = await response.json();
    data.forEach(element => {
        var languages = element.languages;
        languages.forEach(language => {
            console.log(`Country: ${element.name}, Language: ${language.name}, Population: ${element.population}, Area:${element.area}`);
        })
    });
}
countryData();