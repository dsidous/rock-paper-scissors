import React from 'react';

import './styles.css';

const Button = ({ children, ...rest }) => (
	<button
		className="Button"
		{...rest}
	>
		{children}
	</button>
);

export default Button;
