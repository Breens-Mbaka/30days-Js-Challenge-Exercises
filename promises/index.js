/**
 * Exercise1: Read the countries API using fetch and print the name of country, 
 * capital, languages, population and area.
 */
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


//Exercise2: Print out all the cat names in to catNames variable
const catsAPI = 'https://api.thecatapi.com/v1/breeds';
const catsData = async () => {
    var response = await fetch(catsAPI);
    var data = await response.json();
    var catNames;
    data.forEach(Catname => {
        catNames = Catname.name;
        console.log(catNames);
    });
}
catsData();