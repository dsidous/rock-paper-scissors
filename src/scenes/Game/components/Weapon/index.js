import React from 'react';

import './styles.css';

import Loading from '../../../../components/Loading';

const Weapon = ({ icon, loading }) => (
	<span
		className={["Weapon",
			!loading && icon ? `fa fa-hand-${icon}-o` : 'empty'].join(' ')}
	>
		{!loading && !icon && '?'}
		{loading && <Loading />}
	</span>
);


export default Weapon; 
