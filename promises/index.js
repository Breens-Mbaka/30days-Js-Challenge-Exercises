//APIs to be used below
const countriesAPI = 'https://restcountries.eu/rest/v2/all';
const catsAPI = 'https://api.thecatapi.com/v1/breeds';

/**
 * Exercise1: Read the countries API using fetch and print the name of country, 
 * capital, languages, population and area.
 */
const countryData = async () => {
    try {
        const response =  await fetch(countriesAPI);
        const data = await response.json();
        data.forEach(element => {
            var languages = element.languages;
            languages.forEach(language => {
                console.log(`Country: ${element.name}, Language: ${language.name}, Population: ${element.population}, Area:${element.area}`);
        })
    });
    } catch (error) {
        console.log(error);
    }
}
countryData();


//Exercise2: Print out all the cat names in to catNames variable
const catsData = async () => {
    try {
        var response = await fetch(catsAPI);
        var data = await response.json();
        var catNames;
        data.forEach(Catname => {
            catNames = Catname.name;
            console.log(catNames);
        });
    } catch (error) {
        console.log(error);
    }
}
catsData();


//Exercise3(Question1:Read the cats api and find the average weight of cat in metric unit)
const metricWeight = async () => {
    try {
        var catsData = await fetch(catsAPI);
        var response = await catsData.json();
        response.forEach(data => {
            var weightDetails = data.weight.metric.split("-");
            var averageWeight = parseInt(weightDetails[0] + weightDetails[1] / 2);
            console.log(averageWeight);
        });
    } catch (error) {
        console.log(error)
    }
}
metricWeight();

//Exercise3(Question2:Read the countries api and find out the 10 largest countries)
const largestCountries = async () => {
    try {
        const response = await fetch(countriesAPI);
        const data = await response.json();
        console.log(data);
        countryInfo = data.sort((a, b) => (a.area < b.area) ? 1 : -1).slice(0, 10);
        countryInfo.forEach(country => {
            console.log(`Country: ${country.name} and Area: ${country.area}`)
        })
    } catch (error) {
        console.log(error);
    }
}
largestCountries();

//Exercise3(Question3:Read the countries api and count total number of languages in the world used as officials)
const totalLanguages = async () => {
    try {
        const response = await fetch(countriesAPI);
        const data = await response.json();
        var numberOflanguages = [];
        data.forEach(language => {
            var number = language.languages.length;
            numberOflanguages.push(number);
        })
        var totalNumberOfLanguages = numberOflanguages.reduce((a,b) => a+b);
        console.log(totalNumberOfLanguages);
    } catch (error) {
        console.log(error);
    }
}
totalLanguages();