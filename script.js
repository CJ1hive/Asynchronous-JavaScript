const getCountryData = function (country) {
  // Get general country information
  fetch(
    'https://countriesnow.space/api/v0.1/countries/info?returns=flag,unicodeFlag,dialCode,currency',
  )
    .then(response => {
      if (!response.ok) throw new Error('Could not fetch country information');
      return response.json();
    })
    .then(infoData => {
      const data = infoData.data.find(
        c => c.name.toLowerCase() === country.toLowerCase(),
      );

      if (!data) throw new Error('Country not found');

      // Get population
      return fetch('https://countriesnow.space/api/v0.1/countries/population')
        .then(response => {
          if (!response.ok) throw new Error('Could not fetch population');
          return response.json();
        })
        .then(populationData => {
          const populationCountry = populationData.data.find(
            c => c.country.toLowerCase() === country.toLowerCase(),
          );

          // Get the latest population
          const latestPopulation =
            populationCountry?.populationCounts?.at(-1)?.value || 'N/A';

          return {
            ...data,
            population: latestPopulation,
          };
        });
    })
    .then(data => {
      const html = `
        <article class="country">
          <img class="country__img" src="${data.flag}" />
          <div class="country__data">
            <h3 class="country__name">${data.name}</h3>
            <h4 class="country__region">Country</h4>

            <p class="country__row">
              <span>👫</span>
              ${Number(data.population).toLocaleString()} people
            </p>

            <p class="country__row">
              <span>🗣️</span>
              N/A
            </p>

            <p class="country__row">
              <span>💰</span>
              ${data.currency}
            </p>
          </div>
        </article>
      `;

      document
        .querySelector('.countries')
        .insertAdjacentHTML('beforeend', html);
    })
    .catch(error => {
      console.error(error);
    });
};

getCountryData('Germany');
