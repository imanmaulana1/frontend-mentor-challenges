$(document).ready(function () {
  const params = new URLSearchParams(window.location.search);
  const countryId = params.get('id');

  function getDetailCountry(id, data) {
    const result = data?.filter((data) => data.alpha3Code === id.toUpperCase());
    renderData(result, data);
  }

  function findCountryByCode(code, data) {
    return data?.find((data) => data.alpha3Code === code)?.name;
  }

  function renderData(data, datas) {
    const country = data?.map(
      (item) =>
        `<div class="country-flag">
          <img src="${item.flag}" alt="Flag of ${item.name}" class="country-flag" />
        </div>
        <div class="country-info">
          <h1 class="country-name">${item.name}</h1>
          <div class="country-details">
            <div class="country-detail-group">
              <div class="country-detail">
                <h3>Native Name:</h3>
                <p>${item.nativeName}</p>
              </div>
              <div class="country-detail">
                <h3>Population:</h3>
                <p>${item.population}</p>
              </div>
              <div class="country-detail">
                <h3>Region:</h3>
                <p>${item.region}</p>
              </div>
              <div class="country-detail">
                <h3>Sub Region:</h3>
                <p>${item.subregion}</p>
              </div>
              <div class="country-detail">
                <h3>Capital:</h3>
                <p>${item.capital}</p>
              </div>
            </div>
            <div class="country-detail-group">
              <div class="country-detail">
                <h3>Top Level Domain:</h3>
                <p>${item.topLevelDomain[0]}</p>
              </div>
              <div class="country-detail">
                <h3>Currencies:</h3>
                <p>${item.currencies.map((item) => item.name)}</p>
              </div>
              <div class="country-detail">
                <h3>Languages:</h3>
                <p>${item.languages
                  .map((language) => language.name)
                  .join(', ')}</p>
              </div>
            </div>
          </div>
          <div class="country-borders">
            <h2>Border Countries:</h2>
            <ul>
              ${
                item?.borders?.length > 0
                  ? item.borders
                      .map(
                        (border) =>
                          `<li class="list"><a href="./detail.html?id=${border.toLowerCase()}">${
                            findCountryByCode(border, datas).length > 20
                              ? findCountryByCode(border, datas).slice(0, 15) +
                                `...`
                              : findCountryByCode(border, datas)
                          }</a></li>`
                      )
                      .join('')
                  : `<li>-</li>`
              }
            </ul>
          </div>
        </div>`
    );

    $('.country').html(country);
  }

  fetch('../data.json')
    .then((response) => response.json())
    .then((data) => {
      getDetailCountry(countryId, data);
    });
});
