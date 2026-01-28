
import fetch from "node-fetch";

const city = process.argv[2];

if (!city) {
  console.log("Please provide a city name");
  process.exit(1);
}

const url = `https://wttr.in/${city}?format=j1`;

async function getWeather() {
  try {
    const respons= await fetch(url);
    const data = await respons.json();

    const temp = data.current_condition[0].temp_C;
    const des = data.current_condition[0].weatherDesc[0].value;

    console.log(`Weather in ${city}: ${temp}°C,${des}`);
  } catch (err) {
    console.log("Error fetching weather");
  }
}

getWeather();
