import React from "react";
import AdditionalFeature from "./AdditionalFeature";

const AdditionalFeatures = (props) => {
	const { additionalFeatures, addFeature } = props;

	return (
		<div className="content">
			<h4>Additional Features</h4>
			{additionalFeatures.length ? (
				<ol type="1">
					{additionalFeatures.map((item) => (
						<AdditionalFeature
							key={item.id}
							feature={item}
							addFeature={addFeature}
						/>
					))}
				</ol>
			) : (
				<p>Nice looking car!</p>
			)}
		</div>
	);
};

export default AdditionalFeatures;
