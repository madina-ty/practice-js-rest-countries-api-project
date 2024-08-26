const countryInput = document.getElementById("countryInput"); // Use double quotes for string literal
const search = document.getElementById("search");

const flag = document.getElementById("flag");
const name = document.getElementById("name");
const capital = document.getElementById("capital");
const continent = document.getElementById("continent");
const population = document.getElementById("population");

search.addEventListener("click", () => {
    let countryName = countryInput.value.trim();
    

    let finalURL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
    fetch(finalURL)
        .then((response) => {
            if (!response.ok) {
                throw new Error("Country not found");
            }
            return response.json();
        })
        .then((data) => {
            const search_result = document.querySelector(".search_result");
            search_result.style.display = "block";

            const countryData = data[0];
            flag.src = countryData.flags.png;
            name.innerHTML = countryData.name.common || "No name data available";
            capital.innerHTML = countryData.capital ? countryData.capital.join(", ") : "No capital data available";
            continent.innerHTML = countryData.region || "No continent data available";
            population.innerHTML = countryData.population || "No population data available";
        })
        .catch((error) => {
            console.error(error);
            alert(error.message);
        });
});