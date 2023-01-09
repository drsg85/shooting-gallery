const map = L.map('map')
  .on('load', () => {
  })
  .setView({
    lat: 54.710641,
    lng: 20.485406,
  }, 16);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const marker = L.marker(
    {
      lat: 54.710641,
      lng: 20.485406,
    },
  );

  marker.addTo(map);

  marker.bindPopup("ТИР39").openPopup();