require('dotenv').config();
const API_KEY = process.env.API_KEY;

const ipAddress = document.getElementById('ipaddress-result');
const loc = document.getElementById('location-result');
const timezoneResult = document.getElementById('timezone-result');
const ispResult = document.getElementById('isp-result');
const inputIP = document.getElementById('ipaddress');
const myForm = document.getElementById('my-form');
const map = L.map('map');

const getMap = (lat, lng, city, region, country, postalCode) => {
  const detailLocation = [city, region, country, postalCode];

  map.setView([lat, lng], 13);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  const customIcon = L.icon({
    iconUrl: './images/icon-location.svg',
    iconAnchor: [16, 32],
    popupAnchor: [8, -32],
  });

  L.marker([lat, lng], { icon: customIcon })
    .addTo(map)
    .bindPopup(detailLocation.join(', '))
    .openPopup();
};

const getMyIPAddress = async () => {
  try {
    const response = await fetch('https://api.ipify.org?format=json');
    const { ip } = await response.json();

    return ip;
  } catch (error) {
    console.log('Error fetching IP Address: ', error);
  }
};

const searchIPAddress = async (ip) => {
  const IPAddress = ip || (await getMyIPAddress());
  try {
    const response = await fetch(
      `https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}&ipAddress=${IPAddress}`
    );

    if (!response.ok) {
      const errorData = await response.json();
      alert(errorData.messages);
      return;
    }

    const {
      ip,
      isp,
      location: { city, region, country, timezone, postalCode, lat, lng },
    } = await response.json();

    ipAddress.textContent = ip;
    loc.textContent = `${region}, ${country} ${postalCode}`;
    timezoneResult.textContent = `UTC ${timezone}`;
    ispResult.textContent = isp === '' ? '-' : isp;

    getMap(lat, lng, city, region, country, postalCode);
  } catch (error) {
    console.log('Error searching IP Address: ', error);
  }
};

const resolveDomain = async (domain) => {
  try {
    const response = await fetch(`https://dns.google/resolve?name=${domain}`);
    const { Answer: answer } = await response.json();

    if (answer && answer.length > 0) {
      return answer[0].data;
    } else {
      throw new Error('No IP address found.');
    }
  } catch (error) {
    console.log(error);
    alert(error.message);
  }
};

const isDomain = (input) => {
  const pattern = /^[A-Za-z0-9-]{1,63}\.[A-Za-z]{2,6}$/;

  return pattern.test(input);
};

const handleSubmit = async (e) => {
  e.preventDefault();

  const inputValue = inputIP.value.trim();
  if (inputValue) {
    let ip = inputValue;
    if (isDomain(inputValue)) {
      try {
        ip = await resolveDomain(inputValue);
      } catch (error) {
        alert(error.message);
        return;
      }
    }
    searchIPAddress(ip);
  }
};

document.addEventListener('DOMContentLoaded', function () {
  searchIPAddress();
  myForm.addEventListener('submit', handleSubmit);
});
