'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

// NEW COUNTRIES API URL (use instead of the URL shown in videos):
// https://restcountries.com/v2/name/portugal

// NEW REVERSE GEOCODING API URL (use instead of the URL shown in videos):
// https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}

///////////////////////////////////////
// const getCountry = function (coutnryName) {
//   const request = new XMLHttpRequest(); // Oldschool way

//   // XMLHttpRequest we need it in the future
//   // Show us how old ajax used to function back in the day

//   request.open(
//     'GET',
//     `https://restcountries.com/v2/name/${coutnryName.toLowerCase()}`
//   );
//   request.send();

//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);
//     const html = `
//         <article class="country">
//               <img class="country__img" src="${data.flag}" />
//               <div class="country__data">
//                 <h3 class="country__name">${data.name}</h3>
//                 <h4 class="country__region">${data.region}</h4>
//                 <p class="country__row"><span>👫</span>${(
//                   +data.population / 1000000
//                 ).toFixed(1)} M</p>
//                 <p class="country__row"><span>🗣️</span>${
//                   data.languages[0].name
//                 }</p>
//                 <p class="country__row"><span>💰</span>${
//                   data.currencies[0].name
//                 }</p>
//               </div>
//             </article>
//         `;

//     countriesContainer.insertAdjacentHTML('beforeend', html);
//     countriesContainer.style.opacity = 1;
//   });
// };

// getCountry('Nigeria');
// getCountry('Vietnam');
// getCountry('Greece');
// ✅✅✅✅✅✅

// Callback Hell

//
// const request = fetch('https://countriesnow.space/api/v0.1/countries')
//   .then(res => res.json())
//   .then(data => console.log(data));

// const getCountryData = function (coutnry) {
//   fetch('https://countriesnow.space/api/v0.1/countries').then(
//     function (response) {
//       console.log(Response);
//     },
//   );
// };
// console.log(request);
// getCountryData();

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

const getCountryData = function (country) {
  fetch(`https://countries.dev/name/${country}`)
    .then(Response => Response.json())
    .then(data => renderCountry(data[0]));
  // .then(function (response) {
  //   console.log(response);
  //   return response.json();
  // })
  // .then(function (data) {
  //   console.log(data);
  // });
};
getCountryData(`iraq`);
