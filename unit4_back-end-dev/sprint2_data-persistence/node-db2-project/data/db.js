const knex = require("knex");
const config = require("../knexfile");

const db = knex(config.development);

const getAllCars = () => {
	return db("cars");
};

const getCar = (id) => {
	return db("cars").where({ id: id });
};

const addCar = (car) => {
	return db("cars").insert(car);
};

module.exports = { getAllCars, getCar, addCar };
