window.onload = () => {
    const button = document.querySelector('button[data-action="change"]');
    button.innerText = '﹖';
    let places = staticLoadPlaces();
    renderPlaces(places);
    console.log('Hello');

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            gpspos => {
                console.log(`Lat ${gpspos.coords.latitude} Lon ${gpspos.coords.longitude}`); // show on the console
            },
            err => {
                alert(`An error occurred: ${err.code}`);
            }
        );
    } else {
        alert("Sorry, geolocation not supported in this browser");
    }
};
var modelIndex = 0; 

function staticLoadPlaces() {
    return [{name: 'myModels',location: {lat: 43.772842,lng: -79.505365,}},];
}

var models = [
    /*
    {
        
        url: './assets/magnemite/scene.gltf',
        scale: '0.5 0.5 0.5',
        rotation: '0 180 0',
        info: '1',
        message: '1'
    },
    {
        url: './assets/herobrine/scene.gltf',
        scale: '0.5 0.5 0.5',
        rotation: '0 180 0',
        info: '2',
        message: '2'
    },*/
    {
        url: './assets/magic_book_of_eden/scene.gltf',
        scale: '0.2 0.2 0.2',
        rotation: '0 180 0',
        info: 'Magic Book',
        message: 'Magic Book'
    },
    {
        url: './assets/snake_statue/scene.gltf',
        scale: '1.5 1.5 1.5',
        rotation: '0 180 0',
        info: 'Snake',
        message: 'Snake'
    },
    /*
    {
        url: './assets/head/scene.gltf',
        scale: '5.0 5.0 5.0',
        rotation: '0 180 0',
        info: '5',
        message: '5'
    },*/
    {
        url: './assets/head/scene.glb',
        scale: '5.0 5.0 5.0',
        rotation: '0 180 0',
        info: 'Head',
        message: 'Head'
    },
    {
        url: './assets/food/scene.gltf',
        scale: '1.5 1.5 1.5',
        rotation: '0 180 0',
        info: 'Food',
        message: 'Food'
    },
    {
        url: './assets/tennis/scene.gltf',
        scale: '0.2 0.2 0.2',
        rotation: '0 180 0',
        info: 'Tennis',
        message: 'Tennis',
    },
    {
        url: './assets/books/scene.gltf',
        scale: '1.2 1.2 1.2',
        rotation: '0 180 0',
        info: 'Bookshelf',
        message: 'Bookshelf'
    },
];


var setModel = function (model, entity) {
    if (model.scale) {
        entity.setAttribute('scale', model.scale);
    }

    if (model.rotation) {
        entity.setAttribute('rotation', model.rotation);
    }

    if (model.position) {
        entity.setAttribute('position', model.position);
    }

    entity.setAttribute('gltf-model', model.url);

    const div = document.querySelector('.instructions');
    div.innerText = model.info;
};

function renderPlaces(places) {
    let scene = document.querySelector('a-scene');

    places.forEach((place) => {
        let latitude = place.location.lat;
        let longitude = place.location.lng;

        let model = document.createElement('a-entity');
        model.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude};`);

        setModel(models[modelIndex], model);

        model.setAttribute('animation-mixer', '');

        document.querySelector('button[data-action="change"]').addEventListener('click', function () {
            var entity = document.querySelector('[gps-entity-place]');
            modelIndex++;
            var newIndex = modelIndex % models.length;
            setModel(models[newIndex], entity);
        });

        scene.appendChild(model);
    });
}
