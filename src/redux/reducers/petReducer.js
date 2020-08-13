const INITIAL_STATE = {
    errors: [],
    isFetching: null,
    pet: {
        "id": 48763090,
        "organization_id": "TX2428",
        "url": "https://www.petfinder.com/dog/pepe-48763090/tx/san-angelo/critter-shack-rescue-tx2428/?referrer_id=ddaa8afe-9c1d-4732-843b-f802448cb766",
        "type": "Dog",
        "species": "Dog",
        "breeds": {
            "primary": "Chihuahua",
            "secondary": null,
            "mixed": false,
            "unknown": false
        },
        "colors": {
            "primary": null,
            "secondary": null,
            "tertiary": null
        },
        "age": "Young",
        "gender": "Male",
        "size": "Small",
        "coat": "Short",
        "attributes": {
            "spayed_neutered": true,
            "house_trained": false,
            "declawed": null,
            "special_needs": false,
            "shots_current": true
        },
        "environment": {
            "children": false,
            "dogs": null,
            "cats": null
        },
        "tags": [],
        "name": "Pepe",
        "description": "Pepe is a chi about 2 years old. He is a cuddle bug! He is a little shy at first...",
        "organization_animal_id": null,
        "photos": [
            {
                "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/48763090/1/?bust=1597282718&width=100",
                "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/48763090/1/?bust=1597282718&width=300",
                "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/48763090/1/?bust=1597282718&width=600",
                "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/48763090/1/?bust=1597282718"
            },
            {
                "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/48763090/2/?bust=1597282590&width=100",
                "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/48763090/2/?bust=1597282590&width=300",
                "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/48763090/2/?bust=1597282590&width=600",
                "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/48763090/2/?bust=1597282590"
            },
            {
                "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/48763090/3/?bust=1597282692&width=100",
                "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/48763090/3/?bust=1597282692&width=300",
                "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/48763090/3/?bust=1597282692&width=600",
                "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/48763090/3/?bust=1597282692"
            }
        ],
        "primary_photo_cropped": {
            "small": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/48763090/1/crop/?bust=1597282718&width=300",
            "medium": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/48763090/1/crop/?bust=1597282718&width=450",
            "large": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/48763090/1/crop/?bust=1597282718&width=600",
            "full": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/48763090/1/crop/?bust=1597282718"
        },
        "videos": [],
        "status": "adoptable",
        "status_changed_at": "2020-08-13T01:46:09+0000",
        "published_at": "2020-08-13T01:46:09+0000",
        "distance": null,
        "contact": {
            "email": "crittershackrescue@gmail.com",
            "phone": "(325) 450-7074",
            "address": {
                "address1": null,
                "address2": null,
                "city": "San Angelo",
                "state": "TX",
                "postcode": "76904",
                "country": "US"
            }
        },
        "_links": {
            "self": {
                "href": "/v2/animals/48763090"
            },
            "type": {
                "href": "/v2/types/dog"
            },
            "organization": {
                "href": "/v2/organizations/tx2428"
            }
        }
    }
}

export const petReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'GET_PET_START':
            return { ...state, isFetching: true }
        case 'GET_PET':
            return {
                ...state,
                pet: action.payload,
                isFetching: false
            }
            return state
        default:
            return state
    }
}
