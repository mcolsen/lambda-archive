import React from "react";

const AdditionalFeature = (props) => {
	const { feature, addFeature } = props;

	const handleClick = () => {
		addFeature(feature.id);
	};

	return (
		<li>
			<button className="button" onClick={handleClick}>
				Add
			</button>
			{feature.name} (+{feature.price})
		</li>
	);
};

export default AdditionalFeature;
