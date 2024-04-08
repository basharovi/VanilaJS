const latitude = 59.315082717765414; // Example latitude
const longitude = 18.055269833640157; // Example longitude
const apiKey = "VC6ajPunPeWrIIn9Vq3e3WrRl28ecdoK_TPd7b9ou8k";

fetch(
  `https://atlas.microsoft.com/search/address/reverse/json?api-version=1.0&query=${latitude},${longitude}&subscription-key=${apiKey}`
)
  .then((response) => response.json())
  .then((data) => {
    const country = data.addresses[0].address.country; // Extract country name
    const countryCode = data.addresses[0].address.countryCode; // Extract country code
    const countryCodeISO3 = data.addresses[0].address.countryCodeISO3;
    console.log(country, countryCode, countryCodeISO3);
    console.log(data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
