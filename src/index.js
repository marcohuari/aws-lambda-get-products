'use strict';

module.exports.getProducts = async (event) => {
    // TODO implement
    const response = {
        statusCode: 200,
        body: products(),
    };
    return response;
};


const products = function () {
    return [
        {
            id: 1,
            name: 'Lomo Saltado',
            price: 12.5
        },
        {
            id: 2,
            name: 'Arroz a la cubana',
            price: 8.5
        },
        {
            id: 3,
            name: 'Pizza Vegetariana',
            price: 25.5
        },
        {
            id: 4,
            name: 'Pato en aji',
            price: 25.5
        },
        {
            id: 5,
            name: 'Rocoto Relleno',
            price: 35.0
        }
    ];
}