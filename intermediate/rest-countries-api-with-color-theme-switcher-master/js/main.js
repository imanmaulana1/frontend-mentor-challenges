$(document).ready(function () {
  fetch('../data.json')
    .then((response) => {
      if (!response.ok) {
        throw new Error('Failed to fetch data.');
      }
      return response.json();
    })
    .then((data) => {
      const renderCountryCards = (data) => {
        const cards = data?.map(
          (item) => `
              <a href="#">
                <article class="card">
                  <header class="card-header">
                    <img src="${item.flags.svg}" alt="Flag of ${item.name}" />
                  </header>
                  <section class="card-body">
                    <h2 class="card-country">${item.name}</h2>
                    <div class="card-details">
                      <div class="card-population">
                        <h3>Population:</h3>
                        <p>${item.population}</p>
                      </div>
                      <div class="card-region">
                        <h3>Region:</h3>
                        <p>${item.region}</p>
                      </div>
                      <div class="card-capital">
                        <h3>Capital:</h3>
                        <p>${item.capital}</p>
                      </div>
                    </div>
                  </section>
                </article>
              </a>`
        );

        const cardHTML = cards.join('');

        $('.countries-wrapper').html(cardHTML);
      };

      const filterByCountry = () => {
        const searchValue = $(this).val().toLowerCase();

        const filterInput = data?.filter((item) =>
          item.name.toLowerCase().includes(searchValue)
        );

        if (!filterInput.length >= 1) {
          $('.countries-wrapper').html('<p>No matching results found.</p>');
        } else {
          renderCountryCards(filterInput);
        }
      };

      const filterByRegion = () => {
        const optionValue = $(this).val();

        const filterOption = data?.filter((item) =>
          item.region.includes(optionValue)
        );

        renderCountryCards(filterOption);
      };

      renderCountryCards(data);

      $('#search').on('input', filterByCountry);
      $('#region').on('change', filterByRegion);
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
    });
});
