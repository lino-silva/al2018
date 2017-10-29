/* globals Swiper, document, google, */

const swiper = new Swiper('.swiper-container', {  // eslint-disable-line no-unused-vars
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  loop: true,
  pagination: {
    el: '.swiper-pagination',
  },
});

function initialize() {  // eslint-disable-line no-unused-vars
  const bounds = new google.maps.LatLngBounds();
  const mapOptions = {
    mapTypeId: 'roadmap',
  };

  // Display a map on the page
  const map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);
  map.setTilt(45);

  // Multiple Markers
  const markers = [
      ['Casa do Egipto', 41.5258268, -8.6185075],
      ['Barcelos Guesthouse', 41.5265527, -8.622268],
  ];

  // Info Window Content
  const infoWindowContent = [
    ['<div class="info_content">',
      '<h3>Casa do Egipto</h3>',
      '<p>A Casa do Egipto, localizada em Barcelinhos, de arquitetura palaciana é um espaço monumental e lindíssimo ideal para celebrar um casamento único. Oferece a oportunidade de transformar momentos especiais em memórias inesquecíveis. Quer seja para um evento mais intimo ou para um de maior dimensão, este espaço permite um cunho de exclusividade.</p>',
      '</div>']
      .join(''),
    ['<div class="info_content">',
      '<h3>Barcelos Guesthouse</h3>',
      '<p>Na frente ribeirinha de Barcelinhos, em pleno coração do centro histórico de Barcelos, nasce a primeira Guest House do concelho, a BWay Guest House. Com uma localização e vistas privilegiadas, a casa é uma janela para a cidade de Barcelos, onde a Ponte sobre o Cávado e o Paço dos Condes de Barcelos, irrompem fulgurantes, na paisagem!</p>',
      '</div>']
      .join(''),
  ];

  // Display multiple markers on a map
  const infoWindow = new google.maps.InfoWindow();
  let marker;
  let i;

  // Loop through our array of markers & place each one on the map
  for (i = 0; i < markers.length; i += 1) {
    const position = new google.maps.LatLng(markers[i][1], markers[i][2]);
    bounds.extend(position);
    marker = new google.maps.Marker({
      position,
      map,
      title: markers[i][0],
    });

      // Allow each marker to have an info window
    google.maps.event.addListener(marker, 'click', (function listener(m, i) { // eslint-disable-line
      return function listenerReturned() {
        infoWindow.setContent(infoWindowContent[i]);
        infoWindow.open(map, m);
      };
    }(marker, i)));

      // Automatically center the map fitting all markers on the screen
    map.fitBounds(bounds);
  }

  // Override our map zoom level once our fitBounds function runs (Make sure it only runs once)
  const boundsListener = google.maps.event.addListener((map), 'bounds_changed', function boundListener() {
    this.setZoom(17);
    google.maps.event.removeListener(boundsListener);
  });
}
