// 'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderCountry = function (data, className = '') {
  const html = `
  <article class="country ${className}">
    <img class="country__img" src="${data.flags.svg}" />
    <div class="country__data">
      <h3 class="country__name">${data.name}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        +data.population / 1000000
      ).toFixed(1)} people</p>
      <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
      <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
    </div>
  </article>
  `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};
const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  // countriesContainer.style.opacity = 1;
};
// // NEW COUNTRIES API URL (use instead of the URL shown in videos):
// // https://restcountries.com/v2/name/portugal

// // NEW REVERSE GEOCODING API URL (use instead of the URL shown in videos):
// // https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}

// ///////////////////////////////////////
// // const getCountry = function (coutnryName) {
// //   const request = new XMLHttpRequest(); // Oldschool way

// //   // XMLHttpRequest we need it in the future
// //   // Show us how old ajax used to function back in the day

// //   request.open(
// //     'GET',
// //     `https://restcountries.com/v2/name/${coutnryName.toLowerCase()}`
// //   );
// //   request.send();

// //   request.addEventListener('load', function () {
// //     const [data] = JSON.parse(this.responseText);
// //     console.log(data);
// //     const html = `
// //         <article class="country">
// //               <img class="country__img" src="${data.flag}" />
// //               <div class="country__data">
// //                 <h3 class="country__name">${data.name}</h3>
// //                 <h4 class="country__region">${data.region}</h4>
// //                 <p class="country__row"><span>👫</span>${(
// //                   +data.population / 1000000
// //                 ).toFixed(1)} M</p>
// //                 <p class="country__row"><span>🗣️</span>${
// //                   data.languages[0].name
// //                 }</p>
// //                 <p class="country__row"><span>💰</span>${
// //                   data.currencies[0].name
// //                 }</p>
// //               </div>
// //             </article>
// //         `;

// //     countriesContainer.insertAdjacentHTML('beforeend', html);
// //     countriesContainer.style.opacity = 1;
// //   });
// // };

// // getCountry('Nigeria');
// // getCountry('Vietnam');
// // getCountry('Greece');
// // ✅✅✅✅✅✅

// // Callback Hell

// //
// // const request = fetch('https://countriesnow.space/api/v0.1/countries')
// //   .then(res => res.json())
// //   .then(data => console.log(data));

// // const getCountryData = function (coutnry) {
// //   fetch('https://countriesnow.space/api/v0.1/countries').then(
// //     function (response) {
// //       console.log(Response);
// //     },
// //   );
// // };
// // console.log(request);
// // getCountryData();

// // const getCountryData = function (country) {
// //   fetch(`https://countries.dev/name/${country}`)
// //     .then(Response => Response.json())
// //     .then(data => {
// //       renderCountry(data[0]);
// //       console.log(data[0]);

// //       const neighbour = data[0].borders[5];
// //       if (!neighbour) return;

// //       return fetch(`https://countries.dev/alpha/${neighbour}`);
// //     })
// //     .then(Response => Response.json())
// //     .then(data => renderCountry(data, 'neighbour'))
// //     .catch(err => {
// //       console.error(`${err} there is an error`);
// //       renderError(`something went wrong PAL ${err.message}. try again`);
// //     })
// //     .finally(() => {
// //       countriesContainer.style.opacity = 1;
// //     });

// // };
// const getJson = function (url, errorMsg = `something went wrong P..Pal`) {
//   return fetch(url).then(response => {
//     if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);
//     return response.json();
//   });
// };

// const getCountryData = function (country) {
//   getJson(`https://countries.dev/name/${country}`, `country not found`)
//     .then(data => {
//       renderCountry(data[0]);
//       console.log(data[0]);

//       const neighbour = data[0].borders[5];
//       if (!neighbour) throw new Error(`NO neighbour found!`);

//       return getJson(
//         `https://countries.dev/alpha/${neighbour}`,
//         `country not found`,
//       );
//     })

//     .then(data => renderCountry(data, 'neighbour'))
//     .catch(err => {
//       console.error(`${err} there is an error`);
//       renderError(`something went wrong PAL ${err.message}. try again`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };
// btn.addEventListener('click', function () {
//   getCountryData(`iraq`);
// });
// // getCountryData(`ajdsjadla`);

/*
const reverseGeocode = function (lat, lon) {
  fetch(
    `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`,
  )
    .then(res => {
      if (!res.ok) throw new Error(`API GeoCode error, ${res.status}`);
      return res.json();
    })
    .then(data => {
      console.log(data);
      console.log(`you are in ${data.address.city} , ${data.address.country}`);
      return fetch(`https://countries.dev/name/${data.address.country}`);
    })
    .then(res => {
      if (!res.ok)
        throw new Error(`this isnt working for us ${response.status}`);
      return res.json();
    })
    .then(data => renderCountry(data[0]))
    .catch(err => console.error(`you have ${err.message}`));
};

reverseGeocode(52.508, 13.381);
reverseGeocode(33.2237, 43.6859);
reverseGeocode(60, 100);
*/
// console.log(`test start`);
// setTimeout(() => console.log(`0 time out ended`), 0);
// Promise.resolve(`promis is resolved 1`).then(res => console.log(res));
// Promise.resolve(`promis is resolved 2`).then(res => {
//   for (let i = 0; i < 100000000; i++) {}
//   console.log(res);
// });

// console.log(`test ended`);

const wait = function (second) {
  return new Promise(function (resolve) {
    setTimeout(resolve, second * 1000);
  });
};

wait(1)
  .then(res => {
    console.log(`1 second passed`);
    return wait(1);
  })
  .then(res => {
    console.log(`2 seconds passed`);
    return wait(1);
  })
  .then(res => {
    console.log(`3 seconds passed`);
    return wait(1);
  });
