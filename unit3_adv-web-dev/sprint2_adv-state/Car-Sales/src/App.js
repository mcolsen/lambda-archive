import React from "react";
import { connect } from "react-redux";
import Header from "./components/Header";
import AddedFeatures from "./components/AddedFeatures";
import AdditionalFeatures from "./components/AdditionalFeatures";
import Total from "./components/Total";
import { addFeature, removeFeature } from "./carSlice";

const App = (props) => {
	const {
		car,
		additionalFeatures,
		additionalPrice,
		addFeature,
		removeFeature,
	} = props;

	return (
		<div className="boxes">
			<div className="box">
				<Header car={car} />
				<AddedFeatures car={car} removeFeature={removeFeature} />
			</div>
			<div className="box">
				<AdditionalFeatures
					additionalFeatures={additionalFeatures}
					addFeature={addFeature}
				/>
				<Total car={car} additionalPrice={additionalPrice} />
			</div>
		</div>
	);
};

const mapState = (state) => ({
	car: state.car,
	additionalFeatures: state.additionalFeatures,
	additionalPrice: state.additionalPrice,
});

const mapDispatch = {
	addFeature,
	removeFeature,
};

export default connect(mapState, mapDispatch)(App);
