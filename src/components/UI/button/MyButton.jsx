import React from "react";
import classes from "./Mybutton.module.css";

const MyButton = function ({ children, ...props }) {
	return (
		<button {...props} className={classes.myBtn}>
			{children}
		</button>
	);
};
export default MyButton;
