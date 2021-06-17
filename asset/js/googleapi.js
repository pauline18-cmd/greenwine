let map = null;
let marker = new google.maps.marker({
    position: {lat: lat, lng: lon},

    map: map
});

function initMap() {
    const boutique = {'lat':48.879717398608854,'lng': 2.364295152254181};
    map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: 48.879717398608854, lng: 2.364295152254181 },
      zoom: 15,
    });
    new google.maps.Marker({
        position: boutique,
        map,
        title: 'boutique',
    });

};
