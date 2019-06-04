

export default class Restaurant {

    constructor(restaurantName,address,lat,long,ratings,stars,comment){
        this._restaurantName = restaurantName;
        this._address = address;
        this._lat = lat;
        this._long = long;
        this._ratings = ratings;
        this._stars = stars;
        this._comment = comment;
    }

    get restaurantName() {
        return this._restaurantName;
    }

    set restaurantName(value) {
        this._restaurantName = value;
    }

    get address() {
        return this._address;
    }

    set address(value) {
        this._address = value;
    }

    get lat() {
        return this._lat;
    }

    set lat(value) {
        this._lat = value;
    }

    get long() {
        return this._long;
    }

    set long(value) {
        this._long = value;
    }

    get ratings() {
        return this._ratings;
    }

    set ratings(value) {
        this._ratings = value;
    }

    get stars() {
        return this._stars;
    }

    set stars(value) {
        this._stars = value;
    }

    get comment() {
        return this._comment;
    }

    set comment(value) {
        this._comment = value;
    }
}

