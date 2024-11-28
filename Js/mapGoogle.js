function initMap(){


    let bsas = { lat: -34.6037, lng: -58.3816 };

    let map = new google.maps.Map(document.getElementById('map'),
    { zoom: 15,
       center: bsas
    }
    );

        let directionsService = new google.maps.DirectionsService();
        let directionsRenderer = new google.maps.DirectionsRenderesr();
        directionsRenderer.setMap(map);

    let request = { 
        origin: 'Buenos Aires',
        destination: 'Esquel',
        travelMode: 'DRIVING'
    };



directionsService.route(request, function(result, status) {
        if (status == 'OK') {
            directionsRenderer.setDirections(result);
        } else {
            console.error('Error al obtener direcciones: ' + status);
        }
    });
 }