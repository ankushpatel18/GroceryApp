
const PRODUCTS = {
    name: 'Products_Schema',
    primaryKey: 'id',
    properties: {
        id: 'int',
        title: 'string',
        artist: 'string',
        image: 'string',
        thumbnail_image: 'string',
        price: 'int'
    }
}

const ORDERS = {
    name: 'Orders_Schema',
    primaryKey: 'id',
    properties: {
        id: 'int',
        title: 'string',
        artist: 'string',
        image: 'string',
        thumbnail_image: 'string',
        price: 'int',
        time_stamp: 'string',
        location: 'int',
        address: 'string'
    }
}

export default [
    PRODUCTS,
    ORDERS
];
