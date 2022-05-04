window.onload = () => {
    let places = staticLoadPlaces();
    renderPlaces(places);
    console.log('Hello');
    getLocation();
//     var id = navigator.geolocation.watchPosition(success[, error[, options]]);
//     navigator.geolocation.clearWatch(id);
//     let check = document.querySelector('a-entity').getAttribute('gps-entity-place');
//     console.log(`${check}`);
};

function showLocation(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    //console.log("Latitude : " + latitude + " Longitude: " + longitude);
    alert("Latitude : " + latitude + " Longitude: " + longitude);
 };

 function errorHandler(err) {
    if(err.code == 1) {
       console.log("Error: Access is denied!");
    } else if( err.code == 2) {
       console.log("Error: Position is unavailable!");
    }
 };

 function getLocation() {
    if(navigator.geolocation) {
       // timeout at 60000 milliseconds (60 seconds)
       let options = {timeout:60000};
       let geoLoc = navigator.geolocation;
       let watchID = geoLoc.watchPosition(showLocation, errorHandler, options);
    } else {
       console.log("Sorry, browser does not support geolocation!");
    }
 };

function staticLoadPlaces() {
    return [
        {
            name: 'eden',
            location: 
            {
                lat: 43.772842,
                lng: -79.505365,
            },
            url: './assets/magic_book_of_eden/scene.gltf',
            scale: '0.2 0.2 0.2',
            rotation: '0 180 0',
            info: 'Eden Magic Book',
            message: 'Eden Magic Book',
        },
        {
            name: 'head',
            location: 
            {
                lat: 43.773191,
                lng: -79.503064,
            },
            name: 'head',
            url: './assets/head/scene.glb',
            scale: '5.0 5.0 5.0',
            rotation: '0 180 0',
            info: 'Head',
            message: 'Head'
        },
        {
            name: 'food',
            location: 
            {
                lat: 43.774261,
                lng: -79.501614,
            },
            name: 'food',
            url: './assets/food/scene.gltf',
            scale: '1.5 1.5 1.5',
            rotation: '0 180 0',
            info: 'Food',
            message: 'Food'
        },
        {
            name: 'tennis',
            location: 
            {
                lat: 43.7718,
                lng: -79.5126,
            },
             name: 'tennis',
            url: './assets/tennis/scene.gltf',
            scale: '0.2 0.2 0.2',
            rotation: '0 180 0',
            info: 'Tennis',
            message: 'Tennis',
            
        },
        {
            name: 'snake',
            location: 
            {
                lat: 43.772087,
                lng: -79.502759,
            },
            name: 'snake',
            url: './assets/snake_statue/scene.gltf',
            scale: '1.5 1.5 1.5',
            rotation: '0 180 0',
            info: 'Snake',
            message: 'Snake'
        },
        {
            name: 'variety_of_books',
            location: 
            {
                lat: 43.772342,
                lng: -79.505551,
            },
            url: './assets/variety_of_books/scene.gltf',
            scale: '1.2 1.2 1.2',
            rotation: '0 180 0',
            info: 'Variety of Books',
            message: 'Variety of Books'
        },
        {
            name: 'computer',
            location: 
            {
                lat: 43.774238,
                lng: -79.505537,
            },
            url: './assets/retro_computer_setup_free/scene.gltf',
            scale: '1.2 1.2 1.2',
            rotation: '0 180 0',
            info: 'Computer',
            message: 'Computer'
        },
        {
            name: 'telephone',
            location: 
            {
                lat: 43.772345,
                lng: -79.4980828,
            },
            url: './assets/telephone/scene.gltf',
            scale: '1.2 1.2 1.2',
            rotation: '0 180 0',
            info: 'Telephone',
            message: 'Telephone'
        },
        {
            name: 'microscope',
            location: 
            {
                lat: 43.836571469193316,
                lng: -78.99698812797654,
            },
            url: './assets/microscope/scene.gltf',
            scale: '1.2 1.2 1.2',
            rotation: '0 180 0',
            info: 'Microscope',
            message: 'Microscope'
        },
    ];
}

function renderPlaces(places) {
    let scene = document.querySelector('a-scene');

    places.forEach((place) => {
        let latitude = place.location.lat;
        let longitude = place.location.lng;
        let modelName = place.name;
        let url = place.url;
        let info = place.info;
        let message = place.message;
        let rot = place.rotation;
        let scl = place.scale;

        let model = document.createElement('a-entity');
        model.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude};`);
        model.setAttribute('id', modelName);
        model.setAttribute('animation-mixer', '');
        model.setAttribute('scale', scl);
        model.setAttribute('rotation', rot);
        model.setAttribute('gltf-model', url);
        console.log(`${url}`);
                
        model.addEventListener('loaded', () => {
            window.dispatchEvent(new CustomEvent('gps-entity-place-loaded'));        
            const div = document.querySelector('.instructions');
            div.innerText = info;
            console.log(div.innerText);
            getLocation();
        });

        scene.appendChild(model);
        console.log(`${modelName}`);
    });
 }