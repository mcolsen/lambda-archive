import React from "react";

const AddedFeature = (props) => {
	const { feature, removeFeature } = props;

	const handleClick = () => {
		removeFeature(feature.id);
	};

	return (
		<li>
			<button className="button" onClick={handleClick}>
				X
			</button>
			{feature.name}
		</li>
	);
};

export default AddedFeature;
