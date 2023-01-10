import React from "react";

const MySelect = ({ value, onChange, options, defaultValue }) => {
	return (
		<select
			style={{ borderRadius: "15px", padding: "3px", margin: " 5px 0 " }}
			value={value}
			onChange={(event) => onChange(event.target.value)}
		>
			<option disabled value=''>
				{defaultValue}
			</option>
			{options.map((option) => (
				<option key={option.value} value={option.value}>
					{option.name}
				</option>
			))}
		</select>
	);
};

export default MySelect;
