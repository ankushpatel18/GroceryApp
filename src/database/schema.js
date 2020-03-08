
const PRODUCTS = {
    name: 'Products_Schema',
    primaryKey: 'id',
    properties: {
        id: 'int',
        title: 'string',
        subtitle: 'string',
        author: 'string',
        published: 'string',
        publisher: 'string',
        description: 'string',
        website: 'string',
        price: 'int'
    }
}

const ORDERS = {
    name: 'Orders_Schema',
    primaryKey: 'id',
    properties: {
        id: 'int',
        title: 'string?',
        subtitle: 'string?',
        author: 'string?',
        published: 'string?',
        publisher: 'string?',
        description: 'string?',
        website: 'string?',
        price: 'int?',
        time_stamp: 'string?',
        location: 'int?',
        address: 'string?',
        quantity: 'int?',
        totalAmount: 'string?',
        status: 'string?'
    }
}

export default [
    PRODUCTS,
    ORDERS
];
