window.onload = () => {
    // const button = document.querySelector('button[data-action="change"]');
    // button.innerText = '﹖';
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
                lat: 43.773735,
                lng: -79.507699,
            },
            url: './assets/microscope/scene.gltf',
            scale: '1.2 1.2 1.2',
            rotation: '0 180 0',
            info: 'Mircoscope',
            message: 'Microscope'
        },
    ];
}

/*var models = [
    {
        name: 'eden',
        url: './assets/magic_book_of_eden/scene.gltf',
        scale: '0.2 0.2 0.2',
        rotation: '0 180 0',
        info: 'Magic Book',
        message: 'Magic Book'
    },
    
    {
        url: './assets/head/scene.gltf',
        scale: '5.0 5.0 5.0',
        rotation: '0 180 0',
        info: '5',
        message: '5'
    },
    {
        name: 'head',
        url: './assets/head/scene.glb',
        scale: '5.0 5.0 5.0',
        rotation: '0 180 0',
        info: 'Head',
        message: 'Head'
    },
    {
        name: 'food',
        url: './assets/food/scene.gltf',
        scale: '1.5 1.5 1.5',
        rotation: '0 180 0',
        info: 'Food',
        message: 'Food'
    },
    {
        name: 'tennis',
        url: './assets/tennis/scene.gltf',
        scale: '0.2 0.2 0.2',
        rotation: '0 180 0',
        info: 'Tennis',
        message: 'Tennis',
    },
    {
        name: 'snake',
        url: './assets/snake_statue/scene.gltf',
        scale: '1.5 1.5 1.5',
        rotation: '0 180 0',
        info: 'Snake',
        message: 'Snake'
    },
    {
        name: 'books',
        url: './assets/books/scene.gltf',
        scale: '1.2 1.2 1.2',
        rotation: '0 180 0',
        info: 'Bookshelf',
        message: 'Bookshelf'
    },
    {
        name: 'computer',
        url: './assets/books/scene.gltf',
        scale: '1.2 1.2 1.2',
        rotation: '0 180 0',
        info: 'Bookshelf',
        message: 'Bookshelf'
    },
    {
        name: 'telephone',
        url: './assets/books/scene.gltf',
        scale: '1.2 1.2 1.2',
        rotation: '0 180 0',
        info: 'Bookshelf',
        message: 'Bookshelf'
    },
];*/


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

    if (model.name) {
        entity.setAttribute('name', model.name);
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
        let modelName = place.name;
        let url = places.url;
        let info = places.info;
        let message = places.message;
        // ...


        let model = document.createElement('a-entity');
        model.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude};`);

        // setModel(models[modelIndex], model);

        model.setAttribute('animation-mixer', '');

        model.setAttribute('scale',)
        model.setAttribute('rotation',)
        model.setAttribute('position',)
        // model.setAttribute('name',)
        model.setAttribute('gltf-model',)


        const div = document.querySelector('.instructions');
        div.innerText = model.info;

        // document.querySelector('button[data-action="change"]').addEventListener('click', function () {
        //     var entity = document.querySelector('[gps-entity-place]');
        //     modelIndex++;
        //     var newIndex = modelIndex % models.length;
        //     setModel(models[newIndex], entity);
        // });

        scene.appendChild(model);
    });
}
