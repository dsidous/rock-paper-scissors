import React from 'react';


import './styles.css';
import Button from '../../../../components/Button';

const Modes = ({ label, onClickMode }) => (
	<div className="Modes">
		<span className="label">{label}</span><br />
		<Button
			onClick={onClickMode}
		>
			CHANGE MODE
		</Button>
	</div>
);


export default Modes;
