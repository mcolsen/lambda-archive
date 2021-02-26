const validateNewCar = (req, res, next) => {
	if (req.body.vin && req.body.make && req.body.model && req.body.mileage) {
		let car = {};

		//	Type validation for required fields
		if (typeof req.body.vin === "string") {
			car.vin = req.body.vin;
		} else {
			res
				.status(400)
				.json({ message: "Required field 'vin' must be a string" });
		}

		if (typeof req.body.make === "string") {
			car.make = req.body.make;
		} else {
			res
				.status(400)
				.json({ message: "Required field 'make' must be a string" });
		}

		if (typeof req.body.model === "string") {
			car.model = req.body.model;
		} else {
			res
				.status(400)
				.json({ message: "Required field 'model' must be a string" });
		}

		if (typeof req.body.mileage === "number") {
			car.mileage = Math.floor(req.body.mileage);
		} else {
			res
				.status(400)
				.json({ message: "Required field 'mileage' must be a number" });
		}

		//	Type validation for optional fields
		if (typeof req.body.transmission === "string") {
			car.transmission = req.body.transmission;
		}

		if (typeof req.body.title === "string") {
			car.title = req.body.title;
		}

		req.car = car;

		next();
	} else {
		res.status(400).json({
			message:
				"Request lacks one or more required fields: vin, make, model, mileage",
		});
	}
};

module.exports = { validateNewCar };
