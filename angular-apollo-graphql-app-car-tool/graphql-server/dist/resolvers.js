'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resolvers = undefined;

var _nodeFetch = require('node-fetch');

var _nodeFetch2 = _interopRequireDefault(_nodeFetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const resolvers = exports.resolvers = {
  Query: {
    cars: (_1, _2, { restURL }) => {
      return (0, _nodeFetch2.default)(`${restURL}/cars`).then(res => res.json());
    }
  },
  Mutation: {
    appendCar: (_, { car }, { restURL }) => {
      return (0, _nodeFetch2.default)(`${restURL}/cars`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(car)
      }).then(res => res.json());
    },
    deleteCar: async (_, { carId }, { restURL }) => {
      const car = await (0, _nodeFetch2.default)(`${restURL}/cars/${encodeURIComponent(carId)}`).then(res => res.json());
      await (0, _nodeFetch2.default)(`${restURL}/cars/${encodeURIComponent(carId)}`, {
        method: 'DELETE'
      });
      return car;
    },
    replaceCar: async (_, { car }, { restURL }) => {

      const oldCar = await (0, _nodeFetch2.default)(`${restURL}/cars/${encodeURIComponent(car.id)}`).then(res => res.json());

      await (0, _nodeFetch2.default)(`${restURL}/cars/${encodeURIComponent(car.id)}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(car)
      });

      return oldCar;
    }
  }
};